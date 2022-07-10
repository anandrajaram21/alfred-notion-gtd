import * as chrono from "chrono-node";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

const { DATABASE_ID, TASK_NAME, DATE_NAME } = process.env;

const sliceDateFromTaskName = (name) => {
  const result = chrono.parse(name)[0]

  if (result) {
    const startIndex = result.index - 1
    const endIndex = result.index + result.text.length
    const sliciedTaskName = name.slice(0, startIndex) + name.slice(endIndex)
    return sliciedTaskName
  }
  return name
}

async function createTask(
  notionClient,
  taskName,
  databaseId,
  tableTaskName,
  tableDateName
) {

  const taskDate = chrono.parseDate(taskName);

  const sliciedTaskName = sliceDateFromTaskName(taskName)

  const response = await notionClient.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      [tableTaskName]: {
        title: [
          {
            text: {
              content: sliciedTaskName,
            },
          },
        ],
      },
      ...(taskDate && {
        [tableDateName]: {
          date: {
            start: chrono.parseDate(taskName).toISOString(),
          },
        },
      }),
    },
  });
  return "Done";
}

await createTask(client, process.argv[2], DATABASE_ID, TASK_NAME, DATE_NAME);
