import React, { Component } from 'react';

import BlogTitle from '../SiteParts/BlogTitle.jsx';
import Header from '../Header/Header.jsx';
import Page from '../Page/Page.jsx';
import FooterBack from '../Footer/FooterBack/FooterBack.jsx';

const MainPage = (props) => {
    return (
        <div>
            <Header />
            <Page>
                <BlogTitle title="Текст на главной" />
            </Page>
            <FooterBack />
        </div>
    );
}

export default MainPage;