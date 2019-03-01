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
        temp.push({query: arr[i].config.params.q, data: arr[i].data})
    }
    return temp;
};

const buildSearchResult = (arr, simple = true) => {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
        const currentSearch = arr[i];
        temp.push(buildSearchResultObject(currentSearch, simple))
    }
    return temp;
}

const buildSearchResultObject = (dataObj, simple = true) => {
    // requires response.data
    const { data } = dataObj;
    const obj = {}
    const arr = [];
    obj['query'] = dataObj.query;
    obj['previousPageToken'] = '';
    obj['nextPageToken'] = data.nextPageToken;
    for (let i = 0; i < data.items.length; i++) {
        const currentVideo = data.items[i]
        arr.push(parseVideo(currentVideo, simple));
    }
    obj['items'] = arr;
    return obj;
};
const buildFeedVideos = (feed = ['music']) => {
    const feedVideos = {};
    for(let i = 0; i < feed.length; i ++) {
        feedVideos[feed[i]] = false;
    }
    return feedVideos;
}

const populateFeedVideos = (feedVideos, feed = ['music'], count = 10) => {
    const newFeedVideos = {...feedVideos}
    return exploreFeed(feed, count)
    .then(data => {
        for(let i = 0; i < data.length; i ++) {
            const current = data[i];
            newFeedVideos[current.query] = current;
        }
        return newFeedVideos;
    })
    .catch(err => {
        return err;
    })
}


const exploreLoadMore = (queryObject) => {
    const newQueryObj = {...queryObject}
    return search(queryObject.query, 4, queryObject.nextPageToken)
    .then(response => {
        return response.data
    })
    .then(data => {
        for (let i = 0; i < data.items.length; i++) {
            const currentVideo = data.items[i]
            newQueryObj.items.push(parseVideo(currentVideo));
        }
        newQueryObj.previousPageToken = queryObject.nextPageToken;
        newQueryObj.nextPageToken = data.nextPageToken;
        return newQueryObj
    })
    .catch(err => {
        return err;
    })
    
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

const exploreFeed = (arr, count = 10) => {
    return multiSearch(arr, count)
        .then(resArr => {
            return getPromiseAllData(resArr);
        })
        .then(data => {
            return buildSearchResult(data)
        })
        .catch(err => {
            return err;
        })
}

const capitalize = (str) => {
    if(typeof str !== 'string') return;
    return str[0].toUpperCase().concat(str.slice(1));
};

const formatPublish = (publishedAt) => {
    // publishedAt needs to be a string
    // example: "2019-02-08T16:09:24.000Z"
    // how to access response.data.items[i].snippet.publishedAt
    if(typeof publishedAt !== 'string') return 'Publish Date Error';
    const published = moment(publishedAt, 'YYYY-MM-DD')
    return moment(published).fromNow()
}

const numberComma = (string) => {
    const str = string;
    let newString = '';
    for (let i = 0; i < str.length; i ++) {
        if (i % 3 === 0 && i !== 0) {
            newString = ',' + newString;    
        }
        const char = str[str.length - i - 1]
        newString = char + newString;
    }
    return newString;
};

const removeElement = (arr, index) => {
    const newArray = [...arr];
    return newArray.slice(0, index).concat(newArray.slice(index + 1));
};

export {
    capitalize,
    formatPublish,
    numberComma,
    removeElement,
    search,
    multiSearch,
    getPromiseAllData,
    buildSearchResult,
    buildSearchResultObject,
    buildFeedVideos,
    populateFeedVideos,
    exploreFeed,
    exploreLoadMore,
    parseVideo
}