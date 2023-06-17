import { Application } from 'express';
import {authRouter} from '../../modules/auth/routes/auth.route';
import {authMiddleware} from '../middleware/auth.middleware';
import {userRouter} from '../../modules/user/routes/user.route';

const apiVersion = '/api/v1';

const appRoutes = (app: Application) => {

  const routes = () => {
    app.use(apiVersion, authRouter.routes());
    app.use(apiVersion, authMiddleware.checkAuth, userRouter.routes());
  };
  routes();
};
export default appRoutes;
