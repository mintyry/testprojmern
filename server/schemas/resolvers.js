const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    Query: {
        getQRCode: async (_, args) => {
            try {
                return await QRCode.findById(args.id);
            } catch (error) {
                console.error(error);
                throw new Error(error);
            }
        },
    },

    Mutation: {
        createUser: async (_, args) => {
            try {
                const user = await User.create(args);
                const token = signToken(user);

                return { user, token }
            } catch (error) {
                console.error(error);
                throw new Error(error);
            }
        },
        createQRCode: async (_, args) => {
            try {
                // return await QRCode.create();
                // when using create without args, it didnt work.
                // had to use this alternate syntax; same result
                const qrCode = new QRCode();
                await qrCode.save();
            } catch (error) {
                console.error(error);
                throw new Error(error);
            }
        },
        scanQRCode: async (_, args, context) => {
            return await QRCode.findByIdAndUpdate(args.id, {
                $push: {
                    scanEvents: {
                        user: context.user._id
                        // timestamps will be automatic
                    }
                }
            }, { new: true});
        },
    }
}