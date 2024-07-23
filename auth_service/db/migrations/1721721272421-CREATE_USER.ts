import { MigrationInterface, QueryRunner } from "typeorm";

export class CREATEUSER1721721272421 implements MigrationInterface {
    name = 'CREATEUSER1721721272421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "o_auth" ("id" SERIAL NOT NULL, "provider" character varying NOT NULL, "providerUserId" character varying NOT NULL, "accessToken" character varying NOT NULL, "expiresAt" TIMESTAMP NOT NULL, "userId" integer, CONSTRAINT "PK_10172120973beff91c304345fa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'streamer', 'user')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "nickname" character varying NOT NULL, "password" character varying NOT NULL, "isBlock" boolean NOT NULL DEFAULT false, "bio" text NOT NULL, "photoAvatar" character varying, "photoBackground" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "googleId" character varying, "facebookId" character varying, "role" "public"."user_role_enum" NOT NULL DEFAULT 'user', CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8" UNIQUE ("name"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "access_token" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "expiresAt" TIMESTAMP NOT NULL, "accessTokenId" integer, CONSTRAINT "REL_90a778f71e62d99ce9f0a0ec79" UNIQUE ("accessTokenId"), CONSTRAINT "PK_f20f028607b2603deabd8182d12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "password_reset" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "expiresAt" TIMESTAMP NOT NULL, "passwordResetId" integer, CONSTRAINT "REL_38b38d1aa67947e46c308e4db3" UNIQUE ("passwordResetId"), CONSTRAINT "PK_8515e60a2cc41584fa4784f52ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "email_verification" ("id" SERIAL NOT NULL, "token" character varying NOT NULL, "expiresAt" TIMESTAMP NOT NULL, "emailVerificationId" integer, CONSTRAINT "REL_081b288f71ad4accc9c6c40486" UNIQUE ("emailVerificationId"), CONSTRAINT "PK_b985a8362d9dac51e3d6120d40e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "o_auth" ADD CONSTRAINT "FK_26949195275599aed148a7f28de" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "access_token" ADD CONSTRAINT "FK_90a778f71e62d99ce9f0a0ec79c" FOREIGN KEY ("accessTokenId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "password_reset" ADD CONSTRAINT "FK_38b38d1aa67947e46c308e4db30" FOREIGN KEY ("passwordResetId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "email_verification" ADD CONSTRAINT "FK_081b288f71ad4accc9c6c40486b" FOREIGN KEY ("emailVerificationId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "email_verification" DROP CONSTRAINT "FK_081b288f71ad4accc9c6c40486b"`);
        await queryRunner.query(`ALTER TABLE "password_reset" DROP CONSTRAINT "FK_38b38d1aa67947e46c308e4db30"`);
        await queryRunner.query(`ALTER TABLE "access_token" DROP CONSTRAINT "FK_90a778f71e62d99ce9f0a0ec79c"`);
        await queryRunner.query(`ALTER TABLE "o_auth" DROP CONSTRAINT "FK_26949195275599aed148a7f28de"`);
        await queryRunner.query(`DROP TABLE "email_verification"`);
        await queryRunner.query(`DROP TABLE "password_reset"`);
        await queryRunner.query(`DROP TABLE "access_token"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`DROP TABLE "o_auth"`);
    }

}
