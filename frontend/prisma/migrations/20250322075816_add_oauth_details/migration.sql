-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lastLogin" TIMESTAMP(3),
ADD COLUMN     "oauthId" TEXT,
ADD COLUMN     "profilePic" TEXT,
ADD COLUMN     "provider" TEXT;
