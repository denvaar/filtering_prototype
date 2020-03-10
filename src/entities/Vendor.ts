import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Evaluation } from './Evaluation';

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'contact_email' })
  contactEmail: string;

  @Column({ name: 'vendor_type' })
  vendorType: string;

  @OneToMany(
    type => Evaluation,
    evaluation => evaluation.vendor,
  )
  evaluations: Array<Evaluation>;
}
