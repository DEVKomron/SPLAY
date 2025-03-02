/*
  Warnings:

  - You are about to drop the `Devices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Devices";

-- CreateTable
CREATE TABLE "devices" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "device_type" TEXT NOT NULL,
    "device_name" TEXT NOT NULL,
    "ip_address" INTEGER NOT NULL,
    "last_active" INTEGER NOT NULL,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);
