/*
  Warnings:

  - The primary key for the `employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `dni` on the `employee` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `employee` DROP PRIMARY KEY,
    MODIFY `dni` INTEGER NOT NULL,
    ADD PRIMARY KEY (`dni`);
