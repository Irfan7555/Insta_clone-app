import React, {useEffect, useState} from 'react'
import './App.css';
import Post from './Post';
import {Avatar, Button} from "@mui/material";

const BASE_URL = 'http://localhost:8000/'

function App() {

  const [posts, setPosts]= useState([]);
  const [OpenSignIn,setOpenSignIn]= useState(false)
  const [OpenSignUp,setOpenSignUp]= useState(false)

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
            // t = timestamp, d= date
            const result = data.sort((a,b) =>{
              const t_a = a.timestamp.split(/[-T:]/);
              const t_b = b.timestamp.split(/[-T:]/);
              const d_a = new Date(Date.UTC(t_a[0], t_a[1]-1, t_a[2], t_a[3],t_a[4],t_a[5]));
              const d_b = new Date(Date.UTC(t_b[0], t_b[1]-1, t_b[2], t_b[3],t_b[4],t_b[5]));
              return d_b-d_a
          });
          return result;
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
    <div className='app'>
      <div className='app_header'>
        <img className='app_headerImg' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_logo_icon_170643.png' alt='Instagram' />
        <div>
          <Button onClick={() => setOpenSignIn(true)}>Login</Button>
          <Button onClick={() => setOpenSignUp(true)}>SignUp</Button>
          </div>    
      </div>
        <div className='app_posts'>
          {
            posts.map(post => (
              <Post
                post = {post}
                />
            ))
          }
        </div>
    </div>
  );
}

export default App;
