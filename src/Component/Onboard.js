import React from 'react';
import { SafeAreaView, StatusBar, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../Styles/Colors';

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
            <Text style={styles.nestedTextTwoo}>I’m looking for investments solutions and educating myself.</Text>
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
    marginTop: 80,
    alignItems: 'center',
    position: 'relative',
  },
  line: {
    fontFamily: 'Inter',
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 30,
    textAlign: 'center',
    color: "#FFFFFF",
  },
  lineTwo: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    color: "#575757",
    marginTop: 10,
  },
  rectangularDiv: {
    width: 335,
    height: 147,
    backgroundColor: '#1D1D1D',
    borderRadius: 15,
    marginTop: 30,
    flexDirection: 'row',
    paddingLeft: 29,
    alignItems: 'center',

  },
  rectangularDivOne: {
    width: 335,
    height: 147,
    backgroundColor: '#1D1D1D',
    borderRadius: 15,
    marginTop: 30,
    flexDirection: 'row',
    paddingLeft: 29,
    alignItems: 'center',
  },
  nestedRectangle: {
    width: 60,
    height: 80,
    backgroundColor: '#575757',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  textContainer: {
    width: 185,
    height: 64,
    marginLeft: 25,
    justifyContent: 'center',
  },
  nestedTextOneF: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#FFFFFF',
    textAlign: 'left',
  },
  nestedTextTwo: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    textAlign: 'left',
    color: '#575757',
    marginTop: 8,
  },
  nestedTextOneI: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'left',
    color: '#FFFFFF',
  },
  nestedTextTwoo: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    textAlign: 'left',
    color: '#575757',
    marginTop: 8,
    textAlign: 'left',
  },
  buttonContainer: {
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 37,
  },
  buttonText: {
    color: '#0E0E0E',
    fontWeight: "600",
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Onboard;
