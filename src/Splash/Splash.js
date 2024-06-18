import React from 'react';
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Images from '../Styles/Images';
import Colors from '../Styles/Colors';

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
            <Text style={styles.line}>Investing in crypto{'\n'}</Text>
            <Text style={styles.line}>mutual funds.{'\n'}</Text>
            <Text style={styles.lineSimple}>Simplified.</Text>
          </Text>
          <Text style={styles.subtitle}>Web3 and transparent hassle-free DEFI investing option.</Text>
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
    top: 445,  
    left: 26,
    width: 338,
    height: 132,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 33,
    letterSpacing: -0.02,
    textAlign: 'center',
    color: '#000000',
  },
  line: {
    fontWeight: '600',
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: -0.02,
    textAlign: 'center',
    color: '#000000' ,
  },
  lineSimple: {
    fontSize: 36,
    fontWeight: '600',
    lineHeight: 44,
    letterSpacing: -0.02,
    textAlign: 'center',
    color: '#000000' ,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: -0.02,
    textAlign: 'center',
    color: '#000000',
    marginTop: 25,
    marginBottom: 20
  },
  logoIcon: {
    width: 550,
    height: 500,
    position: 'absolute',
    bottom: 20,
    left: '83%',
    transform: [{ translateX: -299 }],
  },
  buttonContainer: {
    backgroundColor: '#000000',
    borderRadius: 18,
    width: 125,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  VectorLeft: {
    position: 'absolute',
    width: 255.65,
    height: 408.39,
    top: -150,
    left: -150,
    transform: [{ rotate: '15deg' }],
  },
  EllipseRight: {
    width: 76,
    height: 76,
    top: 0,
    left: 340,
    position: 'absolute',
    transform: [{ rotate: '1deg' }],
  },
  EllipseRound: {
    width: 18,
    height: 18,
    top: 40,
    left: 169,
    position: 'absolute',
    backgroundColor: '#FFD300',
    borderRadius: 9,
  },
  EllipseRoundOne: {
    width: 18,
    height: 18,
    top: 140,
    left: 155,
    position: 'absolute',
    backgroundColor: '#FFD300',
    borderRadius: 9,
  },
  EllipseRoundTwo: {
    width: 18,
    height: 18,
    top: 249,
    left: 49,
    position: 'absolute',
    backgroundColor: '#FFD300',
    borderRadius: 9,
  },

});

export default Splash;
