import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1686263457108 implements MigrationInterface {
    name = 'CreateUser1686263457108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isAdm" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdm"`);
    }

}
