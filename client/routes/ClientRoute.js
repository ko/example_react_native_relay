import Relay, { Route } from 'react-relay';

export default class ClientRoute extends Route {
  static routeName = 'ClientRoute';

  static queries = {
    viewer: () => Relay.QL`query { viewer(query: $query) }`,
  };

  static paramDefinitions = {
    query: {required: true},
  };
}
