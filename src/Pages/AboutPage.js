

import React from 'react';

function AboutPage(info) {
    return (
        <div>
        <h1>{info.info}</h1>
            <p>{info.body}</p>
        </div>
    );
}

export default AboutPage;git