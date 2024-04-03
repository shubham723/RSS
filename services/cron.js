const cron = require('node-cron');
const rssGenerator = require('./rss.js');

(() => {
    cron.schedule('*/4 * * * *', () => {
        console.log('running job ');
        rssGenerator();
    });
})();
