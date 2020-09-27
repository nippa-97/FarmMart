import React from 'react'
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

export default class SignUp extends React.Component {
  state = {
    username: '', password: '', email: '', phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (

      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
          <Text style={{fontSize:35,fontWeight:'bold',paddingTop:20,paddingLeft:20}}>Settings</Text>
                <View style={{flex:1 ,justifyContent:'center',alignItems:'center',padding:20,paddingTop:30,marginLeft:130}}>
        
        <Button
          title='Logout'
          onPress={this.signUp}
        />
      
        </View>
        </View>
      <Text style={styles.tet}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('username', val)}

      />
              <Text style={styles.tet}>Phone Number</Text>
          <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
  <Text style={styles.tet}>District</Text>
        <DropDownPicker
    items={[
        {label: 'Anuradapura', value: 'Anuradapura'},
        {label: 'shone', value: 'shone'},
    ]}
    defaultIndex={0}
    placeholder='Select District'
    containerStyle={{width:370,height: 50,marginLeft:15}}
    dropDownStyle={{backgroundColor: 'white'}}
    placeholderStyle={{
      fontWeight: 'bold',padding:10 ,color:'white',
      borderRadius:5
  }}
    labelStyle={{color:'white',backgroundColor:'#1696f2',padding:10,borderRadius:30,width:300}}
    onChangeItem={item => console.log(item.label, item.value)}
/>

                <Text style={styles.tet}>Division</Text>
        <TextInput
          style={styles.input}
          placeholder='Division'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('Division', val)}
        />


         <Text style={styles.tet}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('Password', val)}
        />
        <Text style={styles.tet}>Conform Password</Text>
          <TextInput
          style={styles.input}
          placeholder='Conform Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('Conformpassword', val)}
        />
 <View style={{    justifyContent: 'center',
    alignItems: 'center',padding:40}}>
        <Button
          
          title='Update'
          onPress={this.update}
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 370,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    paddingLeft:13,
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
  tet:{
    fontSize:25,
    fontStyle:'normal',
    marginLeft:20
    
  }
})