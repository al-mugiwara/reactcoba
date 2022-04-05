import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../../component/Post/Post';
import axios from 'axios';
import GENI from '../../../services';

class BlogPost extends Component {

    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isupdate: false,
        comments : []
    }

    getPostAPI = () => {
        GENI.getNewsBlog().then(result => {
            this.setState({
                post: result
            });
        })

        GENI.getComment().then(result => {
            this.setState({
                comments:result
            })
        })
    }

    postDataToAPI = () => {
        GENI.postNewsBlog(this.state.formBlogPost).then(result => {
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })

        // axios.post('http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
        //     console.log(res);
        //     this.getPostAPI()
            
        // }, (err) => {
        //     console.log('error : ', err)
        // })
        

    }

    putDataToAPI = () => {
        GENI.updateNewsBlog(this.state.formBlogPost,this.state.formBlogPost.id).then(result => {
            this.getPostAPI()
            this.setState({
                isupdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            })
        })
        // axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
        //     console.log(res);
        //     this.getPostAPI()
        //     this.setState({
        //         isupdate: false,
        //         formBlogPost: {
        //             id: 1,
        //             title: '',
        //             body: '',
        //             userId: 1
        //         }
        //     })
        // })
        
    }

    handleRemove = (data) => {
        GENI.deleteNewsBlog(data).then(result => {
            this.getPostAPI()
        })
        // console.log(data)
        // axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
        //     console.log(res);
        //     this.getPostAPI()
        // })
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json =>{
        //         this.setState({
        //             post: json
        //         })
        //     })
        this.getPostAPI()
    }
    handleSubmit = () => {
        //console.log(this.state.formBlogPost);
        if (this.state.isupdate) {
            this.putDataToAPI()
        } else {
            this.postDataToAPI()
        }
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isupdate: true
        })

    }

    handelFormChange = (event) => {
        //console.log('form change',event.target)
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timestamp = new Date().getTime();
        if (!this.state.isupdate) {
            formBlogPostNew['id'] = timestamp;
        }
        console.log(timestamp)
        // console.log('init value : ',this.state.formBlogPost)
        // console.log('new value : ',formBlogPostNew)
        // console.log(event.target.name)
        formBlogPostNew[event.target.name] = event.target.value;
        //let title = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            //    console.log('value obj fromBlogPost : ', this.state.formBlogPost);
        })
    }

    handleDetail = (id) => {
        // let navigate = useNavigate();
        //this.props.history.push(`/detail-post/${id}`);
        // navigate({pathname: `/detail-post/${id}` });
    }

    render() {
        return (
            <Fragment>
                <p>Halaman Blog Post</p>
                <hr />
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" onChange={this.handelFormChange} value={this.state.formBlogPost.title} />
                    <label htmlFor="body"> Blog Content</label>
                    <textarea htmlFor="body" name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handelFormChange} value={this.state.formBlogPost.body}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                    })
                }
                
            </Fragment>
        )
    }
}

// 12702 => tgl 01

export default BlogPost;