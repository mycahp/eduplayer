import mongoose, { PassportLocalSchema } from 'mongoose';
import jwt from 'jsonwebtoken';
import config from 'config';
import Joi from 'joi';

const Schema = mongoose.Schema;

const User = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  type: String,
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
});

User.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, type: this.type }, config.get('secretKey'));
  return token;
}

export default mongoose.model('User', User, 'users');