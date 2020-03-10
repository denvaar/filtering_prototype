import { SelectQueryBuilder, getConnection } from 'typeorm';
import { Vendor, Evaluation } from './entities';
import filterQuery from './filterQuery';

export const getVendor = async (
  vendorId: number,
): Promise<Vendor | undefined> => {
  return await getConnection()
    .createQueryBuilder(Vendor, 'vendor')
    .where('vendor.id = :vendorId', { vendorId })
    .getOne();
};

export const getEvaluations = async (args: any): Promise<Array<Evaluation>> => {
  const queryBuilder = getConnection()
    .createQueryBuilder(Evaluation, 'evaluation')
    .leftJoinAndSelect('evaluation.vendor', 'vendor');

  if (args.q !== undefined) {
    console.log({ args });
    const { filters }: { filters: Array<Filter> } = JSON.parse(args.q);

    const query = filterQuery<Evaluation>(queryBuilder, filters, {
      status: (query: SelectQueryBuilder<Evaluation>, value: string) =>
        query.where('evaluation.status = :value', { value }),
      accessType: (query: SelectQueryBuilder<Evaluation>, value: string) =>
        query.where('evaluation.access_type = :value', { value }),
      vendorName: (query: SelectQueryBuilder<Evaluation>, value: string) =>
        query.where('vendor.name = :value', { value }),
    });

    return await query.getMany();
  }

  return await queryBuilder.getMany();
};
