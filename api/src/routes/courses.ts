import express from 'express';
import passport from 'passport';
import Course from '../models/course';

const router = express.Router();

router.get('/:courseId', (req, res) => {
  const courseId = req.params.courseId;

  Course.findOne({ _id: courseId }).populate({
     path: 'lessons',
     populate: {
       path: 'videoList',
       model: 'Video'
     }
  }).exec((err, course) => {

    if (!!err) {
      return res.status(400).json(err);
    }

    res.json(course);
  });
});

export default router;