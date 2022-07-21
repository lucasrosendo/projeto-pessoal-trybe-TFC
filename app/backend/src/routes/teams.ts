import * as express from 'express';
import teamsController from '../controllers/teams.cotroller';

const router = express();

router.get('/teams', teamsController.teams);
router.get('/teams/:id', teamsController.teamsId);

export default router;
