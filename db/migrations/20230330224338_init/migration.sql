/*
  Warnings:

  - You are about to drop the column `calories` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `carbs` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `fat` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `protein` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `abbreviation` on the `Unit` table. All the data in the column will be lost.
  - Added the required column `shortname` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Food" DROP COLUMN "calories",
DROP COLUMN "carbs",
DROP COLUMN "fat",
DROP COLUMN "protein";

-- AlterTable
ALTER TABLE "Unit" DROP COLUMN "abbreviation",
ADD COLUMN     "shortname" TEXT NOT NULL,
ADD COLUMN     "volume" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "RecipeInMeal" (
    "id" SERIAL NOT NULL,
    "recipeId" INTEGER NOT NULL,
    "mealId" INTEGER NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "RecipeInMeal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodNutrition" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "quantity" DECIMAL(65,30) NOT NULL,
    "unitId" INTEGER NOT NULL,
    "calories" INTEGER NOT NULL,
    "protein" DECIMAL(65,30) NOT NULL,
    "fat" DECIMAL(65,30) NOT NULL,
    "carbs" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "FoodNutrition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RecipeInMeal" ADD CONSTRAINT "RecipeInMeal_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeInMeal" ADD CONSTRAINT "RecipeInMeal_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeInMeal" ADD CONSTRAINT "RecipeInMeal_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodNutrition" ADD CONSTRAINT "FoodNutrition_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodNutrition" ADD CONSTRAINT "FoodNutrition_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
