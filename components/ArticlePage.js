import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const ArticlePage = () => {
    const [metaTags, setMetaTags] = useState({
        title: 'शब्द टुडे || हिंदी न्यूज़',
        description: 'amazon prime video',
        ogTitle: '',
        ogDescription: 'amazon prime video100',
        image: '',
        url: window.location.href,
    });

    useEffect(() => {
        const updateMetaTags = async () => {
            try {
                const response = await fetch('https://api.sadaivsatya.com/api/home/tajaKhabars');
                const data = await response.json();

                if (data && data.length > 0) {
                    const story = data[0];
                    setMetaTags({
                        title: `शब्द टुडे || हिंदी न्यूज़`,
                        description: story.tazaKhabars.newsCategory,
                        ogTitle: `${story.tazaKhabars.newsHeading} || शब्द टुडे`,
                        ogDescription: story.tazaKhabars.newsDetails,
                        image: `https://api.sadaivsatya.com/${story.tazaKhabars.newsImage}`,
                        url: 'https://api.sadaivsatya.com/',
                    });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        updateMetaTags();
    }, []);

    return (
        <>
            <Helmet>
                <title>{metaTags.title}</title>
                <meta name="description" content={metaTags.description} />
                <meta property="og:title" content={metaTags.ogTitle} />
                <meta property="og:description" content={metaTags.ogDescription} />
                <meta property="og:image" content={metaTags.image} />
                <meta property="og:url" content="https://www.sadaivsatya.com/" />
            </Helmet>
            <div id="root">Your content here</div>
        </>
    );
};

export default ArticlePage;
