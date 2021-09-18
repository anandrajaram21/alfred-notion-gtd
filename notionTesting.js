import dotenv from "dotenv";
dotenv.config();

import { Client } from "@notionhq/client";

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

// async function getPageIds(databaseId, notionClient) {
// const response = await notionClient.databases.query({
// database_id: databaseId,
// });
// const results = response.results;
// const pageIds = [];
// for (let page of results) {
// await pageIds.push(page.id);
// }
// return pageIds;
// }

// async function someLogic(pageId, notionClient) {
// const response = await notionClient.pages.retrieve({
// page_id: pageId,
// });
// console.log(response.properties["Task Name"]["title"][0]["text"]["content"]);
// }

// function getPageNames(pageIds, notionClient) {
// for (let pageId of pageIds) {
// someLogic(pageId, notionClient);
// }
// }

// getPageIds(process.env.DATABASE_ID, client).then((value) => {
// getPageNames(value, client);
// });

// const results = getPageNames(
// await getPageIds(process.env.DATABASE_ID, client),
// client
// );
// console.log(results);

// Testing post requests

async function createTask(notionClient, taskName, databaseId) {
  const response = await notionClient.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      "Task Name": {
        title: [
          {
            text: {
              content: taskName,
            },
          },
        ],
      },
    },
  });
  console.log(response);
}

createTask(client, "Test Task", process.env.DATABASE_ID);
