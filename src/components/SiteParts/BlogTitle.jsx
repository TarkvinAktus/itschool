import React, { Component } from 'react';
import "./BlogTitle.css"

const BlogTitle = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
    );
}

export default BlogTitle;