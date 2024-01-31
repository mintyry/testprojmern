const gql = String.raw;

module.exports = gql`
    type User {
        # shape will match models pretty closely
        _id: ID
        role: String,
        name: String,
        username: String
    }


    type Query {
        hello: String
    }

    type Mutation {
        # what follows colon is return value to the front end
        createUser(name: String!, username: String!, password: String!): User
    }
`;