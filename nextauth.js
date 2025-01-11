import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Adicione outros provedores conforme necessário
  ],
  database: process.env.DATABASE_URL,
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, token) {
      session.user.id = token.id;
      return session;
    },
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});