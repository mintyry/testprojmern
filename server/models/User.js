const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    role: {
        type: String,
        // one of these options
        enum: [ 'admin', 'user' ],
        default: 'user'
    }
});

const User = model('User', userSchema);

module.exports = User;

// how does this get created? changes at random intervals; front end needs to be aware of it
const QR = { 
    timestamp,
    scanned_users: [
        {
            user_id,
            scan_time
        }
    ]
}