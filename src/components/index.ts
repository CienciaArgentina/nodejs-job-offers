import jobOffersRoutes from './jobOffer/routes';
import healthRoutes from './healthcheck/routes';

export default [...jobOffersRoutes, ...healthRoutes];
