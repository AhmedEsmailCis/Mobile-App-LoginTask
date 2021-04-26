import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  BackHandler,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
function HomeScreen() {
  return (
    <View style={styles.view}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text style={styles.collection}>HomeScreen</Text>
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.authRdx.user,
  };
};
export default connect(mapStateToProps,null)(HomeScreen);
//styles
const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  collection: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
