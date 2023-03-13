// routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controllers/books.controller';
const booksSlashId = '/books/:id';

const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);

router.get(booksSlashId, booksController.getById);
router.post('/books', booksController.create);
router.put(booksSlashId, booksController.update);
router.delete(booksSlashId, booksController.remove);

export default router;