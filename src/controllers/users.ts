import type { Request, Response } from "express";
import { userService } from "./init";

export function GetUsersController(req :Request, res: Response) {
  try {    
    const users = userService.get()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}
