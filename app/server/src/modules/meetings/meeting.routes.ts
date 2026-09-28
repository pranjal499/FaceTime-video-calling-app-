import {Router} from 'express';
import type {Request, Response} from 'express';
import { WrapAsync } from '../../util/script/WrapAsync.js';
import * as meetingController from './meeting.controller.js';

const meetRouter: Router = Router();

meetRouter.route('/create')
.post(WrapAsync(meetingController.createMeet));

meetRouter.route('/:id')
.get(WrapAsync(meetingController.getMeet));

export default meetRouter;