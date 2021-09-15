# Alfred Workflow for Notion

This is a simple Alfred workflow for Notion to quickly and easily add tasks to your "Inbox" on Notion, so as to reduce the time you take to get an idea from your head, into Notion.

This workflow is built around the template used in [this](https://www.youtube.com/watch?v=r6hUkChpwWQ) video

## Installation

npm package will be released soon, on completion of development, to make installation as easy as possible.

## Environment Variables

To run this project, you will need to add the following environment variables to a .env file.

`NOTION_TOKEN` - Your Notion integration token. Create a Notion integration [here](https://www.notion.so/my-integrations) and paste the internal integration token here in the following format: `NOTION_TOKEN="your secret goes here"`

`DATABASE_ID` - The database ID where you store all your tasks. Learn how to find the database ID of your Notion database [here](https://stackoverflow.com/questions/67728038/where-to-find-database-id-for-my-database-in-notion). Paste the database ID in the following format: `DATABASE_ID="your notion db id"`

## Usage/Examples

Will be updated once the development is complete

## Tech Stack

This app will be built using the following technologies:

- [Alfy](https://github.com/sindresorhus/alfy) - To make the Alfred workflow
- [Notion API](https://github.com/makenotion/notion-sdk-js) - To add rows to the database
- [Chrono](https://github.com/wanasit/chrono) - Natural Language Dates to add due dates for tasks
