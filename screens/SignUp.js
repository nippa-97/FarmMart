import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

function signUp(pPhone, pPassword) {
  // const dbRef = firebase.firestore().collection("users");
  // dbRef
  //   .add({
  //     phone: pPhone,
  //     password: pPassword,
  //   })
  //   .then((res) => {
  //     console.log(res.id);
  //   });

  firebase
    .firestore()
    .collection("Users")
    .doc(pPhone)
    .set({
      password: pPassword,
    })
    .then(() => {
      console.log("User added!");
    });
}

export default class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    Division: "",
    phone_number: "",
    ConfirmPassword: "",
    District: "",
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const {
      username,
      password,
      Division,
      phone_number,
      ConfirmPassword,
      District,
    } = this.state;
    try {
      // here place your signup logic
      console.log("user successfully signed up!: ", success);
    } catch (err) {
      console.log("error signing up: ", err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 35, fontWeight: "bold", color: "#fb5b5a" }}>
            Create
          </Text>
          <Text style={{ fontSize: 35, fontWeight: "bold", color: "#fb5b5a" }}>
            Account
          </Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("phone_number", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("username", val)}
        />

        <DropDownPicker
          items={[
            { label: "Ampara", value: "Ampara" },
            { label: "Anuradhapura", value: "Anuradhapura" },
            { label: "Badulla", value: "Badulla" },
            { label: "Batticaloa", value: "Batticaloa" },
            { label: "Colombo", value: "Colombo" },
            { label: "Galle", value: "Galle" },
            { label: "Gampaha", value: "Gampaha" },
            { label: "Hambantota", value: "Hambantota" },
            { label: "Jaffna", value: "Jaffna" },
            { label: "Kalutara", value: "Kalutara" },
            { label: "Kandy", value: "Kandy" },
            { label: "Kegalle", value: "Kegalle" },
            { label: "Kilinochchi", value: "Kilinochchi" },
            { label: "KurunegalaMannar", value: "KurunegalaMannar" },
            { label: "Matale", value: "Matale" },
            { label: "Matara", value: "Matara" },
            { label: "Moneragala", value: "Moneragala" },
            { label: "Mullaitivu", value: "Mullaitivu" },
            { label: "NuwaraEliya", value: "NuwaraEliya" },
            { label: "Polonnaruwa", value: "Polonnaruwa" },
            { label: "Puttalam", value: "Puttalam" },
            { label: "Ratnapura", value: "Ratnapura" },
            { label: "Trincomalee", value: "Trincomalee" },
            { label: "Vavuniya", value: "Vavuniya" },
          ]}
          style={{ borderColor: "#ff8080", borderWidth: 2 }}
          defaultIndex={0}
          placeholder="Select District"
          containerStyle={{
            width: 370,
            height: 50,
            marginLeft: 5,
            marginBottom: 15,
            marginTop: 15,
          }}
          dropDownStyle={{ backgroundColor: "white", borderColor: "black" }}
          placeholderStyle={{
            fontWeight: "bold",
            padding: 10,
            color: "white",
            borderRadius: 5,
          }}
          labelStyle={{
            color: "white",
            backgroundColor: "#06283B",
            padding: 10,
            borderRadius: 30,
            width: 300,
          }}
          onChangeItem={(item) => console.log(item.label, item.value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Division"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("Division", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("Password", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("Confirmpassword", val)}
        />

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 40,
          }}
        >
          <Button title="Sign Up" onPress={this.signUp} color="#fb5b5a" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 380,
    height: 55,
    backgroundColor: "#06283B",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#ff8080",
    marginBottom: 20,
    marginTop: 20,
  },
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "space-around",
    padding: Platform.OS === "android" ? 35 : 0,
    backgroundColor: "#383838",
  },
});
