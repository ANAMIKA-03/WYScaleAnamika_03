import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Colors from "../Styles/Colors";
import LinearGradient from 'react-native-linear-gradient';

const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.backgroundWrapper}>
      <StatusBar barStyle={"light-content"} backgroundColor={Colors.Black} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.mainContainer}>
          <Text style={styles.headerText}>
            Greetings, fellow human!{"\n"} Let’s create your account
          </Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputUsername}
            placeholder="olivia@email.com"
            placeholderTextColor="#667085"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#667085"
            secureTextEntry
          />
          <Text style={styles.passwordHint}>Password should be at least 8 characters</Text>
          <Text style={styles.passwordHint}>Re-type password</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#667085"
            secureTextEntry
          />
           <TouchableOpacity onPress={() => console.log('Button pressed')}>
            <LinearGradient
              colors={['#A2D254', '#FFD300']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.signInButtonContainer}
            >
              <Text style={styles.signInButtonText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.passwordspace}>OR</Text>
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20 }]}
            onPress={() => console.log("Connect Wallet pressed")}
          >
            <Text style={styles.buttonText}>Connect Wallet</Text>
          </TouchableOpacity>
          <View style={styles.signInTextContainer}>
            <Text style={styles.alreadyHaveAccountText}>
            Already have an account?{" "}
            <Text style={styles.signInText} onPress={() => navigation.navigate('SignIn')}>Sign in</Text>
            </Text>
          </View>
          <View style={styles.agreementTextContainer}>
            <Text style={styles.agreementText}>
              By signing up you agree to terms and {"\n"}
              <Text style={styles.spanTextOne}>conditions</Text>{" "}
              and{" "}
              <Text style={styles.spanTextOne}>privacy policy.</Text> <Text style={styles.spanText}>Learn more</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  mainContainer: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  headerText: {
    fontFamily: "Inter",
    fontSize: 22,
    fontWeight: "500",
    lineHeight: 30,
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  label: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "left",
    color: "#575757",
    width: "100%",
    paddingRight: 7,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  input: {
    width: "100%",
    height: 44,
    backgroundColor: "#1D1D1D",
    color: "#FFFFFF",
    borderRadius: 8,
    paddingLeft: 15,
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    marginTop: 10,
  },
  inputUsername: {
    width: "100%",
    height: 44,
    backgroundColor: "#1D1D1D",
    borderRadius: 8,
    paddingLeft: 15,
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    marginTop: 10,
    color: "#FFFFFF"
  },
  passwordHint: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
    textAlign: "left",
    color: "#575757",
    width: "100%",
    paddingRight: 7,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  passwordspace: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "500",
    color: "#575757",
    width: "100%",
    marginTop: 7,
    marginBottom: 3,
    borderRadius: 5,
    textAlign: "center",
  },
  button: {
    width: "100%",
    height: 36,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#575757",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    color: "#575757",
    textAlign: "center",
  },
  signUpButton: {
    width: 320, 
    height: "auto",
    borderRadius: 8, 
    borderWidth: 1, 
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButtonText: {
    fontFamily: "Inter",
    color: "#0E0E0E",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  signInButton: {
    width: 224,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  alreadyHaveAccountText: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    color: "#575757",
    textAlign: "center",
  },
  signInText: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    color: "#FFD300",
    textAlign: "center",
  },
  agreementTextContainer: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  agreementText: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 18,
    color: "#575757",
  },
  spanText: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 18,
    color: "#FFD300",
  },
  spanTextOne: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 18,
    color: "#575757",
  },
  buttonContainer: {
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: 36,
  },
  signInButtonContainer: {
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderBottomWidth: 0,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 320, 
    height: 36, 
  },
  signInButtonText: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    color: "#575757",
    textAlign: "center",
  },
  signInTextContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default SignUp;
