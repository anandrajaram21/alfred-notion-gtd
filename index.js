import * as chrono from "chrono-node";
import alfy from "alfy";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import alfredNotifier from "alfred-notifier";

alfredNotifier();
dotenv.config();

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

const { DATABASE_ID, TABLE_NAME, DATE_NAME } = process.env;

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

console.log(alfy.input);

createTask(client, alfy.input, DATABASE_ID, TASK_NAME, DATE_NAME);
