import React from 'react';
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import Images from '../Styles/Images';
import Colors from '../Styles/Colors';

const { width, height } = Dimensions.get('window');

const Splash = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.backgroundWrapper}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.Black} />
      <View style={styles.mainContainer}>
        <Image source={Images.VectorLeft} style={styles.VectorLeft} />
        <Image source={Images.EllipseRound} style={styles.EllipseRound} />
        <Image source={Images.EllipseRound} style={styles.EllipseRoundOne} />
        <Image source={Images.EllipseRound} style={styles.EllipseRoundTwo} />
        <Image source={Images.EllipseRight} style={styles.EllipseRight} />
        <Image source={Images.Vector} style={styles.logoIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            <Text style={styles.line}>Investing in Crypto{'\n'}</Text>
            <Text style={styles.lineSimple}>Simplified.</Text>
          </Text>
          <Text style={styles.subtitle}>Web3 and transparent hassle-free{"\n"} DEFI investing option.</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Onboard')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: height * 0.55,  
    left: width * 0.07,
    width: width * 0.9,
    height: height * 0.25, // Increased height to accommodate text movement
  },
  title: {
    fontFamily: 'Inter',
    fontSize: width * 0.07,
    fontWeight: '600',
    lineHeight: width * 0.08,
    letterSpacing: -0.02,
    textAlign: 'center',
    color: '#000000',
    marginTop: height * 0.08, // Added margin to move the text down
  },
  line: {
    fontWeight: '600',
    fontSize: width * 0.09,
    lineHeight: width * 0.11,
    letterSpacing: -0.02,
    textAlign: 'center',
    color: '#000000' ,
  },
  lineSimple: {
    fontSize: width * 0.09,
    fontWeight: '600',
    lineHeight: width * 0.11,
    letterSpacing: -0.02,
    textAlign: 'center',
    color: '#000000' ,
    marginBottom: height * 0.03,
  },
  subtitle: {
    fontSize: width * 0.04,
    fontWeight: '500',
    lineHeight: width * 0.05,
    letterSpacing: -0.02,
    textAlign: 'center',
    color: '#000000',
    marginTop: height * 0.03,
    marginBottom: height * 0.03,
  },
  logoIcon: {
    width: width * 1,
    height: height * 0.8,
    position: 'absolute',
    bottom: height * 0.0,
    left: width * 0.5,
    transform: [{ translateX: -width * 0.5 }],
  },
  buttonContainer: {
    backgroundColor: '#000000',
    borderRadius: width * 0.05,
    width: width * 0.35,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02, // Increased margin to move the button down
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: width * 0.04,
    textAlign: 'center',
  },
  VectorLeft: {
    position: 'absolute',
    width: width * 0.7,
    height: height * 0.6,
    top: -height * 0.2,
    left: -width * 0.4,
    transform: [{ rotate: '20deg' }],
  },
  EllipseRight: {
    width: width * 0.2,
    height: width * 0.4, // Adjusted to make it oval
    top: -height * 0.1, 
    left: width * 0.8,
    position: 'absolute',
    transform: [{ rotate: '360deg' }], 
  },
  EllipseRound: {
    width: width * 0.05,
    height: width * 0.05,
    top: height * 0.09,
    left: width * 0.45,
    position: 'absolute',
    backgroundColor: '#FFD300',
    borderRadius: width * 0.025,
  },
  EllipseRoundOne: {
    width: width * 0.05,
    height: width * 0.05,
    top: height * 0.22,
    left: width * 0.4,
    position: 'absolute',
    backgroundColor: '#FFD300',
    borderRadius: width * 0.025,
  },
  EllipseRoundTwo: {
    width: width * 0.05,
    height: width * 0.05,
    top: height * 0.38,
    left: width * 0.10,
    position: 'absolute',
    backgroundColor: '#FFD300',
    borderRadius: width * 0.025,
  },
});

export default Splash;
