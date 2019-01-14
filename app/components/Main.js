import React from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity,Alert } from 'react-native';
import Note from './Note';

export default class Main extends React.Component {
 constructor(props){
   super(props);
   this.state={
     noteArray:[],
     noteText: '',

   }
 }
//  
 
  render() {
    let notes = this.state.noteArray.map((val,key)=> {
      return <Note key={key} keyval={key} val={val} deleteMethod={()=> this.deleteNote(key)} />})


    return (
      <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>++++ NOTE ++++</Text>
            </View>

            <ScrollView style={styles.scrollContainer}>
              {notes}
            </ScrollView>

            <View style={styles.footer}>
                <TextInput value={this.state.noteText} placeholder="Masukan todo " style={styles.textInput} onChangeText={(noteText) =>this.setState({noteText})}/>
            </View>
            <TouchableOpacity  style={styles.addButton} onPress={this.addNote.bind(this)}>
            <Text style={styles.addButtonText}>
                +
            </Text>
            </TouchableOpacity>
      </View>
    );
  
  }
  addNote(){
    if (this.state.noteText == '') {
      Alert.alert(
        'Anda Belom memasukan text'
      )
    }else{
    if(this.state.noteArray){
      var d =new Date();
      this.state.noteArray.push({
        'date': d.getFullYear() + 
        '/' + (d.getMonth + 1) +
        '/' + d.getDate(),
        'note' : this.state.noteText
      });
      console.log('data masuk')
      this.setState({noteArray:this.state.noteArray})
      this.setState({noteText:''})
    }
   }
  }
 
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  header:{
    backgroundColor:'#E91E63',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:2,
    borderBottomColor: '#ddd'
  },
  textHeader:{
    color:'white',
    fontSize:18,
    padding:30
  },
  scrollContainer:{
    flex:1,
    marginBottom:100,
  },
  footer:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    left:0,
    zIndex:10,
  },
  textInput:{
    alignSelf:'stretch',
    color:'white',
    padding:30,
    backgroundColor:'#252525',
    borderTopWidth:2,
    borderTopColor:'#ededed',
  },
addButton:{
  position:'absolute',
  zIndex:11,
  right:10,
  bottom:90,
  backgroundColor:'#E91E63',
  width:50,
  height:50,
  borderRadius:50,
  alignItems:'center',
  justifyContent:'center'
},
addButtonText:{
  color:'white',
  fontSize:24
}
});
