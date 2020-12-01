import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from "../../users/entities/user.entity"

@Entity()
export  class TermsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(()=> UserEntity)
    @JoinColumn()
    userId:UserEntity;

    @Column({ type: 'bigint', nullable: false })
    version: bigint;

    @Column({ type: 'varchar', nullable: false })
    content: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;
}