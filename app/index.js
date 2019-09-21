import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, ActivityIndicator} from 'react-native';

import * as actions from './redux/actions/index';
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    const {quotes, loadQuote} = this.props;

    return (
      <View style={styles.container}>
        {quotes.isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Text style={{fontSize: 24, textAlign: 'center'}}>
              {quotes.quote}
            </Text>
            <Button title="Load Quote" onPress={loadQuote} />
          </View>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadQuote: () => dispatch(actions.loadQuote()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
