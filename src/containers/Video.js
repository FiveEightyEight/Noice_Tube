import React, { Component } from 'react';
import { getVideoDescription, numberComma, formatDescription, getChannelInfo, ratingFormat } from '../services/main';
import { Spinner } from 'reactstrap';
import './Video.css';
import DescriptionText from '../components/descriptionText';
import Comments from './Comments'
import { IoMdThumbsUp, IoMdThumbsDown, IoMdShareAlt, } from "react-icons/io";
import { MdMoreHoriz, MdPlaylistAdd, MdSort } from "react-icons/md"

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
                        <div className='col-12 my-0 row'>
                            <span className='mt-3 h6 text-muted col align-self-start'>{numberComma(this.state.videoInfo.views)} views</span>
                            <div className='my-0 col align-self-end row '>
                                <p className='ml-auto text-muted h6'>
                                    <IoMdThumbsUp />
                                    <span className='mx-2' style={{ fontSize: '12px' }}>
                                        <strong>{ratingFormat(this.state.videoInfo.likeCount)}</strong>
                                    </span>
                                    <IoMdThumbsDown />
                                    <span className='mx-2' style={{ fontSize: '12px' }}>
                                        <strong>{ratingFormat(this.state.videoInfo.dislikeCount)}</strong>
                                    </span>
                                    <IoMdShareAlt />
                                    <span className='mx-2' style={{ fontSize: '12px' }}>
                                        <strong>SHARE</strong>
                                    </span>
                                    <MdPlaylistAdd />
                                    <span className='mx-2' style={{ fontSize: '12px' }}>
                                        <strong>SAVE</strong>
                                    </span>
                                    <MdMoreHoriz />
                                </p>
                            </div>
                        </div>
                        <div className='col-12 mt-0'>
                            <hr className='mt-0' />
                        </div>
                        <div className='col-12 row'>
                            <div className='col-auto pr-5 mr-2' style={{ height: '44px', width: '44px' }}>
                                {!this.state.videoInfo.channelImg ? defaultChannelImg : <img className='rounded-circle' alt={this.state.videoInfo.channel} src={this.state.videoInfo.channelImg} style={{ height: '44px', width: '44px' }} />}
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
                <div className='col-12 row'>
                    <span className='mt-1 col-auto'>{numberComma(this.state.videoInfo.commentCount)} Comments</span>
                    <div>
                        <MdSort />
                        <span className='mx-2' style={{ fontSize: '12px' }}>
                            <strong>SORT BY</strong>
                        </span>
                    </div>
                </div>
                <Comments comments={this.state.comments}></Comments>
            </div>
        )
    }


}

export default Video;