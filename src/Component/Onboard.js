import React from 'react';
import { SafeAreaView, StatusBar, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../Styles/Colors';

const { width, height } = Dimensions.get('window');

const Onboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.backgroundWrapper}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.Black} />
      <View style={styles.mainContainer}>
        <Text style={styles.line}>Firstly, tell us about yourself?</Text>
        <Text style={styles.lineTwo}>
          Choose the investor type that suits you best{'\n'}
          for a personalized WYScale experience.
        </Text>
        <View style={styles.rectangularDiv}>
          <View style={styles.nestedRectangle}></View>
          <View style={styles.textContainer}>
            <Text style={styles.nestedTextOneF}>Financial Advisor</Text>
            <Text style={styles.nestedTextTwo}>I’m looking for investments for my clients, timely insights, and to connect with my relationship manager.</Text>
          </View>
        </View>
        <View style={styles.rectangularDivOne}>
          <View style={styles.nestedRectangle}></View>
          <View style={styles.textContainer}>
            <Text style={styles.nestedTextOneI}>Independent Investor</Text>
            <Text style={styles.nestedTextTwoo}>I’m looking for investment solutions and educating myself.</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <LinearGradient
            colors={['#A2D254', '#FFD300']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundWrapper: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainContainer: {
    flex: 1,
    marginTop: height * 0.1,
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  line: {
    fontFamily: 'Inter',
    fontSize: width * 0.05,
    fontWeight: '500',
    lineHeight: width * 0.075,
    textAlign: 'center',
    color: "#FFFFFF",
  },
  lineTwo: {
    fontFamily: 'Inter',
    fontSize: width * 0.035,
    fontWeight: '400',
    lineHeight: width * 0.05,
    textAlign: 'center',
    color: "#575757",
    marginTop: height * 0.01,
  },
  rectangularDiv: {
    width: width * 0.9,
    height: height * 0.2,
    backgroundColor: '#1D1D1D',
    borderRadius: 15,
    marginTop: height * 0.03,
    flexDirection: 'row',
    paddingLeft: width * 0.07,
    alignItems: 'center',
  },
  rectangularDivOne: {
    width: width * 0.9,
    height: height * 0.2,
    backgroundColor: '#1D1D1D',
    borderRadius: 15,
    marginTop: height * 0.03,
    flexDirection: 'row',
    paddingLeft: width * 0.07,
    alignItems: 'center',
  },
  nestedRectangle: {
    width: width * 0.17,
    height: height * 0.12,
    backgroundColor: '#575757',
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: width * 0.06,
    justifyContent: 'center',
  },
  nestedTextOneF: {
    fontFamily: 'Inter',
    fontSize: width * 0.035,
    fontWeight: '600',
    lineHeight: width * 0.05,
    color: '#FFFFFF',
    textAlign: 'left',
  },
  nestedTextTwo: {
    fontFamily: 'Inter',
    fontSize: width * 0.03,
    fontWeight: '500',
    lineHeight: width * 0.045,
    textAlign: 'left',
    color: '#575757',
    marginTop: height * 0.01,
  },
  nestedTextOneI: {
    fontFamily: 'Inter',
    fontSize: width * 0.035,
    fontWeight: '600',
    lineHeight: width * 0.05,
    textAlign: 'left',
    color: '#FFFFFF',
  },
  nestedTextTwoo: {
    fontFamily: 'Inter',
    fontSize: width * 0.03,
    fontWeight: '500',
    lineHeight: width * 0.045,
    textAlign: 'left',
    color: '#575757',
    marginTop: height * 0.01,
  },
  buttonContainer: {
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: height * 0.009,
    paddingHorizontal: width * 0.0,
    marginTop: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
  },
  buttonText: {
    color: '#0E0E0E',
    fontWeight: "600",
    fontSize: width * 0.045,
    textAlign: 'center',
  },
});

export default Onboard;
