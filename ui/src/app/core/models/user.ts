import { Course } from './course';

export interface User {
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  type: String,
  courses: Course[],
};
