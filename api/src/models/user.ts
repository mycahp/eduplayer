import mongoose, { PassportLocalSchema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
    first_name: String,
    last_name: String
});

User.plugin(passportLocalMongoose);

export default mongoose.model('User', User as PassportLocalSchema);