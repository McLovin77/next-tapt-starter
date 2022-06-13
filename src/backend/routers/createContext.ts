import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
// import { ISODateString } from "next-auth";
// import { getSession } from "next-auth/react";

// type CustomSession = {
//   user?: {
//     name?: string | null;
//     email?: string | null;
//     image?: string | null;
//     id?: string | null;
//   };
//   expires: ISODateString;
// };

// The app's context - is generated for each incoming request
export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  // const session = (await getSession({ req: opts?.req })) as CustomSession;
  // TODO get the session using getSession from next-auth library
  console.log("Ayo from ctx");

  const session = {
    user: {
      name: "Donald Trump",
    },
  };

  return {
    session,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;