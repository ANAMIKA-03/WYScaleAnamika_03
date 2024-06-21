import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Colors from "../../Styles/Colors";
import Images from "../../Styles/Images";
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const HomeExplore = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.backgroundWrapper}>
      <StatusBar barStyle={"light-content"} backgroundColor={Colors.Black} />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainContainer}>
          {/* Header Section */}
          <Text style={styles.headerText}>Hi, John</Text>
          <View style={styles.subHeaderContainer}>
            <LinearGradient
              colors={["#A2D254", "#FFD300"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientBackground}
            >
              <Text style={styles.subHeaderText}>Explore</Text>
            </LinearGradient>
            <Text style={styles.subHeaderTextOne} onPress={() => navigation.navigate('HomeMarket')}>Markets</Text>
            {/* <Text style={styles.subHeaderTextTwo}>Portfolio</Text> */}
            <Text style={styles.subHeaderTextThree}>More</Text>
          </View>

          {/* Content Section */}
          <View style={styles.rectangleBox}></View>

          <View style={styles.contentContainer}>
            <Text style={styles.headerTextOne}>
              A good article title here Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text style={styles.subText}>crypto.news | 1 day ago</Text>
          </View>

          {Array(4).fill().map((_, index) => (
            <View style={styles.secondTextContainer} key={index}>
              <View style={styles.textContainer}>
                <Text style={styles.secondText}>
                  A good article title here Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Text style={styles.thirdText}>crypto.news | 1 day ago</Text>
              </View>
              <View style={styles.secondRectangle}></View>
            </View>
          ))}

          <View style={{ paddingBottom: 120 }}></View>
        </View>
      </ScrollView>
      <View style={styles.bottomRectangle}>
        <View style={styles.imageContainer}>
          <Image
            source={Images.Icons}
            style={styles.bottomImage}
          />
          <View style={styles.ellipse}></View>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={Images.Icons4}
            style={styles.iconImage}
          />
          <Text style={styles.iconText}>Staking</Text>
        </View>

        <View style={styles.iconContainerOne}>
          <Image
            source={Images.Icons3}
            style={styles.iconImageOne}
          />
          <Text style={styles.iconTextOne}>Fixed Returns</Text>
        </View>

        <View style={styles.iconContainerTwo}>
          <Image
            source={Images.Icons2}
            style={styles.iconImageTwo}
          />
          <Text style={styles.iconTextTwo}>Loans</Text>
        </View>

        <View style={styles.iconContainerThree}>
          <Image
            source={Images.Icons1}
            style={styles.iconImageThree}
          />
          <Text style={styles.iconTextThree}>Strategies</Text>
        </View>

      </View>
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
  },
  mainContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: StatusBar.currentHeight || 10,
  },
  headerText: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.05,
    fontWeight: "500",
    lineHeight: screenWidth * 0.07,
    textAlign: "left",
    color: "#FFFFFF",
    marginTop: screenHeight * 0.01,
  },
  headerTextOne: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.03,
    fontWeight: "500",
    lineHeight: screenWidth * 0.04,
    textAlign: "left",
    color: "#FFFFFF",
    width: screenWidth * 0.9,
    marginBottom: screenHeight * 0.01,
  },
  subText: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.025,
    fontWeight: "500",
    lineHeight: screenWidth * 0.04,
    textAlign: "left",
    color: "#575757",
    width: screenWidth * 0.4,
    marginBottom: screenHeight * 0.01,
  },
  subHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: screenWidth * 0.9,
    height: screenHeight * 0.04,
    borderRadius: 7,
    backgroundColor: "#1E1E1E",
    marginTop: screenHeight * 0.01,
    paddingHorizontal: screenWidth * 0.02,
  },
  subHeaderText: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.025,
    fontWeight: "500",
    lineHeight: screenWidth * 0.04,
    textAlign: "center",
    color: "#FFFFFF",
  },
  subHeaderTextOne: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.025,
    fontWeight: "500",
    lineHeight: screenWidth * 0.04,
    textAlign: "center",
    color: "#FFFFFF",
  },
  subHeaderTextTwo: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.025,
    fontWeight: "500",
    lineHeight: screenWidth * 0.04,
    textAlign: "center",
    color: "#FFFFFF",
  },
  subHeaderTextThree: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.025,
    fontWeight: "500",
    lineHeight: screenWidth * 0.04,
    textAlign: "center",
    color: "#FFFFFF",
  },
  rectangleBox: {
    backgroundColor: "#1E1E1E",
    borderRadius: 7,
    marginBottom: screenHeight * 0.03,
    marginTop: screenHeight * 0.03,
    width: screenWidth * 0.9,
    height: screenHeight * 0.2,
  },
  contentContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: screenHeight * 0.01,
    alignItems: "flex-start",
  },
  secondTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: screenHeight * 0.02,
  },
  secondRectangle: {
    width: screenWidth * 0.18,
    height: screenWidth * 0.18,
    backgroundColor: "#1E1E1E",
    borderRadius: 7,
    marginLeft: screenWidth * 0.02,
  },
  textContainer: {
    flex: 1,
  },
  secondText: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.03,
    fontWeight: "500",
    lineHeight: screenWidth * 0.04,
    textAlign: "left",
    color: "#FFFFFF",
    marginRight: screenWidth * 0.02,
  },
  thirdText: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.025,
    fontWeight: "500",
    lineHeight: screenWidth * 0.04,
    textAlign: "left",
    color: "#575757",
  },
  bottomRectangle: {
    width: "100%",
    height: screenHeight * 0.1,
    backgroundColor: "#1E1E1E",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    width: screenWidth * 0.15,
    height: screenWidth * 0.15,
    top: -screenHeight * 0.05,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomImage: {
    width: screenWidth * 0.1,
    height: screenWidth * 0.065,
    resizeMode: "contain",
    zIndex: 1,
  },
  ellipse: {
    position: "absolute",
    width: screenWidth * 0.15,
    height: screenHeight * 0.05,
    borderRadius: screenWidth * 0.075,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderColor: "#1E1E1E",
    backgroundColor: "#1E1E1E",
    top: screenHeight * 0.005,
    left: screenWidth * 0.005,
  },
  iconContainer: {
    alignItems: "center",
    position: "absolute",
    width: screenWidth * 0.1,
    height: screenHeight * 0.05,
    top: screenHeight * 0.015,
    left: screenWidth * 0.1,
  },
  iconImage: {
    width: screenWidth * 0.04,
    height: screenHeight * 0.02,
    resizeMode: "cover",
    top: screenHeight * 0.005,
    left: screenWidth * 0.005,
  },
  iconText: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.025,
    fontWeight: "400",
    lineHeight: screenWidth * 0.07,
    color: "#FFFFFF",
    textAlign: "center",
  },
  iconContainerOne: {
    alignItems: "center",
    position: "absolute",
    width: screenWidth * 0.15,
    height: screenHeight * 0.05,
    top: screenHeight * 0.015,
    left: screenWidth * 0.25,
  },
  iconImageOne: {
    width: screenWidth * 0.04,
    height: screenHeight * 0.02,
    top: screenHeight * 0.005,
    left: screenWidth * 0.005,
  },
  iconTextOne: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.024,
    fontWeight: "400",
    lineHeight: screenWidth * 0.07,
    color: "#FFFFFF",
    textAlign: "center",
    flexWrap: 'wrap',
  },
  iconContainerTwo: {
    alignItems: "center",
    position: "absolute",
    width: screenWidth * 0.1,
    height: screenHeight * 0.05,
    top: screenHeight * 0.015,
    left: screenWidth * 0.65,
  },
  iconImageTwo: {
    width: screenWidth * 0.04,
    height: screenHeight * 0.02,
    top: screenHeight * 0.005,
    left: screenWidth * 0.005,
  },
  iconTextTwo: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.025,
    fontWeight: "400",
    lineHeight: screenWidth * 0.07,
    color: "#FFFFFF",
    textAlign: "center",
  },
  iconContainerThree: {
    alignItems: "center",
    position: "absolute",
    width: screenWidth * 0.15,
    height: screenHeight * 0.05,
    top: screenHeight * 0.015,
    left: screenWidth * 0.8,
  },
  iconImageThree: {
    width: screenWidth * 0.04,
    height: screenHeight * 0.02,
    top: screenHeight * 0.005,
    left: screenWidth * 0.005,
  },
  iconTextThree: {
    fontFamily: "Inter",
    fontSize: screenWidth * 0.025,
    fontWeight: "400",
    lineHeight: screenWidth * 0.07,
    color: "#FFFFFF",
    textAlign: "center",
  },
  gradientBackground: {
    width: screenWidth * 0.2,
    height: screenHeight * 0.04,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeExplore;
