import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player/youtube';
import { Circles } from 'react-loader-spinner';
import debounce from 'lodash.debounce';

const LiveUrl = () => {
  const [liveStreamUrl, setLiveStreamUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.sadaivsatya.com/api/home/goLiveStreame');
        if (response.data && response.data.liveStreame && response.data.liveStreame.length > 0) {
          const url = response.data.liveStreame[0].streameUrl;
          const urlWithParams = url.includes('?') ? `${url}&autoplay=1&mute=1` : `${url}?autoplay=1&mute=1`;
          setLiveStreamUrl(urlWithParams);
        } else {
          setError('No live stream URL available');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const handleScroll = debounce(() => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const currentScrollY = window.scrollY;

        // Show mini player only when scrolling down
        if (currentScrollY > lastScrollY && rect.top <= 0 && !isMiniPlayer) {
          setIsMiniPlayer(true);
        } else if (currentScrollY < lastScrollY && isMiniPlayer && rect.top > 0) {
          setIsMiniPlayer(false);
        }

        setLastScrollY(currentScrollY);
      }
    }, 100); // Debounce delay of 100ms

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMiniPlayer, lastScrollY]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Circles
          height="30"
          width="30"
          color="#f7265c"
          ariaLabel="circles-loading"
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {isMiniPlayer && (
        <button className='MobileYoutube'
          onClick={() => setIsMiniPlayer(false)}
          style={{
            position: 'fixed',
            top: 395,
            right: 10,
            zIndex: 1000,
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '5px 10px',
            display: 'block', // Ensure the button does not leave a space
          }}
        >
          Close
        </button>
      )}
      <div
        ref={videoRef}
        className={`live-video-container ${isMiniPlayer ? 'mini' : ''}`}
        style={{
          textAlign: 'center',
          position: isMiniPlayer ? 'fixed' : 'relative',
          bottom: isMiniPlayer ? '10px' : 'auto',
          right: isMiniPlayer ? '10px' : 'auto',
          width: isMiniPlayer ? '300px' : '100%',
          height: isMiniPlayer ? '170px' : 'auto',
          zIndex: isMiniPlayer ? 1000 : 'auto',
          border: isMiniPlayer ? '1px solid #ccc' : 'none',
          transition: 'all 0.3s ease-in-out', // Smooth transition
          overflow: 'hidden', // Ensure no overflow
        }}
      >
        {liveStreamUrl ? (
          <ReactPlayer
            url={liveStreamUrl}
            controls
            width="100%"
            height="100%"
            playing={true}
            muted={false}
          />
        ) : (
          <div>No live stream available</div>
        )}
      </div>
     
    </div>
  );
};

export default LiveUrl;
