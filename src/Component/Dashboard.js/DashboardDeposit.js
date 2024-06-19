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
    FlatList,
} from "react-native";
import Colors from "../../Styles/Colors";
import Images from "../../Styles/Images";
import LinearGradient from 'react-native-linear-gradient';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const flatListData = [
    {
        key: '1',
        title: 'Nice little fund name lorem ipsum',
        description: 'Earn up to $100 per month for every $1,000 invested.',
        image: Images.VectorUp,
        sinceInception: 'Since inception',
        returns: '1 M Returns',
    },
    {
        key: '2',
        title: 'Another fund name lorem ipsum',
        description: 'Earn up to $150 per month for every $1,000 invested.',
        image: Images.VectorUp,
        sinceInception: 'Since inception',
        returns: '2 M Returns',
    }
];

const DashboardDeposit = ({ navigation }) => {
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
                        <Text style={styles.subHeaderTextTwo}>Portfolio</Text>
                        <Text style={styles.subHeaderTextThree} onPress={() => navigation.navigate('DashboardDeposit')}>More</Text>
                    </View>

                    {/* Horizontal Scrollable Row */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
                        <View style={styles.smallRectangle}>
                            <Image
                                source={Images.home}
                                style={styles.smallRectangleImage}
                            />
                            <Text style={styles.smallRectangleText}>Home</Text>
                        </View>
                        <View style={styles.smallRectangle}>
                            <Image
                                source={Images.wallet}
                                style={styles.smallRectangleImage}
                            />
                            <Text style={styles.smallRectangleText}onPress={() => navigation.navigate('DashboardDeposit')}>Depoist</Text>
                        </View>
                        <View style={styles.smallRectangle}>
                            <Image
                                source={Images.coins}
                                style={styles.smallRectangleImage}
                            />
                            <Text style={styles.smallRectangleText}>Withdraw</Text>
                        </View>
                        <View style={styles.smallRectangle}>
                            <Image
                                source={Images.piggybank}
                                style={styles.smallRectangleImage}
                            />
                            <Text style={styles.smallRectangleText}>Early Maturity</Text>
                        </View>
                        <View style={styles.smallRectangle}>
                            <Image
                                source={Images.hearthandshake}
                                style={styles.smallRectangleImage}
                            />
                            <Text style={styles.smallRectangleText}>Referrals</Text>
                        </View>
                    </ScrollView>

                    

                    <View style={{ paddingBottom: screenHeight * 0.15 }}></View>
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
    subHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: screenWidth * 0.9,
        height: screenHeight * 0.05,
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
    gradientBackground: {
        width: screenWidth * 0.2,
        height: screenHeight * 0.04,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
    },
    horizontalScrollView: {
        marginTop: screenHeight * 0.02,
        marginBottom: screenHeight * 0.02,
    },
    smallRectangle: {
        width: screenWidth * 0.2,
        height: screenHeight * 0.1,
        borderRadius: 7,
        backgroundColor: '#202020',
        marginHorizontal: screenWidth * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallRectangleImage: {
        width: screenWidth * 0.06,
        height: screenHeight * 0.03,
        position: 'absolute',
        top: screenHeight * 0.01,
    },
    smallRectangleText: {
        fontFamily: 'Inter',
        fontSize: screenWidth * 0.02,
        fontWeight: '500',
        lineHeight: screenHeight * 0.02,
        textAlign: 'center',
        color: '#FFFFFF',
        position: 'absolute',
        top: screenHeight * 0.05,
    },
    grayRectangle: {
        width: screenWidth * 0.9,
        height: screenHeight * 0.2,
        borderRadius: 7,
        backgroundColor: "#202020",
        marginTop: screenHeight * 0.02,
        paddingHorizontal: screenWidth * 0.05,
        paddingVertical: screenHeight * 0.02,
    },
    grayRectangleSmaller: {
        width: screenWidth * 0.42,
        height: screenHeight * 0.15,
        borderRadius: 7,
        backgroundColor: "#202020",
        margin: screenWidth * 0.02,
        paddingHorizontal: screenWidth * 0.02,
        paddingVertical: screenHeight * 0.02,
    },
    grayRectangleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    valueContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    valueContainerone: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: screenHeight * 0.01,
    },
    amountContainerInv: {
        flexDirection: 'col',
        justifyContent: 'space-between',
        marginTop: screenHeight * 0.06,
    },
    amountContainerGain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: screenWidth * 0.1,
        height: screenHeight * 0.1
    },
    currentValueText: {
        fontFamily: "Inter",
        fontSize: screenWidth * 0.03,
        fontWeight: "500",
        lineHeight: screenWidth * 0.04,
        textAlign: "left",
        color: "#575757",
    },
    currentValueAmount: {
        fontFamily: "Inter",
        fontSize: screenWidth * 0.04,
        fontWeight: "500",
        lineHeight: screenWidth * 0.05,
        textAlign: "left",
        color: "#FFFFFF",
    },
    currentValueAmountGain: {
        fontFamily: "Inter",
        fontSize: screenWidth * 0.03,
        fontWeight: "500",
        lineHeight: screenWidth * 0.04,
        color: "#575757",
    },
    currentValueAmountInv: {
        fontFamily: "Inter",
        fontSize: screenWidth * 0.04,
        fontWeight: "500",
        lineHeight: screenWidth * 0.05,
        textAlign: "left",
        color: "#575757",
    },
    gainsText: {
        fontFamily: "Inter",
        fontSize: screenWidth * 0.03,
        fontWeight: "500",
        lineHeight: screenWidth * 0.04,
        textAlign: "left",
        color: "#575757",
    },
    gainsAmount: {
        fontFamily: "Inter",
        fontSize: screenWidth * 0.04,
        fontWeight: "500",
        lineHeight: screenWidth * 0.05,
        textAlign: "left",
        color: "#12B76A",
        top:screenHeight * 0.1,
    },
    gainsAmountInv: {
        fontFamily: "Inter",
        fontSize: screenWidth * 0.04,
        fontWeight: "500",
        lineHeight: screenWidth * 0.05,
        textAlign: "left",
        color: "#FFFFFF",
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
        lineHeight: screenWidth * 0.04,
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
        fontSize: screenWidth * 0.025,
        fontWeight: "400",
        lineHeight: screenWidth * 0.04,
        color: "#FFFFFF",
        textAlign: "center",
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
        lineHeight: screenWidth * 0.04,
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
        lineHeight: screenWidth * 0.04,
        color: "#FFFFFF",
        textAlign: "center",
    },
    currentValueActive: {
        fontFamily: "Inter",
        fontSize: screenWidth * 0.03,
        fontWeight: "500",
        lineHeight: screenWidth * 0.05,
        textAlign: "left",
        color: "#FFFFFF",
    },
    gainsTextRs: {
        fontFamily: "Inter",
        fontSize: screenWidth * 0.03,
        fontWeight: "500",
        lineHeight: screenWidth * 0.22,
        textAlign: "left",
        color: "#FFFFFF",
    },
    textContainer: {
        width: screenWidth * 0.9,
        marginTop: screenHeight * 0.02,
    },
    textOne: {
        fontFamily: "Inter",
        fontSize: screenWidth * 0.03,
        fontWeight: "500",
        lineHeight: screenWidth * 0.04,
        color: "#FFFFFF",
    },
    flatListContainer: {
        marginTop: screenHeight * 0.02,
    },
    scrollableRectangle: {
        width: screenWidth * 0.63,
        height: screenHeight * 0.2,
        borderRadius: 7,
        backgroundColor: "#202020",
        marginRight: screenWidth * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        padding: screenWidth * 0.05,
    },
    rectangleTitle: {
        fontFamily: 'Inter',
        fontSize: screenWidth * 0.04,
        fontWeight: '500',
        color: '#FFFFFF',
        marginBottom: screenHeight * 0.01,
    },
    rectangleDescription: {
        fontFamily: 'Inter',
        fontSize: screenWidth * 0.03,
        fontWeight: '500',
        color: '#575757',
        marginBottom: screenHeight * 0.02,
    },
    smallrect: {
        width: screenWidth * 0.09,
        height: screenHeight * 0.03,
        borderRadius: 4,
        backgroundColor: "white",
        justifyContent: 'left',
        alignItems: 'left',
        marginBottom: screenHeight * 0.02,
    },
    incep: {
        fontFamily: "Inter",
        fontSize: screenWidth * 0.03,
        fontWeight: '500',
        color: "#575757",
    },
    milli: {
        fontFamily: "Inter",
        fontSize: screenWidth * 0.03,
        fontWeight: '500',
        color: "#575757",
    },
    check: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: screenHeight * 0.01,
    },
    checktwo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    percentageImage: {
        width: screenWidth * 0.05,
        height: screenHeight * 0.03,
        marginRight: screenWidth * 0.01,
    },
});

export default DashboardDeposit;
