```graphql
const typeDefs = `
  type Credit_Union {
    id: ID!
    contract_Number: String!
    credit_Union_Name: String!
    premiumReports: [Premium_Report]
    premiumAdjustments: [Premium_Adjustment]
    singlePremiumCertificateReturns: [Single_Premium_Certificate_Return]
  }

  type Premium_Report {
    id: ID!
    product_Name: String!
    report_Period: String!
    status: String!
    last_Update: String!
    period_Ending: String!
    adjustment_Type_to_the_Credit_Union: String!
    comment: String!
    total_Borrower_Fees_: Float!
    cu_Retail_Rate: Float!
    protected_Loan_Amount: Float!
    pay_Rate: Float!
    premium_Due: Float!
    total_Amount: Float!
  }

  type Premium_Adjustment {
    id: ID!
    product_Name: String!
    report_Period: String!
    status: String!
    last_Update: String!
    period_Ending: String!
    adjustment_Type_to_the_Credit_Union: String!
    comment: String!
    total_Borrower_Fees_: Float!
    cu_Retail_Rate: Float!
    protected_Loan_Amount: Float!
    pay_Rate: Float!
    premium_Due: Float!
    total_Amount: Float!
  }

  type Single_Premium_Certificate_Return {
    id: ID!
  }

  input Credit_Union_Input {
    id: ID
    contract_Number: String!
    credit_Union_Name: String!
  }

  input Premium_Adjustment_Input {
    id: ID
    product_Name: String!
    report_Period: String!
    status: String!
    last_Update: String!
    period_Ending: String!
    adjustment_Type_to_the_Credit_Union: String!
    comment: String!
    total_Borrower_Fees_: Float!
    cu_Retail_Rate: Float!
    protected_Loan_Amount: Float!
    pay_Rate: Float!
    premium_Due: Float!
    total_Amount: Float!
  }

  type Query {
    getCreditUnions: [Credit_Union]
    getPremiumReports: [Premium_Report]
    getPremiumAdjustments: [Premium_Adjustment]
    getSinglePremiumCertificateReturns: [Single_Premium_Certificate_Return]
  }

  type Mutation {
    addCreditUnion(input: Credit_Union_Input): Credit_Union
    addPremiumAdjustment(input: Premium_Adjustment_Input): Premium_Adjustment
  }
`;
```
```graphql
codegen-start-resolver
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
codegen-end-resolver
```