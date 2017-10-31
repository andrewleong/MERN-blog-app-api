import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';

import HandleCreatePost from './HandleCreatePost';

class ActivePost extends Component {
  constructor(props){
    super(props);
    this.state = {currentPost: ''};

    this.addHandleCreatePost = new HandleCreatePost();
  }

  componentDidMount(){
    axios.get(`http://localhost:3001/blogposts/post/${this.props.match.params.id}`)
    .then( (res) => {
      return this.setState({currentPost: res.data.results});
    })
    .catch( (err) => {
      console.log('Problem fetching the url with id for update', err);
    })
  }

  handleDelete = (event) => {
    event.preventDefault();
    this.addHandleCreatePost.deletePost(this.props.match.params.id);
    this.props.history.push('/');
  }

  render(){
    const { id } = this.props.match.params;
    console.log("Current Post", this.state.currentPost);
    const { title, description, contents } = this.state.currentPost;
    const { currentPost } = this.state;
      if(currentPost === null){
          this.props.history.push('/');
      }
    return(
        <div className="col-md-8 mx-auto">
          <div className="form-wrapper">
            <Link to={`/`}><FaAngleDoubleLeft size={30}/></Link>
            <div className="post-title"><h1>{title}</h1></div>
            <div className="post-description"><h3>{description}</h3></div>
            <div className="post-contents">{contents}</div>
            <Link className="btn btn-outline-primary waves-effect" to={{ pathname:`/update-post/${id}`, state: { currentPost } }}>Update Post</Link>
            <form style={{display:"inline-block"}} onSubmit={this.handleDelete}>
              <input className="btn btn-outline-danger waves-effect" value="delete" type="submit"/>
            </form>
          </div>
        </div>
    );
  }
}

export default ActivePost;
