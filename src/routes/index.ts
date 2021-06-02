import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'Node.JS TS' }));

export default routes;
