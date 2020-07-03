import { Router, NextFunction, Request, Response } from 'express';

const localRoutes = Router();

localRoutes.get('/logout', (req: Request, res: Response, next: NextFunction) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.redirect('/logout');
    }
    console.log('destroy have been called', err);
    res.redirect('http://localhost:3000/');
  });
});

export default localRoutes;