import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialProvider from "next-auth/providers/credentials";

const URL = process.env.NEXTAUTH_URL

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        console.log('URL', URL);

        const { username, password } = credentials as {
          username: string;
          password: string;
        }
        console.log('credentials', credentials);

        const res = await fetch(`${URL}/v1/auth/login`,
        {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        })
        const { data } = await res.json();
        if (password !== '12345678') {
          throw new Error('invalide credentials')
        }
        return {
          id: data._id,
          name: data.username,
          email: data.email,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions);