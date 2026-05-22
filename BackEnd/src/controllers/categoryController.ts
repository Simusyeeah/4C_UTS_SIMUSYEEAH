import { Request, Response } from "express";
import prisma from "../lib/db.js";

// GET ALL CATEGORY
export const getCategory = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return res.status(200).json({
      message: "Data category berhasil diambil",
      data: categories,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// GET DETAIL CATEGORY
export const showCategory = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    return res.status(200).json({
      message: "Detail category berhasil diambil",
      data: category,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// CREATE CATEGORY
export const saveCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });

    return res.status(201).json({
      message: "Category berhasil ditambahkan",
      data: newCategory,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// UPDATE CATEGORY
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const { name } = req.body;

    const updateData = await prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return res.status(200).json({
      message: "Category berhasil diupdate",
      data: updateData,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// DELETE CATEGORY
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await prisma.category.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({
      message: "Category berhasil dihapus",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};