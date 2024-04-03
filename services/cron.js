import cron from 'node-cron';
import { rssGenerator } from './rss.js';

(() => {
    cron.schedule('*/4 * * * *', () => {
        console.log('running job');
        rssGenerator();
    });
})();
