import react from 'react'
import axios from 'axios'

const video = () => {
    axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                part: 'snippet',
                maxResults: 1,
                videoDefinition: 'high',
                type: 'video',
                videoEmbeddable: 'true',
                key: 'AIzaSyCb4Jbt3GZj63vr8JTRF8xV67Oae0hBQco',
                q: 'food',
                pageToken: ''
            }
        })
        .then((e) => {
            console.log(e.data.items)
        })
        .catch((err) => {
            console.log(err)
        })

}


export {
    video
}