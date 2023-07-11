/*
  Warnings:

  - You are about to drop the column `birthday` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `member` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "member" DROP COLUMN "birthday",
DROP COLUMN "gender";

-- DropEnum
DROP TYPE "Gender";
