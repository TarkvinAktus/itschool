import React, { Component } from 'react';
import './CoursePage.css';

import CourseCard from './CourseCard.jsx';
import BlogTitle from '../SiteParts/BlogTitle.jsx';
import Header from '../Header/Header.jsx';
import Page from '../Page/Page.jsx';
import FooterBack from '../Footer/FooterBack/FooterBack.jsx';

const CoursePage = (props) => {
    return (
        <div>
            <Header />
            <Page>
                <BlogTitle title="Курсы" />
                <div className="courses-card-grid">
                    <CourseCard courseName="Робототехника" />
                    <CourseCard courseName="Юный инженер" />
                    <CourseCard courseName="Основы бизнеса" />
                </div>
            </Page>
            <FooterBack />
        </div>
    );
}

export default CoursePage;