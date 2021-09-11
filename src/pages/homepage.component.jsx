import React from 'react';

import Directory from '../components/directory/directory.component'

import './homepage.styles.scss';

const HomePage=({history})=>(
    <div className="homepage">
        <Directory histoty={history}/>
    </div>
)

export default HomePage;