import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
      <View key ={this.props.keyval} style={styles.note}>
        {/* <Text style={styles.noteText} >{this.props.val.data}</Text> */}
        <Text style={styles.noteText} >{this.props.val.note}</Text>
      <TouchableOpacity onPress={this.deleteMethod} style={styles.noteDelete}/>

        
      </View>
    );
    
  }
 
}

const styles = StyleSheet.create({

  note:{
    position: 'relative',
    padding: 20,
    paddingRight:100,
    borderBottomWidth:2,
    borderBottomColor: '#ededed',

  },
  noteText:{
zIndex:100
  },
  noteDelete:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding:10,
    top:10,
    bottom:10,
    right: 10,
    left:10,
  },
  noteDeleteText:{
    color:'white'
  }

});
