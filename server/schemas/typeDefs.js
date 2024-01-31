const gql = String.raw;

module.exports = gql`
    type User {
        # shape will match models pretty closely
        _id: ID
        role: String,
        name: String,
        username: String
    }

    type scanEvent {
        user: User
        createdAt: String
    }

    type QRCode {
        _id: ID
        # need to teach what scanEvent is
        scanEvents: [scanEvent]
        createdAt: String
    }


    type Query {
        getQRCode(id:ID): QRCode
    }

    type Auth {
        user: User
        token: ID
    }

    type Mutation {
        # what follows colon is return value to the front end
        createUser(name: String!, username: String!, password: String!): Auth
        # dont need to pass anything in, admin will make it
        createQRCode: QRCode
        scanQRCode(id:ID): QRCode
    }
`;