import alfy from "alfy";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

alfy.output([
  {
    title: process.env.NOTION_TOKEN,
    subtitle: "Your Notion Token",
    arg: "1",
  },
]);

// const data = await alfy.fetch("https://jsonplaceholder.typicode.com/posts");

// const items = alfy.inputMatches(data, "title").map((element) => ({
// title: element.title,
// subtitle: element.body,
// arg: element.id,
// }));

// console.log(items);

// alfy.output(items);
