import envSchema from "env-schema";
import { Static, Type } from "@sinclair/typebox";
const schema = Type.Object({
  PORT: Type.Number({
    default: 3000,
  }),
  HOST: Type.String({
    default: "0.0.0.0",
  }),
  DATABASE_URL: Type.String(),
  SMITE_DEV_ID: Type.String(),
  SMITE_AUTH_KEY: Type.String(),
  SEED_DB: Type.Boolean(),
  GOOGLE_CLIENT_ID: Type.String(),
  GOOGLE_CLIENT_SECRET: Type.String(),
  JWT_SECRET: Type.String(),
  MONGO_TEST_URI: Type.String(),
});

type Env = Static<typeof schema>;

export const config = envSchema<Env>({
  schema,
  dotenv: true,
});
