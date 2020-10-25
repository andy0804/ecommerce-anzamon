import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authmiddleware.js';
import {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from '../controllers/orderController.js';
router.route('/').post(protect, createOrder).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id').get(getOrderById);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
