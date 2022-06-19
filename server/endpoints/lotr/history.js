const router = require('express').Router();

router.get('/search', async (req, res) => {
    try {
        const searchHistory = req.app.locals.db.collection('SearchHistory');
        
        res.status(200).json((await searchHistory.find().toArray()));
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;