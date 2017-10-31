import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import EachPost from './EachPost';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { posts: null, postExists: false }
  }

  getAllPost = () => {
    axios.get('https://mern-blogging-app.herokuapp.com/blogposts/posts')
    .then( (response) => {
      this.setState({posts: response.data.results})
    }, (err) => {
      console.log("No Existing Posts, Please add some.")
    })
    .catch( (err) => {
      console.log(`Problem happened, ${err}`);
    })
  }

  MapEachPost = () => {
    if(this.state.posts){
      console.log(this.state.posts);
      return this.state.posts.map( (post) => {
        return (
          <div key={post._id}>
            <EachPost id={post._id} title={post.title} description={post.description} contents={post.contents} />
          </div>
        );
      })
    }
  }

  checkPostExist = () => {
    if(this.state.posts && this.state.posts.length <= 0){
      return <div className="no-posts">Please create some blogposts, there are currently no existing posts here.</div>;
    }
  }
  // <Link to="/create-post" className="float-right btn btn-primary waves-effect waves-light">Create Post</Link>

  render() {
    return (
      <div className="app row">
        <div className="col-md-12">
          <Link to="/create-post" style={{marginTop:"5%"}} className="float-right btn btn-outline-info waves-effect">Create Post</Link>
        </div>
        <div className="col-md-12">
          <div className="title">MERN-stack blogpost app</div>
          <div className="row"><div className="card-deck">{this.MapEachPost()}</div></div>

          {this.checkPostExist()}
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.getAllPost();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.posts === null){
      this.getAllPost();
    }
  }

};

export default App;
