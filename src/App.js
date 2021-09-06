import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/post">Post </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/post" component={Post}></Route>
        <Route render={() => <h1>Page Not Found</h1>}></Route>
      </Switch>
    </div>
  );
}

function Post() {
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default App;
