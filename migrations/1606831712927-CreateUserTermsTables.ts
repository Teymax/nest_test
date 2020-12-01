import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTermsTables1606831712927 implements MigrationInterface {
    name = 'CreateUserTermsTables1606831712927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "country" character varying NOT NULL, "termsAcceptedVersion" bigint, "termsAcceptedDate" TIMESTAMP, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "terms" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "version" bigint NOT NULL, "content" character varying NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "userIdId" uuid, CONSTRAINT "REL_0151c96fa50fff2afd374a2296" UNIQUE ("userIdId"), CONSTRAINT "PK_33b6fe77d6ace7ff43cc8a65958" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "terms" ADD CONSTRAINT "FK_0151c96fa50fff2afd374a22960" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "terms" DROP CONSTRAINT "FK_0151c96fa50fff2afd374a22960"`);
        await queryRunner.query(`DROP TABLE "terms"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
