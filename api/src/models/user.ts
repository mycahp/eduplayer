import mongoose, { PassportLocalSchema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const Schema = mongoose.Schema;

const User = new Schema({
  firstName: String,
  lastName: String,
  type: String,
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
});

User.plugin(passportLocalMongoose);

export default mongoose.model('User', User as PassportLocalSchema, 'users');