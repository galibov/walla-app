import {MigrationInterface, QueryRunner} from "typeorm";

export class index1674752183613 implements MigrationInterface {
    name = 'index1674752183613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`car\`
                                 (
                                     \`id\`         bigint       NOT NULL AUTO_INCREMENT,
                                     \`model\`      varchar(255) NOT NULL,
                                     \`year\`       int          NOT NULL,
                                     \`fuel\`       varchar(255) NOT NULL,
                                     \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP (6),
                                     \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP (6) ON UPDATE CURRENT_TIMESTAMP (6),
                                     PRIMARY KEY (\`id\`)
                                 ) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`car\``);
    }

}
