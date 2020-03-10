import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Vendor } from './Vendor';

const VENDOR_ID = 'vendor_id';

@Entity()
export class Evaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column({ name: 'access_type' })
  accessType: string;

  @Column({ type: 'date', name: 'request_date' })
  requestDate: string;

  @ManyToOne(
    type => Vendor,
    vendor => vendor.evaluations,
  )
  @JoinColumn({ name: VENDOR_ID })
  vendor: Vendor;

  @Column({ nullable: false, name: VENDOR_ID })
  vendorId: number;
}
