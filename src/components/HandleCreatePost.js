// This Component Handles the Form Submit for CreatePost

// import 3rd party modules
import axios from 'axios';

class HandleCreatePost {
  createPost(title,description,contents) {
    axios.post('http://localhost:3001/blogposts/post' , { title , description, contents } )
    .then( (res) => {
      console.log('add blog post: ', res.data.results);
    })
    .catch( (err) => {
      console.log('Got Problem here: ', err);
      alert('Please check the object name!')
    })
  }
  // UPDATE function
  updatePost(title, description, contents , id) {
    axios.patch(`http://localhost:3001/blogposts/post/${id}` , { title, description, contents } )
    .then( (res) => {
      console.log('response', res.data.newResults);
        // return this.setState({ post: res.data })
    })
    .catch( (err) => {
      console.log('Problem updating', err);
    })
  }
  // DELETE function
  deletePost(id) {
    axios.delete(`http://localhost:3001/blogposts/post/${id}`)
    .then( (res) => {
      console.log("deleted post:", res.data.results);
    }, (err) => console.log(err))
    .catch(err => console.log(err))
  }
};

export default HandleCreatePost;
