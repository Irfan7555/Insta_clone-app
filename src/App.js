import React, {useEffect, useState} from 'react'
import './App.css';
import Post from './Post';

const BASE_URL = 'http://localhost:8000/'

function App() {

  const [posts, setPosts]= useState([]);

  useEffect(() =>{
      fetch(BASE_URL + 'post/all')
        .then(response => {
          const json = response.json()
           // console.log(response.json());  comment this to get rid of this error TypeError: Failed to execute 'json' on 'Response': body stream already read
          console.log(json)
          
          if (response.ok){
            return json
          }
          throw response
        })
        .then(data =>{
          setPosts(data)
        })
        .catch(error =>{
          console.log(error);
          alert(error)
        })
  }, [])

  return (
    <div className='app_posts'>
      {
        posts.map(post => (
          <Post
            post = {post}
            />
        ))
      }
    </div>
  );
}

export default App;
