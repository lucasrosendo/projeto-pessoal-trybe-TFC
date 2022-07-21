import * as express from 'express';
import teamsController from '../controllers/teams.cotroller';

const router = express();

router.get('/teams', teamsController.teams);

export default router;
