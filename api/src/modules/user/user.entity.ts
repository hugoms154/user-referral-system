import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ type: "character varying", unique: true })
  @Generated('uuid')
  referralCode!: string;
  
  @Column({ nullable:true })
  indicatedBy?: string;
}
