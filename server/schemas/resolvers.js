const { User } = require ('../models');

module.exports = {
    Mutation: {
        createUser: async (_, args) => {
            try {
                return await User.create(args);
            } catch (error) {
                console.error(error);
                throw new Error(error);
            }
        }
    },
    Query: {
        hello: async () => {
            return 'Hello';
        }
    }
}