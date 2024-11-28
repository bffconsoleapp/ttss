import { gql } from 'apollo-server';

-resolver
const resolvers = {
  Query: {
    getCreditUnions: () => [
      {
        id: '1',
        contract_Number: '123ABC',
        credit_Union_Name: 'Sample Credit Union',
        premiumReports: [],
        premiumAdjustments: [],
        singlePremiumCertificateReturns: []
      }
    ],
    getPremiumReports: () => [],
    getPremiumAdjustments: () => [],
    getSinglePremiumCertificateReturns: () => []
  },
  Mutation: {
    addCreditUnion: (_, { input }) => ({
      ...input,
      id: Math.random().toString()
    }),
    addPremiumAdjustment: (_, { input }) => ({
      ...input,
      id: Math.random().toString()
    }),
  }
};

export default typeDefs;