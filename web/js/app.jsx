import Bacon from 'baconjs';
import Radium from 'radium';
import React from 'react';
import Router from 'react-router';
import Routes from './routes';

var {
  Route,
  RouteHandler,
  HistoryLocation
} = Router;

Router.run(Routes, HistoryLocation, (App) => {
  React.render(<App/>, document.body);
})

