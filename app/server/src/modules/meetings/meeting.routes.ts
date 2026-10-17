import {Router} from 'express';
import { WrapAsync } from '../../util/script/WrapAsync.js';
import * as meetingController from './meeting.controller.js';
import { get } from 'http';


const meetRouter: Router = Router();

meetRouter.route('/create')
.post(WrapAsync(meetingController.createMeet));

meetRouter.route('/:id')
.get(WrapAsync(meetingController.getMeet));

meetRouter.route('/:hostId')
.get(WrapAsync(meetingController.getMeetByHostId));

meetRouter.route('/')
.get(WrapAsync(meetingController.listMeetings));

meetRouter.route('/:id/start')
.patch(WrapAsync(meetingController.startMeeting));

meetRouter.route('/:id/end')
.patch(WrapAsync(meetingController.endMeeting));

meetRouter.route('/:id/cancel')
.patch(WrapAsync(meetingController.cancelMeeting));

export default meetRouter;