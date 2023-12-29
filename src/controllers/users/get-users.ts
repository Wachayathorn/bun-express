import type { Request, Response } from "express";
import {GetUsers } from "../../services/users/get-users";

export function GetUsersController(req :Request, res: Response) {
  try {    
    const users = GetUsers()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}
