import User from "@/models/User";
import connect from "@/utils/connect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { username, email, password } = await request.json();

    // Validar dados
    if (!username || !email || !password) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    await connect();

    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    // Criar novo usuário
    const newUser = new User({
      username,
      email,
      password, // Certifique-se de hashear a senha antes de salvar
    });

    await newUser.save();

    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    console.error("Error creating user:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
