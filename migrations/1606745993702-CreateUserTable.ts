import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTable1606745993702 implements MigrationInterface {
    name = 'CreateUserTable1606745993702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "country" character varying NOT NULL, "termsAcceptedVersion" bigint, "termsAcceptedDate" TIMESTAMP, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }

}
