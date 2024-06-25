import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

const reqUrl =
  "http://localhost/site/wp-content/uploads/2024/06/Ananias-Marina-2026.pdf";

export default async function fetchResume(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(reqUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const pdfArrayBuffer = await response.arrayBuffer();
    const pdfData = Buffer.from(pdfArrayBuffer);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'inline; filename="Ananias-Marina-2026.pdf"'
    );
    res.send(pdfData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

// import type { NextApiRequest, NextApiResponse } from "next";

// const reqUrl =
//   "http://localhost/site/wp-content/uploads/2024/06/Ananias-Marina-2026.pdf";

// export default async function fetchResume(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const response = await fetch(reqUrl);

//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const resume = await response.json();

//     res.status(200).json(resume);
    
//     return resume;
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// }
