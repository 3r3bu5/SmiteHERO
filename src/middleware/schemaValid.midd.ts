import { NextFunction, Request, Response } from "express";
import { Schema } from "zod";

export const validate =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (e) {
      return res.status(400).send(e);
    }
  };
