import React,{useState,useEffect} from 'react';
import './VideoSection.scss';

export default function VideoSection() {

    
    const [showVideo , setShowVideo] = useState(false);

    const playVideo = () => {
        setShowVideo(true);
    }

    const closeVideo = () => {
        setShowVideo(false);
    }

    return (
        <div className='videoSection'>
            <h6>Parents always know best</h6>
            <h2>Straight from <span className='redFont'>the parents</span>...</h2>
            <div className='video' onClick={playVideo} style={{ cursor: 'pointer' }}>
                <img src="https://www.instrucko.com/_static/images/as-parent.webp" alt="video thumbnail" />
                <div className='playVideo'>
                    <div className='play'>
                        <img src="https://www.instrucko.com/_static/icons/play-button.svg" alt="" />
                        <p>Play Video</p>
                    </div>
                    <h2>I’d say instrucko all the way.</h2>
                    <p>Mrs. Kareena Kapoor Khan</p>
                </div>
            </div>
            {
                showVideo && <div style={{ fontSize: '5rem', color: 'black' }}>Hii</div>
            }
            {showVideo && <div className='playedVideo'>
                <div className='video-fullscreen'>
                    <div className="fullscreen">
                        <iframe src="https://www.youtube.com/embed/YcVwi6my0sM?feature=oembed&autoplay=1" title="YouTube video player"></iframe>
                    </div>
                </div>
                <div className='absolute cross' onClick={closeVideo} style={{ cursor: 'pointer' }}>
                    <img src="https://www.instrucko.com/_static/icons/close-icon.svg" alt="close" />
                </div>
            </div>}

        </div>
    )
}
