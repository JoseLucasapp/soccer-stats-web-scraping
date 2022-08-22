import { getGameStats } from '../controllers/getStats'

export const routes = (router) => {
    router.get('/:code', getGameStats)
}