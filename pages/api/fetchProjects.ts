import type { NextApiRequest, NextApiResponse } from "next";

const reqUrl =
  "http://localhost/site/index.php/wp-json/wp/v2/projects?acf_format=standard&_fields=id,title,acf";

export default async function fetchProjects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(reqUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const projects = await response.json();

    res.status(200).json(projects);
    
    return projects;
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
