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
            <Text style={styles.subHeaderTextTwo}>Portfolio</Text>
            <Text style={styles.subHeaderTextThree}onPress={() => navigation.navigate('HomeDashboard')}>More</Text>
          </View>

          {/* Table Section */}
          <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeaderText}>#</Text>
              <Text style={styles.tableHeaderText}>Market Cap</Text>
              <Text style={styles.tableHeaderText}>Price</Text>
              <Text style={styles.tableHeaderText}>24h %</Text>
            </View>
            <View style={styles.tableRow1}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.Vectordown}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextRed}>0.65%</Text>
              </View>
            </View>
            
            <View style={styles.tableRow2}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.Vectordown}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextRed}>0.65%</Text>
              </View>
            </View>

            <View style={styles.tableRow2}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.Vectordown}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextRed}>0.65%</Text>
              </View>
            </View>

            <View style={styles.tableRow2}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.Vectordown}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextRed}>0.65%</Text>
              </View>
            </View>

            <View style={styles.tableRow2}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.Vectordown}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextRed}>0.65%</Text>
              </View>
            </View>

            <View style={styles.tableRow2}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.Vectordown}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextRed}>0.65%</Text>
              </View>
            </View>

            <View style={styles.tableRow2}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.Vectordown}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextRed}>0.65%</Text>
              </View>
            </View>

            <View style={styles.tableRow2}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.VectorUp}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextGreen}>0.65%</Text>
              </View>
            </View>

            <View style={styles.tableRow2}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.VectorUp}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextGreen}>0.65%</Text>
              </View>
            </View>

            <View style={styles.tableRow2}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.VectorUp}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextGreen}>0.65%</Text>
              </View>
            </View>
            <View style={styles.tableRow2}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.VectorUp}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextGreen}>0.65%</Text>
              </View>
            </View>
            <View style={styles.tableRow2}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.VectorUp}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextGreen}>0.65%</Text>
              </View>
            </View>
            <View style={styles.tableRow2}>
              <Text style={styles.tableCellText}>1.</Text>
              <View style={styles.tableImageTextContainer}>
                  <View style={styles.circle}>
                    <Image
                      source={Images.VectorHome}
                      style={styles.tableImage}
                    />
                  </View>
                <View style={styles.textContainer}>
                  <Text style={styles.tableImageText}>BTC</Text>
                  <Text style={styles.tableSubText}>501.00B</Text>
                </View>
              </View>
              <Text style={styles.tableCellText}>25,652.52</Text>
              <View style={styles.tablePercentageContainer}>
                <Image
                  source={Images.VectorUp}
                  style={styles.percentageImage}
                />
                <Text style={styles.tableCellTextGreen}>0.65%</Text>
              </View>
            </View>

          </View>
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
  subHeaderTextTwo: {
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
  subHeaderTextThree: {
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
  tableContainer: {
    width: 337,
    marginTop: 20,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 18,
  },
  tableRow1: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 28,
    marginTop:10
  },
  tableRow2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 28,
    marginTop:10
  },
  tableHeaderText: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: "center",
    color: "#575757",
  },
  tableCellText: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: "center",
    color: "#FFFFFF",
  },
  tableCellTextRed: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: "center",
    color: "#D92D20",
  },
  tableCellTextGreen: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: "center",
    color: "#12B76A",
  },
  tableImageTextContainer: {
    flexDirection: "row",
    alignItems: "center",

  },
  tableImage: {
    width: 7,
    height: 7,
    marginTop: -3
  },
  tableImageText: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: "center",
    color: "#FFFFFF",
  },
  tableSubText: {
    width: 60,
    height: 18,
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 18,
    textAlign: "center",
    color: "#575757",
  },
  tablePercentageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  percentageImage: {
    width: 6.88,
    height: 3.75,
    marginRight: 1.56,
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
    left: 3,
  },
  iconContainerOne: {
    alignItems: "center",
    position: "absolute",
    width: 65,
    height: 38,
    top: 13,
    left: 92,
  },
  iconImageOne: {
    width: 14.63,
    height: 12.38,
    top: 2.81,
    left: 1.69,
  },
  iconTextOne: {
    width: 65,
    height: 18,
    top: 10,
    left: 13,
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 18,
    color: "#FFFFFF",
  },
  iconContainerTwo: {
    alignItems: "center",
    position: "absolute",
    top: 13,
    width: 29,
    height: 38,
    top: 13,
    left: 246,
  },
  iconImageTwo: {
    width: 16.88,
    height: 13.5,
    top: 1.69,
    left: 1.69,
  },
  iconTextTwo: {
    width: 65,
    height: 18,
    top: 10,
    left: 13,
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 18,
    color: "#FFFFFF",
  },
  iconContainerThree: {
    alignItems: "center",
    position: "absolute",
    top: 13,
    width: 49,
    height: 38,
    top: 13,
    left: 305,
  },
  iconImageThree: {
    width: 13.5,
    height: 13.5,
    top: 2.25,
    left: 2.25,
  },
  textContainer: {
    flexDirection: "column",
    marginTop: 5

  },
  iconTextThree: {
    width: 65,
    height: 18,
    top: 10,
    left: 13,
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "400",
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
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#F9AA4B",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeMarket;
