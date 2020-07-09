import express from 'express';
import passport from 'passport';
import Video  from '../models/video';

const router = express.Router();

router.get('/:videoId', (req, res) => {
  const videoId = req.params.videoId;

  Video.findOne({ _id: videoId }).exec((err, video) => {

    if (!!err) {
      return res.status(400).json(err);
    }

    res.json(video);
  });
});

export default router;