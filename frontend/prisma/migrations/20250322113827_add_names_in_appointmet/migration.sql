/*
  Warnings:

  - Added the required column `doctorName` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "doctorName" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;
