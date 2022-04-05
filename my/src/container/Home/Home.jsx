//libraries
import React, { Component, Fragment, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//pages
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
//style
import './Home.css';
import GlobalProvider from '../../context/Context';
import Hooks from '../pages/Hooks/Hooks';


class Home extends Component {
    componentDidMount() {
        // setTimeout(()=>{
        //     this.setState({
        //         showComponent:false
        //     })
        // },15000)

    }
    render() {
        return (
            <Router>
                <Fragment>
                        <div className="navigation">
                            <Link to="/">BlogPost</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/lifecycle">Lifecycle</Link>
                            <Link to="/youtube-component">Youtube</Link>
                            <Link to="/hooks">Hooks</Link>
                        </div>
                        <Routes>
                            <Route path="/" exact element={<BlogPost />} />
                            <Route path="/detail-post/:Postid" element={<DetailPost />} />
                            <Route path="/product" element={<Product />} />
                            <Route path="/lifecycle" element={<LifeCycleComp />} />
                            <Route path="/youtube-component" element={<YoutubeCompPage />} />
                            <Route path="/hooks" element={<Hooks />} />
                        </Routes>
                    </Fragment>
            </Router>
            //   {/* <div>
            //         <p>YoutubeComp</p>
            //         <hr />
            //         <YoutubeComp
            //             time="7.12"
            //             title="Tutorial 1"
            //             desc="2x ditonton, 2 hari yang lalu"
            //         />
            //         <YoutubeComp
            //             time="8.12"
            //             title=" Tutorial 2"
            //             desc="200x ditonton, 10 hari yang lalu"
            //         />
            //         <YoutubeComp
            //             time="5.04"
            //             title="Tutorial 3"
            //             desc="500x ditonton, 4 hari yang lalu"
            //         />
            //         <YoutubeComp
            //             time="4.12"
            //             title=" Tutorial 4"
            //             desc="1k ditonton, 14 hari yang lalu"
            //         />
            //         <YoutubeComp />
            //         <p>Counter</p>
            //         <hr />
            //         <Product />
            //         <p>LifCycle Component</p>
            //         <hr />
            //         {
            //             this.state.showComponent ? <LifeCycleComp /> : null
            //         }
            //         <p>BlogPost</p>
            //         <hr />
            //         <BlogPost />
            //     </div> */}

        )
    }
}

export default GlobalProvider(Home);