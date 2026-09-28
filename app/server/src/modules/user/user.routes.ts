import {Router} from 'express';
import { WrapAsync } from '../../util/script/WrapAsync.js';
import * as userController from './user.controller.js';

const userRouter: Router = Router();

userRouter.route('/create')
.post(WrapAsync(userController.createUser));

userRouter.route('/:id')
.post(WrapAsync(userController.getUser));

userRouter.route('/:id/edit')
.post(WrapAsync(userController.editUser))

export default userRouter;