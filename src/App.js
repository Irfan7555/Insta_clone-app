import React, {useEffect, useState} from 'react'
import './App.css';

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
    "Hello Irfan Shareef"
  );
}

export default App;
