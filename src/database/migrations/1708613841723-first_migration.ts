import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1708613841723 implements MigrationInterface {
    name = 'FirstMigration1708613841723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" (
"id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
"name" text NOT NULL, 
"bio" text NOT NULL, 
"email" text NOT NULL, 
"password" text NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
