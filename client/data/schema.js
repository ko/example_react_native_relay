import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId,
} from 'graphql-relay';

import {
  Widget,
  searchWidgets,
  getViewer,
} from './database';

const GraphQLWidget = new GraphQLObjectType({
  name: 'Widget',
  fields: {
    myId: {
      type: GraphQLInt,
      resolve: (obj) => obj.artistId,
    },
    myName: {
      type: GraphQLString,
      resolve: (obj) => obj.artistName,
    },
  },
});

const GraphQLSearchWidgetPayload = new GraphQLObjectType({
  name: 'SearchWidgetPayload',
  fields: {
    results: {
      type: new GraphQLList(GraphQLWidget),
      args: {
        query: {
          type: GraphQLString,
          defaultValue: '',
        },
      },
      resolve: (obj, {query}) => searchWidgets(query),
    },
  },
});

const GraphQLViewer = new GraphQLObjectType({
  name: 'Viewer',
  fields: {
    searchWidgets: {
      type: new GraphQLList(GraphQLWidget),
      args: {
        query: {
          type: GraphQLString,
          defaultValue: 'bicycle',
        },
      },
      resolve: (obj, { query }) => searchWidgets(query),
    },
  },
});

const Root = new GraphQLObjectType({
  name: 'Root',
  fields: {
    viewer: {
      type: GraphQLViewer,
      args: {
        query: {
          type: GraphQLString,
          defaultValue: '',
        },
      },
      resolve: (obj, {query}) => getViewer(query),
    },
    /*
    widgets: {
      //type: new GraphQLList(GraphQLWidget),
      type: GraphQLSearchWidgetPayload,
      
      args: {
        query: {
          type: GraphQLString,
          defaultValue: '',
        },
      },
      
      resolve: () => getViewer('boba'),
      //resolve: (obj, {query}) => searchWidgets(query),
      //resolve: () => {},
    },
    */
  },
});

export const schema = new GraphQLSchema({
  query: Root,
});
