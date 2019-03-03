import React, { Component } from 'react';
import { getVideoDescription, numberComma, formatDescription, getChannelInfo } from '../services/main';
import { Spinner } from 'reactstrap';
import './Video.css';
import DescriptionText from '../components/descriptionText';
import Comments from './Comments'

const VideoPlayer = ({ id }) => {
    const link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3000`;

    return (
        <iframe title='yt-video' type="text/html" width="640" height="360"
            src={link} frameBorder="0"></iframe>
    );
}


class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoID: null,
            videoInfo: {
                title: '',
                views: '',
                description: '',
                channel: '',
                channelId: '',
                channelImg: null,
                commentCount: '',
                dislikeCount: '',
                likeCount: '',
                publishedAt: '',
                // publishedOn: 0000,
            },
            expand: false,
            comments: [],
        }
    }



    handleDescription = e => {
        const toggle = !this.state.expand;
        this.setState({
            expand: toggle,
        })
    }

    componentDidMount() {
        const { video_id } = this.props.match.params;
        getVideoDescription(video_id)
            .then(data => {
                console.log(data)
                this.setState({
                    videoID: video_id,
                    videoInfo: data.info,
                    comments: data.comments,
                })
                return getChannelInfo(data.info.channelId)
            })
            .then(response => {
                return response.data
            })
            .then(channelData => {
                const img = channelData.items[0].snippet.thumbnails.default.url;
                const newVideoInfo = { ...this.state.videoInfo };
                newVideoInfo['channelImg'] = img;
                this.setState({
                    videoInfo: newVideoInfo,
                })
            })
            .catch(err => {
                console.log('Mount Error: ', err)
            })
    }
    componentDidUpdate() {
        console.log(this.state, 'state in video')
    }
    render() {
        const spin = (
            <div className='d-flex justify-content-center'>
                <Spinner style={{ width: '3rem', height: '3rem' }} />
            </div>
        )

        const standardDescription = (
            <span className='col-12'>{formatDescription(this.state.videoInfo.description)}</span>
        )

        const defaultChannelImg = (
            <Spinner style={{ width: '1rem', height: '1rem' }} />
        )
        return (
            <div className='mt-5 container'>
                <div className='row'>
                    <div className='mx-auto align-self-center'>
                        {!this.state.videoID ? spin : <VideoPlayer value={'string'} id={this.state.videoID} />}
                    </div>
                    <div className='mt-3 mx-auto align-self-center row'>
                        <p className='col-12'>
                            <span className='h4'><strong>{this.state.videoInfo.title}</strong></span>
                        </p>
                        <p className='col-12 my-0'>
                            <span className='h6 text-muted'>{numberComma(this.state.videoInfo.views)} views</span>
                        </p>
                        <div className='col-12 mt-0'>
                            <hr />
                        </div>
                        <div className='col-12 row'>
                            <div className='col-auto pr-5 mr-2' style={{height: '44px', width: '44px'}}>
                                {!this.state.videoInfo.channelImg ? defaultChannelImg : <img className='rounded-circle' alt={this.state.videoInfo.channel} src={this.state.videoInfo.channelImg} style={{height: '44px', width: '44px'}}/>}
                            </div>
                            <div className='col-11 row'>
                                <span className='h6 col-12 mb-0'><strong>{this.state.videoInfo.channel}</strong></span>
                                <span className='h6 col-12 mt-0'>{this.state.videoInfo.publishedAt}</span>
                                {this.state.videoInfo.description.length < 250 ? standardDescription : <DescriptionText description={formatDescription(this.state.videoInfo.description)} expand={this.state.expand} handleDescription={this.handleDescription} />}
                            </div>
                        </div>


                        <div className='col-12'>
                            
                        </div>

                        <div className='col-12'>
                            <hr />
                        </div>

                    </div>
                </div>
                <Comments comments={this.state.comments}></Comments>
            </div>
        )
    }


}

export default Video;