import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Lesson = new Schema({
    name: String,
    description: String,
    videoList: [{type: mongoose.Schema.Types.ObjectId, ref: 'Video'}]
});


export default mongoose.model('Lesson', Lesson, 'lessons');