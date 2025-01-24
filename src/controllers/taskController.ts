import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({ orderBy: { id: "desc" } }); // retrieve all tasks in id descending order
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to get tasks" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, color } = req.body; // retrieve title and color from request body
    if (!title) {
      return res.status(400).json({ error: "Title is required" }); // if title isn't there, throw error
    }
    const newTask = await prisma.task.create({
      data: { title, color: color || "blue" },
    }); // if color isn't there, default to blue
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

export const editTask = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id); // retrieve specific task based on id
    const { title, color, completed } = req.body; // retrieve the info for that task

    const editedTask = await prisma.task.update({
      where: { id },
      data: { title, color, completed },
    }); // update the body based on the id
    res.json(editedTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to edit tasks" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id); // retrieve specific task based on id
    await prisma.task.delete({ where: { id } }); // delete the task with that id
    res.sendStatus(204); // sending status 204 since we have no info to show but want to confirm success
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
