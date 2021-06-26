import React from 'react';
import NavigationBar from './NavigationBar';
import './Home.css';
import Poster from './Poster';
import ThreePoster from './ThreePoster';
import BlogPostsUIList from './BlogPostsUIList';

const Home = () => {
    return (
        <div id="container">
            <NavigationBar></NavigationBar>
            <Poster></Poster>
            <ThreePoster></ThreePoster>
            <BlogPostsUIList></BlogPostsUIList>
        </div>
    );
};

export default Home;