import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { title, desc, img, content, username } = await request.json();

    // Validar dados
    if (!title || !desc || !img || !content || !username) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    await connect();

    const newPost = new Post({
      title,
      desc,
      img,
      content,
      username,
    });

    await newPost.save();

    return new NextResponse(
      JSON.stringify({ message: "Post has been created", postId: newPost._id }),
      { status: 201 }
    );
  } catch (err) {
    console.error("Error creating post:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
