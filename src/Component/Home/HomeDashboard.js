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

const HomeDashboard = ({ navigation }) => {
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
                        <Text style={styles.subHeaderTexttwo}>Portfolio</Text>
                        <Text style={styles.subHeaderTextthree} onPress={() => navigation.navigate('HomeDashboard')}>More</Text>
                    </View>

                    <View style={styles.grayRectangle}>
                        <View style={styles.valueContainer}>
                            <Text style={styles.currentValueText}>Current value</Text>
                            <Text style={styles.gainsText}>Gains</Text>
                        </View>
                        <View style={styles.amountContainer}>
                            <Text style={styles.currentValueAmount}>$ 20,000</Text>
                            <Text style={styles.gainsAmount}>+ $ 1,500</Text>
                        </View>
                        <View style={styles.amountContainerInv}>
                            <Text style={styles.currentValueAmountInv}>Invested</Text>
                            <Text style={styles.gainsAmountInv}>$ 18,500</Text>
                        </View>
                        <View style={styles.amountContainergain}>
                            <Text style={styles.currentValueAmountGain}>Gains (%)</Text>
                            <Text style={styles.gainsAmount}>10.00 %</Text>
                        </View>
                    </View>
                    <View style={styles.grayRectangleRow}>
                        <View style={styles.grayRectangleSmaller}>
                            <View style={styles.valueContainer}>
                                <Text style={styles.currentValueActive}>Active SIP</Text>
                                    <Text style={styles.gainsTextRs}>$ 100 / month</Text>
                                 </View>
                        </View>
                        <View style={styles.grayRectangleSmaller}>
                            <View style={styles.valueContainer}>
                                <Text style={styles.currentValueActive}>Earned referrals</Text>
                                <Text style={styles.gainsTextRs}>$ 0 USDT</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.grayRectangleRow1}>
                        <View style={styles.grayRectangleSmallerone}>
                            <View style={styles.valueContainer}>
                                <Text style={styles.currentValueActive}>Total yield</Text>
                                <Text style={styles.gainsTextRs}>10%</Text>
                            </View>
                        </View>
                        <View style={styles.grayRectangleSmallerone}>
                            <View style={styles.valueContainer}>
                                <Text style={styles.currentValueActive}>Withdraw amount available</Text>
                                <Text style={styles.gainsTextRs}>$ 0 USDT</Text>
                            </View>
                        </View>
                    </View>


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
    grayRectangle: {
        width: 337,
        height: 150,
        top: 201,
        left: 14,
        borderRadius: 7,
        backgroundColor: "#808080",
        position: "absolute",
    },
    grayRectangleSmaller: {
        width: 160,
        height: 100,
        borderRadius: 7,
        backgroundColor: "#808080",
        top: 240,
        marginTop: 20, 
        marginLeft:5 
    },
    grayRectangleSmallerone: {
        width: 160,
        height: 100,
        borderRadius: 7,
        backgroundColor: "#808080",
        top: 240,
        marginTop: 5, 
        marginLeft:5
    },
    grayRectangleRow: {
        flexDirection: 'row',
        marginTop: 20,
    },
    grayRectangleRow1: {
        flexDirection: 'row',
        marginTop: 20,
    },
    valueContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    amountContainerInv: {
        flexDirection: 'col',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    amountContainergain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    currentValueText: {
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 18,
        textAlign: "center",
        color: "#575757",
    },
    currentValueAmount: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 20,
        textAlign: "center",
        color: "#FFFFFF",
    },
    currentValueAmountGain: {
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 16,
        color: "#575757",
        width: 55,
        height: 18,
        top: -21,
        left: 265,
    },
    currentValueAmountInv: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 20,
        textAlign: "center",
        color: "#575757",
        width: 50,
        height: 22,
        top: 27,
        left: 2,
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 18,
    },
    gainsText: {
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 18,
        textAlign: "center",
        color: "#575757",
    },
    gainsAmount: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 16,
        textAlign: "right",
        color: "#12B76A",
    },
    gainsAmountInv: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 20,
        textAlign: "center",
        color: "#12B76A",
        width: 59,
        height: 20,
        top: 27,
        left: 2,
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 20,

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
    currentValueActive: {
        width: 58,
        height: 18,
        top: 14,
        left: 14,
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 18,
        color: "#FFFFFF",
        flexWrap: 'wrap',
    },
    gainsTextRs: {
        width: 86,
        height: 20,
        top: 66,
        left: -49,
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 18,
        color: "#FFFFFF",
    },
});

export default HomeDashboard;
