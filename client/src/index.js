import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import Header from './js/pages/Header';
import Footer from './js/pages/Footer';
import Articles_list from './js/pages/Articles_list';
import Articles_retrieve from './js/pages/Articles_retrieve';
import User_list from './js/pages/User_list';
import User_retrieve from './js/pages/User_retrieve';
import Profile from './js/pages/Profile';
import SignIn from './js/pages/SingIn';
import CreatePost from './js/pages/CreatePost';
import RegisterForm from './js/pages/Register';
import AboutUs from './js/pages/AboutUs';
import { store } from './js/store/store';
import './css/main.scss';

const history = createBrowserHistory();

const Home = () => (
  <div>
    <Articles_list />
  </div>
);

const All_user = () => (
  <Switch>
    <Route exact path="/users" component={User_list} />
    <Route path="/users/:number" component={User_retrieve} />
  </Switch>
);

const All_post = () => (
  <Switch>
    <Route exact path="/articles" component={Articles_list} />
    <Route path="/articles/:number" component={Articles_retrieve} />
  </Switch>
);

const Person = () => <Profile />;

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Person} />
    <Route path="/articles" component={All_post} />
    <Route path="/login" component={SignIn} />
    <Route path="/registration" component={RegisterForm} />
    <Route path="/about" component={AboutUs} />
  </Switch>
);

const CreatPost = () => (
  <Route exact path="/createpost" component={CreatePost} />
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
