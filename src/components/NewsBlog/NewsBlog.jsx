import React, { Component } from 'react';
import BlogTitle from "../SiteParts/BlogTitle.jsx";
import Header from '../Header/Header.jsx';
import Page from '../Page/Page.jsx';

function NewsBlog() {
    return (
        <div>
            <Header />
            <Page>
                <BlogTitle title="Новости школы" subtitle="За неделю" />
            </Page>
        </div>
    );
}

export default NewsBlog;