import {Router} from 'express';
import { WrapAsync } from '../../util/script/WrapAsync.js';
import * as meetingController from './meeting.controller.js';
import multer from 'multer'


const meetRouter: Router = Router();
const upload = multer();

meetRouter.route('/create')
.post(upload.none(), WrapAsync(meetingController.createMeet));

meetRouter.route('/:id')
.get(WrapAsync(meetingController.getMeet));

export default meetRouter;