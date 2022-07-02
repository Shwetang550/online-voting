import express from 'express';

const router = express.Router();

// all post-route callback functions
import {
    getParties,
    updateParty,
} from '../controllers/status.js';

router.get('/', getParties);
router.put('/:id', updateParty);
// router.put('/:id/likePost', likePost);

export default router;