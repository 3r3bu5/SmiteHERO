import { object, array, string, number, TypeOf } from "zod";
export const createBuildSchema = object({
  body: object({
    items: array(
      string({
        required_error: "Items are required",
      })
    ).min(2, "Build Items should be more than or equal to 2 items"),
    mode: number({ required_error: "Game mode is required" }),
    godId: number({ required_error: "God is required" }),
  }),
});

export type createBuildInputInterface = TypeOf<typeof createBuildSchema>;
