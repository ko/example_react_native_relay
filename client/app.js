import Client from './components/Client';
import ClientRoute from './routes/ClientRoute';
import React, { Component } from 'react';
import Relay, {
  DefaultNetworkLayer,
  RootContainer
} from 'react-relay';

Relay.injectNetworkLayer(
  new DefaultNetworkLayer('http://localhost:3000/graphql')
);

export default class ExampleApp extends Component {
  render(): void {
    return (
      <RootContainer
        Component={Client}
        route={new ClientRoute({query: ''})}
      />
    ); 
  }
}
