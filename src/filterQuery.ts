import { SelectQueryBuilder } from 'typeorm';
import { UserInputError } from 'apollo-server';

const filterQuery = <T>(
  queryBuilder: SelectQueryBuilder<T>,
  filters: Array<Filter>,
  filterHandlers: FilterHandlerFunction<SelectQueryBuilder<T>>,
): SelectQueryBuilder<T> => {
  return filters.reduce(
    (querySoFar: SelectQueryBuilder<T>, { key, value }: Filter) => {
      const filterFunc = filterHandlers[key];

      if (filterFunc === undefined) {
        throw new UserInputError('Invalid filter argument', {
          invalidArgs: [key],
        });
      }

      return Reflect.apply(filterFunc, undefined, [querySoFar, value]);
    },
    queryBuilder,
  );
};

export default filterQuery;
