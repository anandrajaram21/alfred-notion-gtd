import * as chrono from "chrono-node";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

const { DATABASE_ID, TASK_NAME, DATE_NAME } = process.env;

async function createTask(
  notionClient,
  taskName,
  databaseId,
  tableTaskName,
  tableDateName
) {
  const response = await notionClient.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      [tableTaskName]: {
        title: [
          {
            text: {
              content: taskName,
            },
          },
        ],
      },
      [tableDateName]: {
        date: {
          start: chrono.parseDate(taskName).toISOString(),
        },
      },
    },
  });
  return "Done";
}

await createTask(client, process.argv[2], DATABASE_ID, TASK_NAME, DATE_NAME);
