import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/posts">Posts </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/posts" component={Posts}></Route>
        <Route path="/post/:id" component={Post}></Route>
        <Route render={() => <h1>Page Not Found</h1>}></Route>
      </Switch>
    </div>
  );
}

function Posts() {
 
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(response=>{
      response.json().then(data=>{
        console.log(data);
        setPosts(data.map(p=><div key={p.id}>
          <Link  to={"/post/"+p.id}>   {p.id} : {p.title} </Link>
          </div>))
      })
    })
  },[])


  return (
    <div>
      <h1>Posts</h1>
      {posts}
    </div>
  );
}

function Post(){
  const [post, setPost] = useState("");
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(response=>{
      response.json().then(data=>{
        console.log(data);
        setPost(data.body);
      })
    })
  },[])

  return (
    <h1>{post}</h1>
  )
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default App;
