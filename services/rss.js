import Parser from 'rss-parser';
import { mailer } from './mailer.js';
import { compareTime } from '../helpers/index.js';

const parser = new Parser();

export const rssGenerator = async () => {
    console.log(process.env.RSSURL);
    const feed = await parser.parseURL(process.env.RSSURL);
    const items = feed?.items;

    items.forEach(async (item) => {
        const minutesDifference = compareTime(item?.pubDate);
        // Check if the difference is less than 5 minutes
        if (minutesDifference < 5) {
            console.log('The UTC time is less than 5 minutes old.');
            await mailer(item);
        } else {
            console.log('The UTC time is not less than 5 minutes old.');
        }
    });
};
