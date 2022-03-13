import { gql } from 'graphql-tag';

const student = gql`
  type Query {
    allStudents(where: StudentOptions, limit: Int, offset: Int): [Student]!
    Student(id: ID!): Student!
  }

  type Student {
    id: ID!
    fullName: String!
    email: String!
    career: String!
    codeStudent: String!
    status: Int!
    created_at: String!
  }

  input StudentOptions {
    id: ID
    manufacturer: String
    name: String
    payload_id: String
  }

  type Mutation {
    createStudent(data: StudentInput!): Student!
  }

  input StudentInput {
    fullName: String!
    email: String!
    career: String!
    codeStudent: String!
  }
`;

export default student;
