import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
function Button(props) {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.TouchableOpacityStyle}
        onPress={props.onPress}>
        <Text style={styles.text}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default  Button ;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#7C37A6',
    margin: 20,
    padding: 12,
    borderRadius: 10,
  },
  TouchableOpacityStyle: {
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});
