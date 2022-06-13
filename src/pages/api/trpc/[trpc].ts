import { appRouter } from "@/backend/routers";
import { createContext } from "@/backend/routers/createContext";
import * as trpcNext from "@trpc/server/adapters/next";

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
