# **TeamTwo**
|   | | | |  |
|:---:|:---:|:---:|:---:|:---:|
|**Members**|[Robert Abreu](https://github.com/FiveEightyEight)|[Osita Igwe](https://github.com/oigwe)|[Richard Green](https://github.com/rgreen11)|[Jorge Billini](https://github.com/JorgeBillini)|
|  **Deployment**: | [S](https://app.netlify.com/sites/vibrant-dijkstra-5a9005/overview) | [I](https://app.netlify.com/sites/vibrant-dijkstra-5a9005/overview)| [T](https://app.netlify.com/sites/vibrant-dijkstra-5a9005/overview)|  [E](https://app.netlify.com/sites/vibrant-dijkstra-5a9005/overview)|
___



## **Table of Contents**

|1.|[The Ask](https://github.com/FiveEightyEight/TeamTwo_YTube#1-the-ask)
|--:|:----|
|2.|[Brainstorm](https://github.com/FiveEightyEight/TeamTwo_YTube#2-brainstorm)
|3.|[Build](https://github.com/FiveEightyEight/TeamTwo_YTube#3-build--app-structure)
|4.|[Routes](https://github.com/FiveEightyEight/TeamTwo_YTube#4-routes)
|5.|[Components](https://github.com/FiveEightyEight/TeamTwo_YTube#5-components)
|6.|[Functions](https://github.com/FiveEightyEight/TeamTwo_YTube#6-functions)
|7.|[Sources](https://github.com/FiveEightyEight/TeamTwo_YTube#7-sources)
|8.|[Video Query](https://github.com/FiveEightyEight/TeamTwo_YTube#8-video-query-example-json)
|9.|[Search Query](https://github.com/FiveEightyEight/TeamTwo_YTube#9-search-query-example-json)
|10.|[GitHub Collaboration](https://github.com/FiveEightyEight/TeamTwo_YTube#10-github-collaboration)
___
## 1. **The Ask**
* Single Page App that can only use
* React Router
    * React-Router-Dom
* Local Storage
* Axios
* Moment.js (Dates)
* Bootstrap
* Clicking on the video takes you to that video's page

## 2. **Brainstorm**
* Robert - use local storage as a way to get already created user profiles
* Jorge - Feed Editor is an Array, Get user from the state -> user.fee.push(str)
* Jorge - Explore Feed should be a stateful component
* Jorge - Moment.js [date].fromNow
    * Can also format dates
* Robert - use CSS overflow on the video description
* Jorge - use slice on the video description to only show a certain number of characters
* Jorge - use the same Explorer components for feed explorer and the search explorer
    * Team Decision - Keep them two separate components
* Robert/Jorge - Store in local storage name, history, feed list names(search parameters)


## 3. **Build / App Structure**
* Stateful
    * App.js
    * Video State
    * User (constructor - name, feed, handle
        * Feed -> array [‘spongebob’]
        * Name
        * FeedEditor 
            * To Add
            * To Delete
* Stateless
    * Explorer Feed
    * Search Query
* State
    * Current User
        * If no current user or current user is “null” the default feed is displayed
    * List of Users
* Objects
    * User Profile
        * Name
        * Subscribed Feeds

## 4. **Routes**
* Required
    * /
    * /video/:video_id
    * /search/:search_query
    * /user
    * /feededitor
* Optional
    * /user/:user_id/history

## 5. **Components**
* Nav Bar
    * Static Component
    * Home Button
    * Nav Menu
* Search Bar
    * Button
        * Pressing “Search” takes the user to the search page
* Home Page
    * Name Jumbotron
    * Feed List
    * Explorer Feed for each personalized subscription -  (Bootstrap Card Components, Video Components)
        * Each explore section should show loading before the data has arrived
        * Needs to be styled exactly like in the image. 4x2 initially.
        * Clicking SHOW MORE loads 4 more below the current list
        * Each Explore section MUST show the following data for each video:
            * Thumbnail image
            * Title of video
            * Channel Name
            * Time it was posted relative to now. (Use Moment.js)
* Video Page
    * Shows the following data:
        * Youtube Iframe Video Player with specific video
        * Video title
        * Video Views
        * Video description
* Search Results (Bootstrap Card Components, Video Components)
    * Display what is the search query
    * Gather 10 videos
    * Display in a list all the results of the search
    * Each video must have
        * Thumbnail
        * Title of Video
        * Channel Name
        * Time it was posted relative to now
    * Clicking on the video takes you to that video's page
    * SHOW MORE button to load the next result of the search, load 10 more
    * Infinite Scroll is optional
* User
    * Need to have a form to add new user
    * Can’t have two users with the same name
        * Alert is given
    *Needs to indicate which is the Active User
    * Indicated through background color changing
    * Indicates through ‘text selected’
* Optional
    * Reset All Data
    * Removes all Users, Feeds
    * Shows Music Feed
    * Comment List
        * Use API to display all the Comments



## 6. **Functions**
* Call API
* Search
* Handle Feedlist
    * Sub Function Search (above)
* Generate User from  Local Storage
* handleAddUser
* handleReset
* handleFeedRemoval
* handleFeedAdd
* handleUserSelectChange
* onClickThumbnail/Description
*




## 7. **Sources**
* **Cards** -  [Bootstrap URL](https://getbootstrap.com/docs/4.0/components/card/)
* **Buttons** - [Bootstrap URL](https://getbootstrap.com/docs/4.0/components/buttons/)
* **Toggle Dropdown** (*Description*) - (*probs would use ReactStrap*) - [Bootstrap URL](https://getbootstrap.com/docs/4.0/components/collapse/)
* **List Group** (*User List with Active*) - (*probs would use ReactStrap*) -[Bootstrap URL](https://getbootstrap.com/docs/4.0/components/list-group/#active-items)
* **Nav** -[Bootstrap URL]( https://getbootstrap.com/docs/4.0/components/navs/#working-with-flex-utilities)
* **NavBar** - [Bootstrap URL](https://getbootstrap.com/docs/4.0/components/navbar/)
* **Embeds** - [Bootstrap URL](https://getbootstrap.com/docs/4.0/utilities/embed/#example)



## 8. **Video Query** [*Example JSON*]
* Query URL - **TEST WITH YOUR API_KEY**
    > ```https://www.googleapis.com/youtube/v3/videos?part=id,snippet,statistics&key={API_Key}&id=CBrQfXRog_U```
* Response.datas (*double check*)
    * ID - `response.data.items[i].id`
    * Published At - `response.data.items[i].snippet.publishedAt`
    * Title -  `response.data.items[i].snippet.title`
    * Full Description -  `response.data.items[i].snippet.description`
    * Statistics - `response.data.items[i].statistics`
        * "viewCount": `response.data.items[i].statistics.viewCount`
        * "likeCount": `response.data.items[i].statistics.likeCount`
        * "dislikeCount": `response.data.items[i].statistics.dislikeCount`
        * "commentCount": `response.data.items[i].statistics.commentCount`
    * Response JSON - do your own call - it looks sloppy when pasted

## 9. **Search Query** [*Example JSON*]
* Query URL - **TEST WITH YOUR API_KEY**
> ```https://www.googleapis.com/youtube/v3/search?key={API_Key}&q=hottubs&maxResults=8&part=snippet```
* Response.datas (double check)
    * ID - `response.data.items[i].id.videoId`
    * Published At - `response.data.items[i].snippet.publishedAt`
    * Title - `response.data.items[i].snippet.title`
    * Short Description - `response.data.items[i].snippet.description`
    * Thumbnail - `response.data.items[i].snippet.thumbnails.default.url`
    * ChannelName - `response.data.items[i].snippet.channelTitle`
* Response JSON - only pasted 1 result
```javascript
 "kind": "youtube#searchListResponse",
 "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/XQZaMC8m-o6wByGaBF_pMJJ4AVw\"",
 "nextPageToken": "CAgQAA",
 "regionCode": "US",
 "pageInfo": {
  "totalResults": 1000000,
  "resultsPerPage": 8
 },
 "items": [
  {
   "kind": "youtube#searchResult",
   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/D6odccBDQAA3R9-7J58nYvlIWSE\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "CBrQfXRog_U"
   },
   "snippet": {
    "publishedAt": "2017-01-22T16:00:24.000Z",
    "channelId": "UCM7-49moEm4LN4RfMK2zxbQ",
    "title": "2017 Hot Tubs at SPA MAX, take a walk with Rick",
    "description": "I walk around the showroom for 15 minutes to give you a good sample of what I have here to offer, 200+ spas including 24 swim spas and over 40 refurbished ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/CBrQfXRog_U/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/CBrQfXRog_U/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/CBrQfXRog_U/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "SPA MAX",
    "liveBroadcastContent": "none"
   }
  },
```

## 10. **GitHub Collaboration**
1. **Getting Started**
    * Fork & Clone Project 
    * In cloned directory excute *__these__* command: 
        * > ```npm install```
        * > ```git remote add main https://github.com/FiveEightyEight/TeamTwo_YTube```
2. **Building**
    * **NEVER** work on **master** branch
        * **_DO_**:  `git checkout -b 'task_branch'`  
3. **Contributing**: When you've finished working on your branch 
    * Make sure you've saved and commited all work
    * `git checkout master`
    * `git pull main master`
    * `git checkout 'task_branch'`
    * `git merge master`
    * Resolve any conflicts
    * Test App
    * If App tests out OK:
        * > `git push -u origin 'task_branch'` 
    * Pull request your `'task_branch'` to main project repo
        * Add code reviewers from project collaborators list 
