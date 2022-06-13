import * as trpc from "@trpc/server";
import { Context } from "./createContext";

// Helper function to create a router with your app's context
export const createRouter = () => {
  return trpc.router<Context>();
};