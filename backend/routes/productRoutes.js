import express from 'express';
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsById,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productControllers.js';
import { protect, admin } from '../middleware/authmiddleware.js';

// @desc Fetch all products
// @route GET  /api/products
// @access Public
router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router.route('/:id/reviews').post(protect, createProductReview);
// @desc Fetch single  product
// @route GET  /api/product/:id
// @access Public
router
  .route('/:id')
  .get(getProductsById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
