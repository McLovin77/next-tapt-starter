import { createRouter } from "./createRouter";
import usersRouter from "./usersRouter";

export const appRouter = createRouter().merge("users.", usersRouter);
