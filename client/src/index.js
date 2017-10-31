import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Local File imports
import App from './components/App';
import CreatePost from './components/CreatePost';
import ActivePost from './components/ActivePost';
import UpdatePost from './components/UpdatePost';
// import IndexPosts from './components/IndexPosts';

ReactDOM.render(
  <BrowserRouter>
      <div>
          <div className="overlay"></div>
          <Route exact path='/' component= { App } />
          <Route exact path='/create-post' component= { CreatePost } />
          <Route exact path='/post/:id' component= { ActivePost } />
          <Route exact path='/update-post/:id' component= { UpdatePost } />
      </div>
  </BrowserRouter>
  , document.querySelector('.container'));
