import express from 'express';
import passport from 'passport';
import FeedItem from '../models/feed-item';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/video/:videoId', (req: any, res: any) => {
  const videoId = req.params.videoId;

  FeedItem.find({ video: mongoose.Types.ObjectId(videoId), $or: [{ author: req.currentUser.userId }, { professorComment: true }] }).sort({displayTime: 1}).exec((err, feedItems) => {
    if (!!err) {
      return res.status(400).json(err);
    }

    res.json(feedItems);
  });
});

router.post('/video/:videoId', (req: any, res: any) => {
  const videoId = req.params.videoId;

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

  FeedItem.find({ video: mongoose.Types.ObjectId(videoId), $or: [{ author: req.currentUser.userId }, { professorComment: true }] }).sort({displayTime: 1}).exec((err, feedItems) => {
    if (!!err) {
      return res.status(400).json(err);
    }

    return res.json(feedItems);
  });

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