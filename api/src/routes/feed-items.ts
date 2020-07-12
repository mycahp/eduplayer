import express from 'express';
import passport from 'passport';
import FeedItem from '../models/feed-item';

const router = express.Router();

router.get('/video/:videoId', (req: any, res: any) => {
    const videoId = req.params.courseId;

    FeedItem.find({ _id: videoId, $or: [{ author: req.currentUser.userId }, { professorComment: true }] }).exec((err, feedItems) => {


        if (!!err) {
            return res.status(400).json(err);
        }

        res.json(feedItems);
    });
});

router.post('/video/:videoId', (req: any, res: any) => {
    const videoId = req.params.courseId;

    const feedItem = new FeedItem({
        author: req.currentUser.userId,
        date: new Date(),
        content: req.body.content,
        displayTime: req.body.currentVideoTime,
        video: videoId,
        course: req.body.courseId,
        professorComment: req.currentUser.type == 'teaching' ? true : false
    });

    feedItem.save();

    return res.json(feedItem);
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