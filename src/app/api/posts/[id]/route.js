import Post from "@/models/Post";
import connect from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await Post.findById(id);

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};