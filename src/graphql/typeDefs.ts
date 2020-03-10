import { gql } from 'apollo-server';

export default gql`
  schema {
    query: Query
  }

  type Query {
    evaluations(q: String): [Evaluation]
  }

  type Evaluation {
    status: String!
    vendor: Vendor!
    accessType: String!
    requestDate: String!
  }

  type Vendor {
    name: String!
    contactEmail: String!
    vendorType: String!
    evaluations: [Evaluation]
  }
`;
