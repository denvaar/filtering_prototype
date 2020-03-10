import { ApolloServer } from 'apollo-server';
import { createConnection } from 'typeorm';

import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
// import { authorLoader, bookLoader } from './dataLoaders';

/* main */
(async () => {
  await createConnection();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    // context: ({ req, res }: { req: Request; res: Response }) => {
    //   return {
    //     authorLoader: authorLoader(),
    //     bookLoader: bookLoader(),
    //   };
    // },
  });

  apolloServer
    .listen()
    .then(({ url }) => console.log(`Apollo server listening at ${url}`));
})();
