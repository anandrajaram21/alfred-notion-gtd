import dotenv from "dotenv";
dotenv.config();

import { Client } from "@notionhq/client";
import * as chrono from "chrono-node";

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

async function createTask(
  notionClient,
  taskName,
  date,
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
          start: chrono.parseDate(date).toISOString().substring(0, 10),
        },
      },
    },
  });
  console.log(response);
}

createTask(
  client,
  "Test Task",
  "day after tomorrow",
  process.env.DATABASE_ID,
  process.env.TASK_NAME,
  process.env.DATE_NAME
);
