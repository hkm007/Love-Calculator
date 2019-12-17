import React from 'react';
import Displaylove from './components/Displaylove'
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    fname: '',
    sname: '',
    result: 'Loading...'
  };

  calc() {
    //console.log("pressed");
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`, {
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
	      "x-rapidapi-key": "paste your api key"
      }
    })
    .then(res => res.json())
    .then(res2 => {
      console.log(res2)
      this.setState({
        result: res2
      })
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love Calculator"
            style={{ alignItems:"center" }}
          />
        </Appbar.Header>
        <TextInput
          label='Person 1'
          value={this.state.fname}
          onChangeText={fname => this.setState({ fname })}
        />
        <TextInput
          label='Person 2'
          value={this.state.sname}
          onChangeText={sname => this.setState({ sname })}
        />
        <Button 
          mode="contained" 
          onPress={this.calc.bind(this)}>
          Calculate
        </Button>

        <Displaylove data={this.state.result} />
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
