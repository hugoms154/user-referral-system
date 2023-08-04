import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../user/user.entity";

@Entity("affiliated_links")
export class AffiliatedLinksEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "user_id" })
  user!: UserEntity

  @Column()
  sourceLink!: string;
}
