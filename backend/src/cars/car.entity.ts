import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {ICar} from "./car.interface";

@Entity()
export class Car implements ICar {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    fuel: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt?: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt?: Date;
}
