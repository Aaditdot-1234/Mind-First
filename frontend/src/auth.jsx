import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers: {GET, POST} , signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization:{
        params:{
          prompt:"consent",
          acess_type : "offline",
          response_type : "code",
        }
      }
    }),
  ],
  pages: {
    signIn: "/login", 
  },
}); 