const router = require('express').Router();
const middleEarth = require('lotr-api');

router.get('/:type', async (req, res) => {
    try {
        const { type } = req.params;
        const { phrase } = req.query;
        const searchQuery = await middleEarth.searchFor(type, phrase);

        if(searchQuery.total >= 1) {
            const results = searchQuery.docs.map((obj) => {
                return { name: obj.name, value: obj._id };
            });

            res.status(200).json({ resultCount: searchQuery.total, results });
        } else {
            res.status(200).json({ resultCount: 0 });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/:type/details', async (req, res) => {
    try {
        const { type } = req.params;
        const { phrase, resultCount, id } = req.body;
        const details = await middleEarth.getInfo(type, id);

        if (details.quotes) {
            details.randomQuoteIndex = Math.floor(Math.random()*details.quotes.length);
        }

        await req.app.locals.db.collection('SearchHistory').insertOne({
            type,
            phrase,
            resultCount,
            id,
            selectedText: details.name,
            timeStamp: Date.now()
        });

        res.status(201).json(details);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;