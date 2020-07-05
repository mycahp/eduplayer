import express from 'express';
import passport from 'passport';
import User from '../models/user';


const router = express.Router();

router.post('/', (req, res, next) => {
  passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      if (!user) {
        return res.status(401).json({ error: "Username or password incorrect." });
      }

      req.logIn(user, (loginErr) => {
        if (err) {
          return next(loginErr);
        }

        return res.json({ username: user.username, type: user.type, userId: user._id });
      });

    })(req, res, next);
});

router.post("/logout", function(req, res){
    req.logout();
    res.status(200).json({loggedOut: true});
});

router.get('/register', (req: any, res: any, next: any) => {
  if (req.query.type === 'teaching') {
    User.register({ username: 'teacher', type: 'teaching' } as any, 'password', (err, user) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json({ created: true });
      }
    });
  } else {
    User.register({ username: 'student', type: 'student' } as any, 'password', (err, user) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json({ created: true });
      }
    });
  }
});

export default router;
