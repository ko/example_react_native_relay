import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import Relay from 'react-relay';

class client extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.relay.setVariables({query:"china"});
  }

  render() {
    console.log(this.props.viewer.searchWidgets);

    return (
      <View>
        <Text>hi</Text>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    paddingTop: typeof StatusBar.currentHeight === 'undefined' ? 30 : StatusBar.currentHeight,
    paddingBottom: 50,
    backgroundColor: '#81c04d',
  },
});

export default Relay.createContainer(client, {
  initialVariables: {
    query: 'nodejs',
  },
  fragments: {
    viewer: variables => Relay.QL`
      fragment on Viewer {
        searchWidgets(query:$query) {
          myName 
        }
      }
    `,
  }
});
