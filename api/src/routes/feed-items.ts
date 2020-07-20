import express from 'express';
import passport from 'passport';
import FeedItem from '../models/feed-item';
import mongoose from 'mongoose';
import User from '../models/user';

const router = express.Router();

router.get('/', (req: any, res: any) => {
    User.findById(req.currentUser._id, (err, user: any) => {
        const matcher: any = {};

        if (user.type == "student") {
            matcher.author = user._id;
        }

        matcher.course = { $in: user.courses };

        FeedItem.find(matcher).populate('video').populate('course').populate('author').exec((err, feedItems) => {
            return res.json(feedItems);
        });
    });
});

router.get('/video/:videoId', (req: any, res: any) => {
    const videoId = req.params.videoId;

    FeedItem.find({ video: mongoose.Types.ObjectId(videoId), $or: [{ author: req.currentUser._id }, { professorComment: true }] }).sort({ displayTime: -1 }).exec((err, feedItems) => {
        if (!!err) {
            return res.status(400).json(err);
        }

        res.json(feedItems);
    });
});

router.post('/video/:videoId', (req: any, res: any) => {
    const videoId = req.params.videoId;

    const feedItem = new FeedItem({
        author: req.currentUser._id,
        date: new Date(),
        content: req.body.content,
        displayTime: req.body.currentVideoTime,
        video: videoId,
        course: req.body.course,
        professorComment: req.currentUser.type == 'teaching' ? true : false
    });

    feedItem.save().then(() => {

        FeedItem.find({ video: mongoose.Types.ObjectId(videoId), $or: [{ author: req.currentUser._id }, { professorComment: true }] }).sort({ displayTime: -1 }).exec((err, feedItems) => {
            if (!!err) {
                return res.status(400).json(err);
            }

            return res.json(feedItems);
        });
    });

});

router.put('/:feedItemId', (req: any, res: any) => {
    FeedItem.findById(req.params.feedItemId, (err, feedItem: any) => {
        feedItem.response = req.body.response;

        console.log(req.body.content);

        feedItem.save();

        return res.json(feedItem);
    })
});

router.get('/follow-up/:videoId', (req: any, res: any) => {
    const videoId = req.params.courseId;

    FeedItem.find({ _id: videoId }).exec((err, feedItems) => {


        if (!!err) {
            return res.status(400).json(err);
        }

        res.json(feedItems);
    });
});

export default router;