import { createRouter } from "./createRouter";

export default createRouter()
  .query("getCurrent", {
    resolve: async ({ ctx }) => {
      console.log('Getting current')
      return ctx.session.user;
    },
  })
  .mutation("updateOne", {
    resolve: async ({ ctx }) => {
      console.log("Updating user");
      return ctx.session.user;
    },
  });
