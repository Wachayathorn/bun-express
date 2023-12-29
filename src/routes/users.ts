import express from "express";
import { GetUsersController } from "../controllers/users/get-users";

export const usersRouter = express.Router();

usersRouter.get("/", GetUsersController);