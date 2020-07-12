import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FeedItem = new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    date: String,
    content: String,
    displayTime: Number,
    video: {type: mongoose.Schema.Types.ObjectId, ref: 'Video'},
    course: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'},
    professorComment: Boolean,
    response: String
});


export default mongoose.model('FeedItem', FeedItem, 'feed-items');