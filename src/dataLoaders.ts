import DataLoader from 'dataloader';
import { getConnection } from 'typeorm';

import { Vendor } from './entities';

const getVendorsInBatch = async (
  vendorIds: ReadonlyArray<number>,
): Promise<ReadonlyArray<Vendor | undefined>> => {
  const vendors = await getConnection()
    .createQueryBuilder(Vendor, 'vendor')
    .where('vendor.id IN (:...vendorIds)', { vendorIds })
    .getMany();

  return vendorIds.map((k: number) => vendors.find(a => a.id === k));
};

export const vendorLoader = () => {
  return new DataLoader(getVendorsInBatch);
};
