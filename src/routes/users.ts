import express from "express";
import { getUsers } from "../controllers/users/get-users";

export const usersRouter = express.Router();

usersRouter.get("/", getUsers);