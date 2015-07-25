import React from 'react';
import Router from 'react-router';
import Routes from './routes';
import Radium from 'radium';

var {
  Route,
  RouteHandler,
  HistoryLocation
} = Router;

Router.run(Routes, HistoryLocation, (App) => {
  React.render(<App/>, document.body);
})

