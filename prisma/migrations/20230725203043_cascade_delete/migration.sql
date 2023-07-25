-- DropForeignKey
ALTER TABLE "member" DROP CONSTRAINT "member_teamId_fkey";

-- DropForeignKey
ALTER TABLE "team" DROP CONSTRAINT "team_associationId_fkey";

-- AddForeignKey
ALTER TABLE "team" ADD CONSTRAINT "team_associationId_fkey" FOREIGN KEY ("associationId") REFERENCES "association"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "member" ADD CONSTRAINT "member_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
