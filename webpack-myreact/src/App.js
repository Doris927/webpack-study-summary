import React from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Blog from 'pages/Blog';
import Demo from 'pages/Demo';
import Resume from 'pages/Resume';
import { IconFontGlobal } from 'iconfont/iconfont';
import { GlobalStyle } from './style';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <GlobalStyle />
    <IconFontGlobal />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/demo" component={Demo} />
      <Route path="/resume" component={Resume} />
    </Switch>
  </ConnectedRouter>
);

export default hot(module)(App);
