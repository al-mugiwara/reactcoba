import React, {Component,useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './DetailPost.css';

// class DetailPost extends  Component{
//     // componentDidMount(){
//     //     console.log(this.props.match.params.id)
//     // }
//     render(){
//         return(
//              <p>DetailPost</p>
//         )
//     }
// }

const DetailPost = (props) => {
    const [post,setPost] = useState({})
    let {Postid} = useParams();
    //postid besar kecilnya huruf harus sama dengan parameters yang dikirim dari home
    useEffect(() => {
        axios.get(`http://localhost:3004/posts/${Postid}`)
            .then((res) => {
               setPost(res.data)
            })
    })

    return (
        <div className="p-detail-post">
            <p className="detail-title">{post.title}</p>
            <p className="detail-body">{post.body}</p>
        </div>
    )
}
export default DetailPost;