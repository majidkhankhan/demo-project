"use client"
import React from 'react';

class ScrollToTop extends React.Component {
    state = {
        isScrolled: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 100) {
            this.setState({ isScrolled: true });
        } else {
            this.setState({ isScrolled: false });
        }
    };

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    render() {
        const { isScrolled } = this.state;
        return (

            <span onClick={this.scrollToTop}
                style={{ display: isScrolled ? 'block' : 'none' }} className="ak-back-top is-visible">
                <i className="fa fa-arrow-up" />
            </span>

        );
    }
}

export default ScrollToTop;
