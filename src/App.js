import React, {useEffect, useState} from 'react'
import './App.css';

const BASE_URL = 'http://localhost:8000/'

function App() {

  const [posts, setPosts]= useState([]);

  useEffect(() =>{
      fetch(BASE_URL + 'post/all')
        .then(response => {
          console.log(response.json());
          if (response.ok){
            return response.json()
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
    "Hello Irfan What do you do"
  );
}

export default App;
