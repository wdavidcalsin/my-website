// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { RootObject } from "@/types";
import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseIdListProject = process.env.NOTION_DATABASE_ID_LIST_PROJECT;
const notionDatabaseIdTechnologies =
  process.env.NOTION_DATABASE_ID_TECHNOLOGIES;

const notion = new Client({ auth: notionSecret });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!notionSecret || !notionDatabaseIdListProject)
    throw new Error("Missing notion secret or DB-ID");

  const query = await notion.databases.query({
    database_id: notionDatabaseIdListProject,
  });

  const rows = query.results.map((resItem) => resItem as Partial<RootObject>);

  const rowsStructured = rows.map((row) => ({
    title: row.properties?.title.title[0].text.content,
    description: row.properties?.description.rich_text[0].text.content,
    tags: row.properties?.tags.rich_text[0].text.content,
    site: row.properties?.site.rich_text[0].text.content,
    link_code: row.properties?.link_code.rich_text[0].text.content,
    point: row.properties?.point.rich_text[0].text.content,
  }));

  res.status(200).send(JSON.stringify(rowsStructured));
}
