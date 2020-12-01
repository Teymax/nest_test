import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from "../../users/entities/user.entity"

@Entity()
export  class Terms {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(()=> User)
    @JoinColumn()
    userId:User;

    @Column({ type: 'bigint', nullable: false })
    version: bigint;

    @Column({ type: 'varchar', nullable: false })
    content: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;
}