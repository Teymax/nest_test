import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BeforeInsert } from 'typeorm';
import bcrypt from 'bcrypt';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', nullable: false, unique: true })
    username: string;

    @Column({ type: 'varchar', nullable: false })
    password: string;

    @Column({ type: 'varchar', nullable: false })
    firstName: string;

    @Column({ type: 'varchar', nullable: false })
    lastName: string;

    @Column({ type: 'varchar', nullable: false })
    country: string;

    @Column({ type: 'bigint', nullable: true })
    termsAcceptedVersion: bigint;

    @Column({ type: 'timestamp without time zone', nullable: true })
    termsAcceptedDate: Date;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;

    @BeforeInsert()  async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}