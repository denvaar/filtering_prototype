import {MigrationInterface, QueryRunner} from "typeorm";

export class createInitialSchema1583808901147 implements MigrationInterface {
    name = 'createInitialSchema1583808901147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vendor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "contact_email" character varying NOT NULL, "vendor_type" character varying NOT NULL, CONSTRAINT "PK_931a23f6231a57604f5a0e32780" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "evaluation" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "access_type" character varying NOT NULL, "request_date" date NOT NULL, "vendor_id" integer NOT NULL, CONSTRAINT "PK_b72edd439b9db736f55b584fa54" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "evaluation" ADD CONSTRAINT "FK_c0bcb485c68e5216309f07c67d2" FOREIGN KEY ("vendor_id") REFERENCES "vendor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluation" DROP CONSTRAINT "FK_c0bcb485c68e5216309f07c67d2"`, undefined);
        await queryRunner.query(`DROP TABLE "evaluation"`, undefined);
        await queryRunner.query(`DROP TABLE "vendor"`, undefined);
    }

}
