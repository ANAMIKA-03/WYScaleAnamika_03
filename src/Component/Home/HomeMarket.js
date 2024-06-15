import React from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Colors from "../../Styles/Colors";
import Images from "../../Styles/Images";
import LinearGradient from 'react-native-linear-gradient';

const HomeMarket = ({ navigation }) => {
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
            <Text style={styles.subHeaderTextOne}>Markets</Text>
            <Text style={styles.subHeaderTexttwo}>Portfolio</Text>
            <Text style={styles.subHeaderTextthree}>More</Text>
          </View>

          {/* Content Section */}
          {/* <View style={styles.rectangleBox}></View>

          <View style={styles.contentContainer}>
            <Text style={styles.HeaderTextOne}>
              a good article title here Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text style={styles.subText}>crypto.news | 1 day ago</Text>
          </View>

          <View style={styles.secondTextContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.secondText}>
                a good article title here Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text style={styles.thirdText}>crypto.news | 1 day ago</Text>
            </View>
            <View style={styles.secondRectangle}></View>
          </View>

          <View style={styles.secondTextContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.secondText}>
                a good article title here Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text style={styles.thirdText}>crypto.news | 1 day ago</Text>
            </View>
            <View style={styles.secondRectangle}></View>
          </View>

          <View style={styles.secondTextContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.secondText}>
                a good article title here Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text style={styles.thirdText}>crypto.news | 1 day ago</Text>
            </View>
            <View style={styles.secondRectangle}></View>
          </View>

          <View style={styles.secondTextContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.secondText}>
                a good article title here Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text style={styles.thirdText}>crypto.news | 1 day ago</Text>
            </View>
            <View style={styles.secondRectangle}></View>
          </View>

          <View style={{ paddingBottom: 120 }}></View> */}
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

        <View style={styles.iconContainerone}>
          <Image
            source={Images.Icons3}
            style={styles.iconImageone}
          />
          <Text style={styles.iconTextone}>Fixed Returns</Text>
        </View>

        <View style={styles.iconContainertwo}>
          <Image
            source={Images.Icons2}
            style={styles.iconImagetwo}
          />
          <Text style={styles.iconTexttwo}>Loans</Text>
        </View>

        <View style={styles.iconContainerthree}>
          <Image
            source={Images.Icons1}
            style={styles.iconImagethree}
          />
          <Text style={styles.iconTextthree}>Strategies</Text>
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
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight || 10,
  },
  headerText: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 28,
    textAlign: "left",
    color: "#FFFFFF",
    marginTop: 10,
  },
  HeaderTextOne: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "left",
    color: "#FFFFFF",
    width: 254,
    height: 36,
    paddingHorizontal: 3,
    paddingTop: 1,
    marginBottom: 10,
  },
  subText: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "left",
    color: "#575757",
    width: 114,
    height: 18,
    paddingHorizontal: 1,
    paddingTop: 1,
    marginBottom: 10,
  },
  subHeaderContainer: {
    width: 320,
    height: 28,
    borderRadius: 7,
    backgroundColor: "#1E1E1E",
    justifyContent: "center",
    marginTop: 10,
  },
  subHeaderText: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "center",
    color: "#FFFFFF",
    width: 36,
    height: 18,
    top: 1,
    left: 4,    
  },
  subHeaderTextOne: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "center",
    color: "#FFFFFF",
    width: 39,
    height: 18,
    top: 7,
    left: 108,
    },
  subHeaderTexttwo: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "center",
    color: "#FFFFFF",
    width: 41,
    height: 18,
    top: -10,
    left: 199,
    },
  subHeaderTextthree: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "center",
    color: "#FFFFFF",
    width: 25,
    height: 18,
    top: -28,
    left: 290,
  },
  rectangleBox: {
    backgroundColor: "#1E1E1E",
    borderRadius: 7,
    marginBottom: 30,
    width: 320,
    height: 129,
    top: 18,
  },
  contentContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    alignItems: "flex-start",
  },
  secondTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  secondRectangle: {
    width: 72,
    height: 72,
    backgroundColor: "#1E1E1E",
    borderRadius: 7,
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
  },
  secondText: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "left",
    color: "#FFFFFF",
    marginRight: 10,
  },
  thirdText: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "left",
    color: "#575757",
  },
  bottomRectangle: {
    width: "100%",
    height: 70,
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
    width: 56,
    height: 56,
    top: -27,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomImage: {
    width: 40,
    height: 26,
    resizeMode: "contain", 
    zIndex: 1,
  },
  ellipse: {
    position: "absolute",
    width: 56,
    height: 28,
    borderRadius: 28,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderColor: "#1E1E1E",
    backgroundColor: "#1E1E1E",
    top: 2,
    left: 1,
  },
  iconContainer: {
    alignItems: "center",
    position: "absolute",
    width: 32,
    height: 38,
    top: 11,
    left: 27,
  },
  iconImage: {
    width: 14,
    height: 15,
    resizeMode: "cover",
    top: 4,
    left: 1.69,
  },
  iconText: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 18,
    color: "#FFFFFF",
    width: 48,
    height: 18,
    top: 10,
    left: 3
  },
  iconContainerone: {
    alignItems: "center",
    position: "absolute",
    width: 65,
    height: 38,
    top: 13,
    left: 92,
  },
  iconImageone: {
    width: 14.63,
    height: 12.38,
    top: 2.81,
    left: 1.69,
  },
  iconTextone: {
    width: 65,
    height: 18,
    top: 10,
    left: 13,
    fontFamily: "Inter",
    fontSize: 10,
    fontweight: 400,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  iconContainertwo: {
    alignItems: "center",
    position: "absolute",
    top: 13,
    width: 29,
    height: 38,
    top: 13,
    left: 246,
  },
  iconImagetwo: {
    width: 16.88,
    height: 13.5,
    top: 1.69,
    left: 1.69,
  },
  iconTexttwo: {
    width: 65,
    height: 18,
    top: 10,
    left: 13,
    fontFamily: "Inter",
    fontSize: 10,
    fontweight: 400,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  iconContainerthree: {
    alignItems: "center",
    position: "absolute",
    top: 13,
    width: 49,
    height: 38,
    top: 13,
    left: 305
  },
  iconImagethree: {
    width: 13.5,
    height: 13.5,
    top: 2.25,
    left: 2.25,
  },
  iconTextthree: {
    width: 65,
    height: 18,
    top: 10,
    left: 13,
    fontFamily: "Inter",
    fontSize: 10,
    fontweight: 400,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  gradientBackground: {
    width: 73,
    height: 28,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 1,
    width: 79,
    height: 25,
    top: 26,
    left: 10,
  },
});

export default HomeMarket;
