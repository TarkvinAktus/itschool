import React, { Component } from 'react';
import './Page404.css';

import Page from './Page/Page.jsx';
import HeaderFullScreenPage from './Header/HeaderFullScreenPage/HeaderFullScreenPage.jsx';
import BlogTitle from './SiteParts/BlogTitle.jsx';

function Page404(props) {
    return (
        <div>
            <HeaderFullScreenPage />
            <Page>
                <h1 className="h1-404">404</h1>
                <h2 className="h2-404">Кажется, вы потерялсь — этой страницы не существует:(</h2>
            </Page>
        </div>
    );
}

export default Page404;