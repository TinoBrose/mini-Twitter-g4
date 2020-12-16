import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Post from './post'

export default function Feed() {

    const [user, setUser] = useState([]);
    const [message, setMessage] = useState([]);

    //API FETCH

    const promiseOne = fetch('https://twitterwbs.herokuapp.com/users')   
        .then(response => response.json())
        // .then((resJson) => setUser(resJson))
        .catch(() => console.log("Request failed"));

    const promiseTwo = fetch('https://twitterwbs.herokuapp.com/messages')   
        .then(response => response.json())
        // .then((resJson) => setMessage(resJson))
        // .then((resJson) => console.log(resJson))
        .catch(() => console.log("Request failed"))
        // console.log(user.filter(u => u.id === message[1].id_user))

    useEffect(() => {
        Promise.all([promiseOne, promiseTwo]).then((values) => {
            console.log(values);
            setUser(values[0])
            setMessage(values[1])
          })
      }, []);

    return (
        <div>
            <Grid container spacing={3}>
                {/* {message.map((article, index) => <Post user={user.filter(u => u.id === article.id_user)} message={article} key={index} />)} */}
                {message
                    .map((item) => (
                    <Post
                        id={item.id}
                        text={item.text}
                        date={item.date}
                        id_user={item.id_user}
                        user={user.find(u => u.id === item.id_user).name}
                        key={item.id}
                    />
                    ))}
            </Grid>
            
        </div>
    )
}
