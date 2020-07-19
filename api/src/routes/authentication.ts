import express from 'express';
import passport from 'passport';
import User from '../models/user';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', (req, res, next) => {
    const user = User.findOne({username: req.body.username}).populate('courses').exec((err: any, user: any) => {
        if (err || !user) {
            return res.status(401).json({ error: "User not found"});
        }

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result) {
                res.json(
                    { username: user.username, type: user.type, _id: user._id, firstName: user.firstName, lastName: user.lastName, token: user.generateAuthToken(), courses: user.courses }
                );
            }
        });
    });
});

router.post("/logout", (req, res) => {
    req.logout();
    res.status(200).json({ loggedOut: true });
});

router.get('/register', async (req: any, res: any, next: any) => {
    let user: any;

    if (req.query.type === 'teaching') {
        user = new User({ username: 'teacher', type: 'teaching', firstName: "Professor", lastName: "Professorson", courses: ['5f028e9b3e5da30c7599dca9'], password: 'password' });
    } else {
        user = new User({ username: 'student', type: 'student', firstName: "Student", lastName: "Learner", courses: ['5f028e9b3e5da30c7599dca9'], password: 'password' });
    }

    user.password = await bcrypt.hash(user.password, 10);

    await user.save();

    const token = user.generateAuthToken();
    res.header("x-auth-token", token).json({
        _id: user._id,
        name: user.username,
    });

});

export default router;
