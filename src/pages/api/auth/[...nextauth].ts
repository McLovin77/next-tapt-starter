import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "johnsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You don't have to use **username** and password, you can also use **email** and password,
        // but its cooler and smoother to use EmailProvider and send a magic link rather than use
        // the traditional email and password
        const username = credentials?.username
        const password = credentials?.password

        // TODO implement your own authentication logic here
        // e.g. check the username and password hash against a database
        // TODO look up the remix example for how they structured it
        // https://github.com/remix-run/indie-stack/blob/main/app/models/user.server.ts
        const isAuthenticated = username === "jsmith" && password === "123456";

        // TODO Add logic here to look up the user from the credentials supplied
        // e.g prisma.users.findFirst({ where: { email: username } });
        const user = {
          id: 1,
          username: "jsmith",
          name: "J Smith",
          email: "jsmith@example.com",
        };

        // Any object returned will be saved in `user` property of the JWT
        // If you return null then an error will be displayed advising the user to check their details.
        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        return isAuthenticated ? user : null;
      },
    }),
    // ...add more providers here
  ],
});
