import * as express from 'express';
import matchController from '../controllers/matchs.controller';

const router = express();

router.get('/matches', matchController.matchs);

export default router;
