import express from 'express';
import passport from 'passport';
import Lessons from '../models/lesson';

const router = express.Router();

router.get('/:lessonId', (req, res) => {
  const lessonId = req.params.courseId;

  Lessons.findOne({ _id: lessonId }).exec((err, lesson) => {

    if (!!err) {
      return res.status(400).json(err);
    }

    res.json(lesson);
  });
});

export default router;