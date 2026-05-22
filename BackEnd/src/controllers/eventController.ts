import { Request, Response } from "express";
import prisma from "../lib/db.js";

// GET ALL EVENT
export const getEvents = async (
   req: Request,
   res: Response
) => {
   try {

      const events = await prisma.event.findMany({
         include: {
            category: true,
            pembicara: true,
         },
         orderBy: {
            id: "desc",
         },
      });

      return res.status(200).json({
         message: "Data event berhasil diambil",
         data: events,
      });

   } catch (error) {

      console.log(error);

      return res.status(500).json({
         message: "Internal server error",
      });
   }
};

// CREATE EVENT
export const saveEvents = async (
   req: Request,
   res: Response
) => {

   try {

      const {
         title,
         description,
         location,
         dateEvent,
         categoryId,
         pembicaraId,
      } = req.body;

      // VALIDASI
      if (
         !title ||
         !description ||
         !location ||
         !dateEvent ||
         !categoryId ||
         !pembicaraId
      ) {

         return res.status(400).json({
            message: "Semua field wajib diisi",
         });
      }

      // SIMPAN DATABASE
      const newEvent = await prisma.event.create({
         data: {
            title: title,
            description: description,
            location: location,
            dateEvent: new Date(dateEvent),
            categoryId: Number(categoryId),
            pembicaraId: Number(pembicaraId),
         },
      });

      return res.status(201).json({
         message: "Event berhasil ditambahkan",
         data: newEvent,
      });

   } catch (error) {

      console.log(error);

      return res.status(500).json({
         message: "Internal server error",
      });
   }
};

// SHOW EVENT
export const showEvent = async (
   req: Request,
   res: Response
) => {

   try {

      const id = Number(req.params.id);

      const event = await prisma.event.findUnique({
         where: {
            id,
         },
      });

      return res.status(200).json({
         data: event,
      });

   } catch (error) {

      console.log(error);

      return res.status(500).json({
         message: "Internal server error",
      });
   }
};

// UPDATE EVENT
export const updateEvent = async (
   req: Request,
   res: Response
) => {

   try {

      const id = Number(req.params.id);

      const {
         title,
         description,
         location,
         dateEvent,
         categoryId,
         pembicaraId,
      } = req.body;

      const updatedEvent = await prisma.event.update({
         where: {
            id,
         },
         data: {
            title,
            description,
            location,
            dateEvent: new Date(dateEvent),
            categoryId: Number(categoryId),
            pembicaraId: Number(pembicaraId),
         },
      });

      return res.status(200).json({
         message: "Event berhasil diupdate",
         data: updatedEvent,
      });

   } catch (error) {

      console.log(error);

      return res.status(500).json({
         message: "Internal server error",
      });
   }
};

// DELETE EVENT
export const deleteEvent = async (
   req: Request,
   res: Response
) => {

   try {

      const id = Number(req.params.id);

      await prisma.event.delete({
         where: {
            id,
         },
      });

      return res.status(200).json({
         message: "Event berhasil dihapus",
      });

   } catch (error) {

      console.log(error);

      return res.status(500).json({
         message: "Internal server error",
      });
   }
};