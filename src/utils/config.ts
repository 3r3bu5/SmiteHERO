import envSchema from "env-schema";
import { Static, Type } from "@sinclair/typebox";
const schema = Type.Object({
  PORT: Type.Number({
    default: 3000,
  }),
  HOST: Type.String({
    default: "0.0.0.0",
  }),
});

type Env = Static<typeof schema>;

export const config = envSchema<Env>({
  schema,
  dotenv: true,
});
