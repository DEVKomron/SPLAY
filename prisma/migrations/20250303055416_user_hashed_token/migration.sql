/*
  Warnings:

  - You are about to drop the column `ashed_token` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "ashed_token",
ADD COLUMN     "hashed_token" TEXT;
