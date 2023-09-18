import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'assets/Css/App.css';
import store from 'redux/store';
import SuspenseWrapper from 'shared/Components/SuspenseWrapper';
import Loader from 'shared/Components/Loader';
import Notification from 'shared/Notification';

const NotFound = lazy(() => import(/* webpackChunkName: "404" */ 'shared/ErrorPages/404'));
const TasksList = lazy(() => import(/* webpackChunkName: "tasks-list" */ 'pages/TasksList'));
const Task = lazy(() => import(/* webpackChunkName: "task" */ 'pages/Task'));

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Loader />
      <Notification />
      <SuspenseWrapper>

        <Switch>

          <Route path="/" exact>
            <Redirect to={{ pathname: '/tasks' }} />
          </Route>

          <Route path="/tasks" exact>
            <TasksList />
          </Route>

          <Route path="/tasks/:id" exact>
            <Task />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </SuspenseWrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
