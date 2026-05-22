/*
  Warnings:

  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Categories";

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);
