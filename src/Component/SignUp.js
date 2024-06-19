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
  Dimensions,
} from "react-native";
import Colors from "../Styles/Colors";
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
            style={[styles.button, { marginBottom: windowHeight * 0.02 }]}
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
    paddingVertical: windowHeight * 0.02,
  },
  mainContainer: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: windowWidth * 0.05,
  },
  headerText: {
    fontFamily: "Inter",
    fontSize: windowWidth * 0.06,
    fontWeight: "500",
    lineHeight: windowHeight * 0.04,
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: windowHeight * 0.04,
    marginTop: windowHeight * 0.04,

  },
  label: {
    fontFamily: "Inter",
    fontSize: windowWidth * 0.035,
    fontWeight: "500",
    lineHeight: windowHeight * 0.025,
    textAlign: "left",
    color: "#575757",
    width: "100%",
    paddingRight: windowWidth * 0.01,
    paddingVertical: windowHeight * 0.01,
    marginTop: windowHeight * 0.00,
    borderRadius: 5,
  },
  input: {
    width: "100%",
    height: windowHeight * 0.05,
    backgroundColor: "#1D1D1D",
    color: "#FFFFFF",
    borderRadius: 8,
    paddingLeft: windowWidth * 0.04,
    fontFamily: "Inter",
    fontSize: windowWidth * 0.035,
    fontWeight: "400",
    lineHeight: windowHeight * 0.025,
    marginTop: windowHeight * 0.00,
  },
  inputUsername: {
    width: "100%",
    height: windowHeight * 0.05,
    backgroundColor: "#1D1D1D",
    borderRadius: 8,
    paddingLeft: windowWidth * 0.04,
    fontFamily: "Inter",
    fontSize: windowWidth * 0.035,
    fontWeight: "400",
    lineHeight: windowHeight * 0.025,
    marginTop: windowHeight * 0.00,
    color: "#FFFFFF"
  },
  passwordHint: {
    fontFamily: "Inter",
    fontSize: windowWidth * 0.035,
    fontWeight: "400",
    lineHeight: windowHeight * 0.025,
    textAlign: "left",
    color: "#575757",
    width: "100%",
    paddingRight: windowWidth * 0.01,
    paddingVertical: windowHeight * 0.01,
    marginTop: windowHeight * 0.01,
    borderRadius: 5,
  },
  passwordspace: {
    fontFamily: "Inter",
    fontSize: windowWidth * 0.035,
    fontWeight: "500",
    color: "#575757",
    width: "100%",
    marginTop: windowHeight * 0.007,
    marginBottom: windowHeight * 0.003,
    borderRadius: 5,
    textAlign: "center",
  },
  button: {
    width: "100%",
    height: windowHeight * 0.05,
    padding: windowWidth * 0.01,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#575757",
    marginTop: windowHeight * 0.01,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Inter",
    fontSize: windowWidth * 0.035,
    fontWeight: "600",
    lineHeight: windowHeight * 0.025,
    color: "#575757",
    textAlign: "center",
  },
  signUpButton: {
    width: windowWidth * 0.8, 
    height: windowHeight * 0.04,
    borderRadius: 8, 
    borderWidth: 1, 
    paddingVertical: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.03,
    marginTop: windowHeight * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButtonText: {
    fontFamily: "Inter",
    color: "#0E0E0E",
    fontWeight: "bold",
    fontSize: windowWidth * 0.04,
    textAlign: "center",
  },
  signInButton: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.03,
    justifyContent: "center",
    alignItems: "center",
  },
  alreadyHaveAccountText: {
    fontFamily: "Inter",
    fontSize: windowWidth * 0.035,
    fontWeight: "600",
    lineHeight: windowHeight * 0.025,
    color: "#575757",
    textAlign: "center",
  },
  signInText: {
    fontFamily: "Inter",
    fontSize: windowWidth * 0.035,
    fontWeight: "600",
    lineHeight: windowHeight * 0.025,
    color: "#FFD300",
    textAlign: "center",
  },
  agreementTextContainer: {
    width: "100%",
    marginTop: windowHeight * 0.05,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  agreementText: {
    fontFamily: "Inter",
    fontSize: windowWidth * 0.02,
    fontWeight: "400",
    lineHeight: windowHeight * 0.018,
    color: "#575757",
  },
  spanText: {
    fontFamily: "Inter",
    fontSize: windowWidth * 0.02,
    fontWeight: "400",
    lineHeight: windowHeight * 0.018,
    color: "#FFD300",
  },
  spanTextOne: {
    fontFamily: "Inter",
    fontSize: windowWidth * 0.02,
    fontWeight: "400",
    lineHeight: windowHeight * 0.018,
    color: "#575757",
  },
  buttonContainer: {
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.03,
    marginTop: windowHeight * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: windowHeight * 0.04,
  },
  signInButtonContainer: {
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderBottomWidth: 0,
    paddingVertical: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.03,
    marginTop: windowHeight * 0.029,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.9, 
    height: windowHeight * 0.05, 
  },
  signInButtonText: {
    fontSize: windowWidth * 0.039,
    fontWeight: "600",
    lineHeight: windowHeight * 0.019,
    color: "#575757",
    textAlign: "center",
  },
  signInTextContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: windowHeight * 0.09,
  },
});

export default SignUp;
