import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HandleCreatePost from './HandleCreatePost';

class UpdatePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.location.state.currentPost.title,
      description: this.props.location.state.currentPost.description,
      contents: this.props.location.state.currentPost.contents
     };
    // creating a new instance of the handle create post function
    this.addHandleCreatePost = new HandleCreatePost();
    console.log(this.props.location.state.currentPost.description);
  }


  handleTyping = (event) => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpdate = (event) => {
    event.preventDefault();
    // sending update function to the handle post class instance
    console.log(this.state.description);
    this.addHandleCreatePost.updatePost(this.state.title,this.state.description,this.state.contents,this.props.match.params.id);
    this.props.history.push('/');
  }

  render(){
    return(
        <div className="col-md-8 mx-auto">

           <form className="form-wrapper" onSubmit={this.handleUpdate}>
            <h1>UPDATE POST</h1>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" className="form-control" name="title" value={this.state.title} onChange={this.handleTyping} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" className="form-control" name="description" value={this.state.description} onChange={this.handleTyping} />
            </div>
            <div className="form-group">
              <label htmlFor="contents">Contents:</label>
              <textarea type="text" id="contents" className="md-textarea" name="contents" value={this.state.contents} onChange={this.handleTyping} />
            </div>
              <input type="submit" className="btn btn-outline-success waves-effect" value="Confirm Update" />
              <Link className="btn btn-outline-secondary waves-effect" to={`/post/${this.props.match.params.id}`}>Cancel</Link>
           </form>

        </div>
    );
  }
}

export default UpdatePost;
