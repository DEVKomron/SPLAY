/*
  Warnings:

  - You are about to drop the column `contentId` on the `ContentGenres` table. All the data in the column will be lost.
  - You are about to drop the column `genresId` on the `ContentGenres` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContentGenres" DROP CONSTRAINT "ContentGenres_contentId_fkey";

-- DropForeignKey
ALTER TABLE "ContentGenres" DROP CONSTRAINT "ContentGenres_genresId_fkey";

-- AlterTable
ALTER TABLE "ContentGenres" DROP COLUMN "contentId",
DROP COLUMN "genresId";

-- AddForeignKey
ALTER TABLE "ContentGenres" ADD CONSTRAINT "ContentGenres_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentGenres" ADD CONSTRAINT "ContentGenres_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
