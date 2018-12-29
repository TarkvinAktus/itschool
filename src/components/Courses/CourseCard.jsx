import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css'

const CourseCard = (props) => {
    return (
        <div className="course-card">
            <div className="course-image">{props.courseImage}</div>
            <h3 className="course-name"><Link to="/">{props.courseName}</Link></h3>
        </div>
    );
}

export default CourseCard;