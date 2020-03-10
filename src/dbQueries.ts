import { SelectQueryBuilder, getConnection } from 'typeorm';
import { Vendor, Evaluation } from './entities';
import filterQuery from './filterQuery';

const filterHandlers: FilterHandlerFunction<SelectQueryBuilder<Evaluation>> = {
  status: (query: SelectQueryBuilder<Evaluation>, value: string) =>
    query.andWhere('evaluation.status = :status', { status: value }),
  accessType: (query: SelectQueryBuilder<Evaluation>, value: string) =>
    query.andWhere('evaluation.access_type = :accessType', {
      accessType: value,
    }),
  vendorName: (query: SelectQueryBuilder<Evaluation>, value: string) =>
    query.andWhere('vendor.name = :vendorName', { vendorName: value }),
  vendorType: (query: SelectQueryBuilder<Evaluation>, value: string) =>
    query.andWhere('vendor.vendor_type = :vendorType', {
      vendorType: value,
    }),
};

export const getEvaluations = async (args: any): Promise<Array<Evaluation>> => {
  const queryBuilder = getConnection()
    .createQueryBuilder(Evaluation, 'evaluation')
    .leftJoinAndSelect('evaluation.vendor', 'vendor');

  if (args.q !== undefined) {
    const { filters }: { filters: Array<Filter> } = JSON.parse(args.q);

    const query = filterQuery<Evaluation>(
      queryBuilder,
      filters,
      filterHandlers,
    );

    return await query.getMany();
  }

  return await queryBuilder.getMany();
};
