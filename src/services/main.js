import * as moment from 'moment';
import axios from 'axios';
import API_KEY from './API_KEY';


const search = (query, count = 10, page = '') => {
    return axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
            part: 'snippet',
            maxResults: count,
            videoDefinition: 'high',
            type: 'video',
            videoEmbeddable: 'true',
            key: API_KEY,
            q: query,
            pageToken: page,
        }
    });
};

const multiSearch = (array, count = 10) => {
    if (array.length <= 0) throw new Error('multiSearch requires at least one query string');
    const promiseAll = [];
    for (let i = 0; i < array.length; i++) {
        const query = array[i];
        if (typeof query !== 'string') throw new Error(`multiSearch requires strings data\nIndex Error: ${i}. Query: `, query);
        promiseAll.push(search(query, count));
    }
    return Promise.all(promiseAll)
};

const getPromiseAllData = (arr) => {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i].data)
    }
    return temp;
};

const buildSearchResult = (arr, simple = true) => {
    const temp = [];
    for(let i = 0; i < arr.length; i++) {
        const currentSearch = arr[i];
        temp.push(buildSearchResultObject(currentSearch, simple))
    }
    return temp;
}

const buildSearchResultObject = (data, simple = true) => {
    // requires response.data
    const obj = {}
    const arr = [];
    obj['previousPageToken'] = '';
    obj['nextPageToken'] = data.nextPageToken;
    for (let i = 0; i < data.items.length; i++) {
        const currentVideo = data.items[i]
        arr.push(parseVideo(currentVideo, simple));
    }
    obj['items'] = arr;
    return obj;
};

const parseVideo = (resultObj, simple = true) => {
    const parsed = {};
    if (simple) {
        parsed['videoId'] = resultObj.id.videoId;
        parsed['videoTitle'] = resultObj.snippet.title;
        parsed['channelId'] = resultObj.snippet.channelId;
        parsed['channelName'] = resultObj.snippet.channelTitle;
        parsed['publishedAt'] = formatPublish(resultObj.snippet.publishedAt);
        parsed['thumbnail'] = resultObj.snippet.thumbnails.medium.url;
        parsed['description'] = resultObj.snippet.description;
    } else {
        parsed['videoId'] = resultObj.id.videoId;
        parsed['videoTitle'] = resultObj.snippet.title;
        parsed['channelId'] = resultObj.snippet.channelId;
        parsed['channelName'] = resultObj.snippet.channelTitle;
        parsed['publishedAt'] = resultObj.snippet.publishedAt;
        parsed['thumbnail'] = resultObj.snippet.thumbnails;
        parsed['description'] = resultObj.snippet.description;
    }
    return parsed;
};


const formatPublish = (publishedAt) => {
    // publishedAt needs to be a string
    // example: "2019-02-08T16:09:24.000Z"
    // how to access response.data.items[i].snippet.publishedAt
    if (typeof publishedAt !== 'string') return 'Publish Date Error';
    const published = moment(publishedAt, 'YYYY-MM-DD')
    return moment(published).fromNow()
}

export {
    formatPublish,
    search,
    multiSearch,
    getPromiseAllData,
    buildSearchResult,
    buildSearchResultObject,
    parseVideo
}