import getStats from "../scrapings/getStats"

export const getGameStats = async (req, res) => {
    try {
        const gameStats = await getStats(req.params.code)
        res.status(200).json(gameStats)
    } catch (error) {
        res.status(500).json(error)
    }
}