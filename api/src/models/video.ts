import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Video = new Schema({
    name: String,
    description: String,
    length: Number,
    videoUrl: String,
    lesson: {type: mongoose.Schema.Types.ObjectId, ref: 'Lesson'},
});


export default mongoose.model('Video', Video, 'videos');