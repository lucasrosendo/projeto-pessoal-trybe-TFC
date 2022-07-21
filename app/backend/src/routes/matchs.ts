import * as express from 'express';
import matchController from '../controllers/matchs.controller';
import validMatch from '../middlewares/validMatches';
import checkToken from '../middlewares/checkToken';

const router = express();

router.get('/matches', matchController.matchs);
router.post('/matches', validMatch, checkToken, matchController.matcheInProgress);
router.patch('/matches/:id/finish', matchController.matcheUpdate);
router.patch('/matches/:id', matchController.matcheUpdateGoals);

export default router;
