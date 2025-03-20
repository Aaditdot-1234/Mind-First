/*
  Warnings:

  - Added the required column `Date` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "Date" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "timing" DROP NOT NULL,
ALTER COLUMN "timing" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "timing" DROP NOT NULL,
ALTER COLUMN "timing" SET DATA TYPE TEXT;
