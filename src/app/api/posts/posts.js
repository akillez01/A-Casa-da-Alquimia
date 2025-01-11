import Post from "@/models/Post";
import connect from "@/utils/connect";

export default async function handler(req, res) {
  await connect();

  if (req.method === "GET") {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}