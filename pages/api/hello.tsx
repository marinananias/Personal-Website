// import type { NextApiRequest, NextApiResponse } from "next";

// const reqUrl =
//   "http://localhost/site/index.php/wp-json/wp/v2/cprojects?acf_format=standard&_fields=id,title,acf";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//     try {
//         const response = await fetch(reqUrl);
//         const projects = await response.json();

//         if (/* Add your condition here */) {
//             res.status(200).json(projects);
//         } else {
//             throw new Error('Failed to fetch data');
//         }
//     } catch (err) {
//         res.status(500).json({ error: 'Failed to fetch data' });
//     }
// }
