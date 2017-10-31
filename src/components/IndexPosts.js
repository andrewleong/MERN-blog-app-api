import React, { Component } from 'react';

import axios from 'axios';

class IndexPosts extends Component {
  constructor(props){
    super(props);

    this.state = {posts: []}
  }
  componentDidMount(){
    axios.get('http://localhost:3001/blogposts/posts')
    .then( (response) => {
       this.setState({posts: response.data});
    })
    .catch( (err) => {
      console.log(`Problem happened, ${err}`);
    })
  }
  render(){
    this.state.posts.map( (post) => console.log(post) ) 
    return(
        <div>
        List of post
        <div></div>
        </div>
    );
  }
}

export default IndexPosts;
