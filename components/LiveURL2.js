import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player/youtube';
import { Circles } from 'react-loader-spinner';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength);
  }
  return text;
};

const stripHtmlTags = (html, maxLength) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const strippedText = tempDiv.textContent || tempDiv.innerText || '';
  return truncateText(strippedText, maxLength);
};

const LiveUrl = () => {
  const [liveStreamUrl, setLiveStreamUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.sadaivsatya.com/api/home/goLiveStreame'
        );
        console.log(response.data); // Debug: Check the API response structure
        if (response.data && response.data.liveStreame && response.data.liveStreame.length > 0) {
          // Ensure the URL has autoplay and mute parameters
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
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Circles
          height='30'
          width='30'
          color='#f7265c'
          ariaLabel='circles-loading'
          wrapperStyle={{}}
          wrapperClass=''
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
   
      <div className='live-video-container' style={{ textAlign: 'center' }}>
      {liveStreamUrl ? (
        <ReactPlayer 
          url={liveStreamUrl}
          controls
          width='100%'
          height='100%'
          playing={true} // To autoplay the video
          muted={false} // Mute to allow autoplay
        />
      ) : (
        <div>No live stream available</div>
      )}
    </div>
    </div>
  );
};

export default LiveUrl;
