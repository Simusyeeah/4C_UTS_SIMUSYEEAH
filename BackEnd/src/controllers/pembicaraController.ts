import { Request, Response } from "express";
import prisma from "../lib/db.js";

// GET ALL
export const getPembicara = async (req: Request, res: Response) => {
  try {
    const pembicara = await prisma.pembicara.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return res.status(200).json({
      message: "Data pembicara berhasil diambil",
      data: pembicara,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// GET DETAIL
export const showPembicara = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const pembicara = await prisma.pembicara.findUnique({
      where: {
        id,
      },
    });

    return res.status(200).json({
      message: "Detail pembicara",
      data: pembicara,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// CREATE
export const savePembicara = async (req: Request, res: Response) => {
  try {
    const { name, role, image } = req.body;

    const newPembicara = await prisma.pembicara.create({
      data: {
        name,
        role,
        image,
      },
    });

    return res.status(201).json({
      message: "Pembicara berhasil ditambahkan",
      data: newPembicara,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// UPDATE
export const updatePembicara = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const { name, role, image } = req.body;

    const updateData = await prisma.pembicara.update({
      where: {
        id,
      },
      data: {
        name,
        role,
        image,
      },
    });

    return res.status(200).json({
      message: "Pembicara berhasil diupdate",
      data: updateData,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// DELETE
export const deletePembicara = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await prisma.pembicara.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({
      message: "Pembicara berhasil dihapus",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};