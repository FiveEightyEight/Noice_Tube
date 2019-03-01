import React from 'react';
import './Explorer.css'
require('bootstrap')

const VideoPlayer = ( props ) => {
    console.log(props.videos)

     return <div className ='container'>
                {
           props.videos.map(e=>{
                console.log(e)
                return (
                    <div className ='container  col-12'>
                        <div className = 'row'>
                       
                    <div className="card" Style = 'width: 13rem'>
                            <img className="card-img-top" src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{e} title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="google.com" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        </div>
                        <button>SHOW MORE</button>
                        </div>
                        
                        )
                   

                })
            }

                </div>
   
   
  }

// const Explorer = (props) =>{
//     let obj = {};
//             props.videos.map((video)=>{
//                 console.log('Explorer loop',video.dataSet);
//                 obj = video.dataSet;
//             });
//             console.log('Explorer obj',obj);
//             return obj;
// }

export default VideoPlayer