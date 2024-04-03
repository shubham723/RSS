const Parser = require('rss-parser');
const mailer = require('./mailer.js');
const compareTime = require('../helpers/index.js');

const parser = new Parser();

const rssGenerator = async () => {
    const feed = await parser.parseURL(process.env.RSSURL);
    const items = feed?.items;

    items.forEach(async (item) => {
        const minutesDifference = compareTime(item?.pubDate);
        // Check if the difference is less than 5 minutes
        if (minutesDifference < 5) {
            console.log('The UTC time is less than 5 minutes old.');
            mailer(item);
        } else {
            console.log('The UTC time is not less than 5 minutes old.');
        }
    });
};

module.exports = rssGenerator;
