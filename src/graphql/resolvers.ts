import { getEvaluations, getVendor } from '../dbQueries';

import { Vendor, Evaluation } from '../entities';

export default {
  Query: {
    evaluations: async (_: any, args: any): Promise<Array<Evaluation>> => {
      return await getEvaluations(args);
    },
  },
  Evaluation: {
    vendor: async (evaluation: Evaluation): Promise<Vendor | undefined> =>
      await getVendor(evaluation.vendorId),
  },
};
