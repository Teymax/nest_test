import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTermsTable1606819121137 implements MigrationInterface {
    name = 'CreateTermsTable1606819121137'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "terms_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "version" bigint NOT NULL, "content" character varying NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "userIdId" uuid, CONSTRAINT "REL_2c3f6d6596401d86ec9422f3c3" UNIQUE ("userIdId"), CONSTRAINT "PK_68559abac3a464b8dd2f70420b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COMMENT ON COLUMN "user_entity"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user_entity"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "terms_entity" ADD CONSTRAINT "FK_2c3f6d6596401d86ec9422f3c3d" FOREIGN KEY ("userIdId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "terms_entity" DROP CONSTRAINT "FK_2c3f6d6596401d86ec9422f3c3d"`);
        await queryRunner.query(`COMMENT ON COLUMN "user_entity"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user_entity"."createDateTime" IS NULL`);
        await queryRunner.query(`DROP TABLE "terms_entity"`);
    }

}
