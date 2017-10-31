// Adding a new Blog POST page

import React, { Component } from 'react';
import { Link } from "react-router-dom";

// import local files
import HandleCreatePost from './HandleCreatePost';


// function validate(title, description) {
//   // true means invalid, so our conditions got reversed
//   return {
//     title: title.length === 0,
//     description: description.length === 0
//   };
// }

class CreatePost extends Component {
  constructor(props){
    super(props);

    this.state = { title:'', description:'', contents:'', validationTitle: 'noError', validationDesc: 'noError', validationContents: 'noError'};
    // creating a new instance of the handle create post function
    this.addHandleCreatePost = new HandleCreatePost();
  };

  handleTyping = (event) => {
    this.setState({
        // using the name property from input
        [event.target.name]: event.target.value
     });
  }

  handleSubmit = (event) => {
    if (!this.canBeSubmitted()) {
      event.preventDefault();
      return;
    }
    this.addHandleCreatePost.createPost(this.state.title,this.state.description,this.state.contents);
    try {
      this.props.history.push('/');
    } catch(e) {
      alert(e);
    }
  }

  canBeSubmitted() {
    const { title, description, contents } = this.state;
    return (
      title.length > 0 &&
      description.length > 0 &&
      contents.length > 0
    );
  }

  validateTitle = (event) => {
    const { title } = this.state;
    if(title.length < 1) {
      this.setState({validationTitle: 'gotErrorTitle'});
    }
    else {
      this.setState({validationTitle: 'noError'});
    }
  }

  validateDesc = (event) => {
    const { description } = this.state;
    if(description.length < 1) {
      this.setState({validationDesc: 'gotErrorDescription'});
    }
    else {
      this.setState({validationDesc: 'noError'});
    }
  }

  validateContents = (event) => {
    const { contents } = this.state;
    if(contents.length < 1) {
      this.setState({validationContents: 'gotErrorContents'});
    }
    else {
      this.setState({validationContents: 'noError'});
    }
  }

  render(){
    const isEnabled = this.canBeSubmitted();
    return (
        <div className="col-md-8 mx-auto">
          <form className="form-wrapper" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <div className={this.state.validationTitle}>Title is required!</div>
              <input type="text" placeholder="Enter Title" id="title" className="form-control" onBlur={this.validateTitle} name="title" value={this.state.title} onChange={this.handleTyping} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <div className={this.state.validationDesc}>Description is required!</div>
              <input placeholder="Enter description" type="text" id="description" className="form-control" onBlur={this.validateDesc} name="description" value={this.state.description} onChange={this.handleTyping} />
            </div>
            <div className="form-group">
              <label htmlFor="contents">Contents:</label>
              <div className={this.state.validationContents}>Contents are required!</div>
              <textarea placeholder="Enter contents" type="text" id="contents" className="md-textarea" onBlur={this.validateContents} name="contents" value={this.state.contents} onChange={this.handleTyping} />
            </div>
            <button disabled={!isEnabled} type="submit" className="btn btn-outline-success waves-effect">Submit</button>
            <Link className="btn btn-outline-secondary waves-effect" to={`/`}>Cancel</Link>
          </form>
        </div>
     );
  }
}

export default CreatePost;
