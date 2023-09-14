import express, { Request, Response, NextFunction, Application } from "express";
import cors from "cors";

export const mainApp = async (app: Application) => {
  app.use(express.json());
  app.use(cors());

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "server is now live",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error",
      });
    }
  });
};
