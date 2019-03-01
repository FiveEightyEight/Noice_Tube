import * as moment from 'moment';

const formatPublish = (publishedAt) => {
    // publishedAt needs to be a string
    // example: "2019-02-08T16:09:24.000Z"
    // how to access response.data.items[i].snippet.publishedAt
    if(typeof publishedAt !== 'string') return 'Publish Date Error';
    const published = moment(publishedAt, 'YYYY-MM-DD')
    return moment(published).fromNow()
}

export {
    formatPublish,
}