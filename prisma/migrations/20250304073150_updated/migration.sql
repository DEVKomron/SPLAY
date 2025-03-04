/*
  Warnings:

  - Made the column `contentId` on table `CategoryContent` required. This step will fail if there are existing NULL values in that column.
  - Made the column `categoryId` on table `CategoryContent` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CategoryContent" DROP CONSTRAINT "CategoryContent_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryContent" DROP CONSTRAINT "CategoryContent_contentId_fkey";

-- AlterTable
ALTER TABLE "CategoryContent" ALTER COLUMN "contentId" SET NOT NULL,
ALTER COLUMN "categoryId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "CategoryContent" ADD CONSTRAINT "CategoryContent_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryContent" ADD CONSTRAINT "CategoryContent_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
