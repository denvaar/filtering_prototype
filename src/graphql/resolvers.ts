import { getEvaluations } from '../dbQueries';

import { Vendor, Evaluation } from '../entities';

export default {
  Query: {
    evaluations: async (_: any, args: any): Promise<Array<Evaluation>> => {
      return await getEvaluations(args);
    },
  },
  Evaluation: {
    vendor: async (
      evaluation: Evaluation,
      args: any,
      ctx: any,
    ): Promise<Vendor | undefined> =>
      await ctx.vendorLoader.load(evaluation.vendorId),
  },
};
