import * as moment from 'moment';
import axios from 'axios';
import API_KEY from './API_KEY';
import React from 'react';


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
        temp.push({ query: arr[i].config.params.q, data: arr[i].data })
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

const buildSearchResultObject = (dataObj, searchQuery, simple = true) => {
    // requires response.data
    const { data } = dataObj;
    const obj = {}
    const arr = [];
    obj['query'] = dataObj.query || searchQuery;
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
    for (let i = 0; i < feed.length; i++) {
        feedVideos[feed[i]] = false;
    }
    return feedVideos;
}

const populateFeedVideos = (feedVideos, feed = ['music'], count = 10) => {
    const newFeedVideos = { ...feedVideos }
    return exploreFeed(feed, count)
        .then(data => {
            for (let i = 0; i < data.length; i++) {
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
    const newQueryObj = { ...queryObject }
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

// ----> Description -------> ---> --> -> > 
const callAPI = (url, params) => {
    return axios({
        method: 'get',
        url,
        params,
    })
}

const updateDescription = (id) => {
    const descriptionUrl = 'https://www.googleapis.com/youtube/v3/videos'
    const commentUrl = 'https://www.googleapis.com/youtube/v3/commentThreads'
    const description = {
        part: 'id,snippet,statistics',
        key: API_KEY,
        id, // id param
    }
    const comments = {
        part: 'snippet,replies',
        videoId: id,
        key: API_KEY,
        textFormat: 'plainText'
    }
    return Promise.all([callAPI(descriptionUrl, description), callAPI(commentUrl, comments)])
}

const getVideoDescription = (id) => {
    return updateDescription(id)
        .then(response => {
            console.log(response)
            let description = {};
            let commentResponse = {};
            for (let i = 0; i < response.length; i++) {
                if (response[i].data.kind === 'youtube#videoListResponse') {
                    description = response[i].data;
                }
                if (response[i].data.kind === 'youtube#commentThreadListResponse') {
                    commentResponse = response[i].data;
                }
            }
            const info = {
                title: description.items[0].snippet.title,
                description: description.items[0].snippet.description,
                views: description.items[0].statistics.viewCount,
                dislikeCount: description.items[0].statistics.dislikeCount,
                likeCount: description.items[0].statistics.likeCount,
                commentCount: description.items[0].statistics.commentCount,
                channel: description.items[0].snippet.channelTitle,
                channelId: description.items[0].snippet.channelId,
                publishedAt: formatPublish(description.items[0].snippet.publishedAt),
            }
            let comments = [];
            commentResponse.items.forEach(element => {
                let newObj = {
                    username: element.snippet.topLevelComment.snippet.authorDisplayName,
                    profilePic: element.snippet.topLevelComment.snippet.authorProfileImageUrl,
                    comment: element.snippet.topLevelComment.snippet.textDisplay
                }
                comments.push(newObj)
            })

            return {
                info,
                comments,
            }
        })

        .catch(err => {
            return err;
        })
}

const getChannelInfo = (id) => {
    const channelUrl = 'https://www.googleapis.com/youtube/v3/channels'
    const channel = {
        part: 'snippet',
        key: API_KEY,
        id, // id param
    }
    return callAPI(channelUrl, channel);
}


const capitalize = (str) => {
    if (typeof str !== 'string') return str;
    return str[0].toUpperCase().concat(str.slice(1));
};

const formatDescription = (description) => {
    // if(typeof str !== 'string') return description;
    const array = description.split('\n')
    return descriptionHelper(array);
};

const descriptionHelper = (arr) => {
    if (arr.length === 0) {
        return;
    }
    return [<p key={arr.length - 1}>{arr[0]}</p>].concat(descriptionHelper(arr.slice(1)));
};

const formatPublish = (publishedAt) => {
    // publishedAt needs to be a string
    // example: "2019-02-08T16:09:24.000Z"
    // how to access response.data.items[i].snippet.publishedAt
    if (typeof publishedAt !== 'string') return 'Publish Date Error';
    const published = moment(publishedAt, 'YYYY-MM-DD')
    return moment(published).fromNow()
}

const numberComma = (string) => {
    const str = string;
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            newString = ',' + newString;
        }
        const char = str[str.length - i - 1]
        newString = char + newString;
    }
    return newString;
};

const removeArrayElement = (arr, index) => {
    if (typeof index !== 'number') return arr;
    const newArray = [...arr];
    return newArray.slice(0, index).concat(newArray.slice(index + 1));
};

export {
    capitalize,
    formatPublish,
    formatDescription,
    numberComma,
    removeArrayElement,
    search,
    multiSearch,
    getPromiseAllData,
    getVideoDescription,
    getChannelInfo,
    buildSearchResult,
    buildSearchResultObject,
    buildFeedVideos,
    populateFeedVideos,
    exploreFeed,
    exploreLoadMore,
    parseVideo
}
