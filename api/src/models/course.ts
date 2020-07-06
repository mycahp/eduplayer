import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Course = new Schema({
    title: String,
    description: String,
    img: String,
    lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }]
});


export default mongoose.model('Course', Course, "courses");