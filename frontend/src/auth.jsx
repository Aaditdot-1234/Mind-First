import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers: {GET, POST} , signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization:{
        params:{
          prompt:"consent",
          access_type : "offline",
          response_type : "code",
        }
      }
    }),
  ],
  pages: {
    signIn: "/login", 
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              oauthId: account.providerAccountId, 
              name: user.name,
              email: user.email,
              provider: account.provider,
              profilePic: user.image,
              lastLogin: new Date(),
            },
          });
        } else {
          await prisma.user.update({
            where: { email: user.email },
            data: {
              lastLogin: new Date(),
              profilePic: user.image, 
            },
          });
        }

        return true;
      } catch (error) {
        console.error("Error saving user:", error);
        return false;
      } finally {
        await prisma.$disconnect();
      }
    },
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}); 