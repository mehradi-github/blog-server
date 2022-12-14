import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    me: User
    posts(take: Int!, skip: Int!): [Post!]!
    profile(userId: ID): Profile
  }
  type Mutation {
    postCreate(post: PostInput!): PostPayload!
    postUpdate(postId: ID!, post: PostInput!): PostPayload!
    postDelete(postId: ID!): PostPayload!
    signup(
      credentials: CredentialsInput!
      name: String!
      bio: String!
    ): AuthPayload!
    signin(credentials: CredentialsInput!): AuthPayload!
    postPublish(postId: ID!): PostPayload!
    postUnpublish(postId: ID!): PostPayload!
  }

  input CredentialsInput {
    email: String!
    password: String!
  }
  input PostInput {
    title: String
    content: String
  }

  type AuthPayload {
    userErrors: [UserError!]!
    token: String
  }
  type Post {
    id: ID!
    title: String!
    content: String!
    published: Boolean!
    createdAt: String!
    user: User!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    posts(take: Int!, skip: Int!): [Post!]!
  }

  type Profile {
    id: ID!
    bio: String!
    isMyProfile: Boolean!
    user: User!
  }

  type UserError {
    message: String!
  }
  type PostPayload {
    userErrors: [UserError!]!
    post: Post
  }
`;
