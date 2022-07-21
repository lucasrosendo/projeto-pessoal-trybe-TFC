import * as express from 'express';
import leaderController from '../controllers/leader.controller';

const router = express();

router.get('/leaderboard/home', leaderController.home);

export default router;
