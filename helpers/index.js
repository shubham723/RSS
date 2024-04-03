import moment from "moment";

export const compareTime = (date) => {
    // Get the current UTC time
    const currentUTCTime = moment.utc();

    // Example UTC time to compare (replace this with your UTC time)
    const utcTimeToCompare = moment.utc(date);

    // Calculate the difference in minutes between current time and the time to compare
    return currentUTCTime.diff(utcTimeToCompare, 'minutes');
};
