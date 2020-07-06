import express from 'express';
import passport from 'passport';
import User from '../models/user';

const router = express.Router();

router.get('/:userId', (req, res) => {
  const userId = req.params.userId;

  User.findOne({ _id: userId }).populate('courses').exec((err, user) => {

    if (!!err) {
      return res.status(400).json(err);
    }

    res.json(user);
  });
});

export default router;