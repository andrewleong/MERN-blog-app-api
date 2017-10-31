// Individual Post

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EachPost extends Component {

  // ViewClickedPost = (id) => {
  //     <Link to={`/post/${id}`}> </Link>
  //     console.log("WTF");
  // }

  render(){
    const { id, title, description} = this.props;
    return(
      <div>

        <div className="card">
        <div className="card-block">
<h4 className="card-title">{title}</h4>
<hr />
<p className="card-text">{description}</p>
<Link to= {`/post/${id}`} >View</Link>
<Link to= {`/post/${id}`} >Edit</Link>
  </div>
</div>

      </div>
    );
  }
}

export default EachPost;
// {post._id}, {post.title}
