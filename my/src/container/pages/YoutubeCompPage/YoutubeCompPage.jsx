import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';


class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <p>YoutubeComp</p>
                <hr />
                <YoutubeComp
                    time="7.12"
                    title="Tutorial 1"
                    desc="2x ditonton, 2 hari yang lalu"
                />
                <YoutubeComp
                    time="8.12"
                    title=" Tutorial 2"
                    desc="200x ditonton, 10 hari yang lalu"
                />
                <YoutubeComp
                    time="5.04"
                    title="Tutorial 3"
                    desc="500x ditonton, 4 hari yang lalu"
                />
                <YoutubeComp
                    time="4.12"
                    title=" Tutorial 4"
                    desc="1k ditonton, 14 hari yang lalu"
                />
                <YoutubeComp />
            </Fragment>

        )
    }
}

export default YoutubeCompPage;