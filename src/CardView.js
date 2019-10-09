import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  Platform,
} from "react-native";

import defaultIcons from "./Icons";
import FlipCard from "react-native-flip-card";

const BASE_SIZE = { width: 231, height: 126 };

const s = StyleSheet.create({
  cardContainer: {},
  cardFace: {},
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 60,
    height: 40,
    resizeMode: "contain",
  },
  baseText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: '600',
    backgroundColor: "transparent",
  },
  placeholder: {
    color: "rgba(255, 255, 255, 0.5)",
  },
  cvcPlaceholder: {
    color: "rgba(130, 130, 130, 0.5)",
  },
  focused: {
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
  },
  cvcFocused: {
    fontWeight: "bold",
    color: "rgba(130, 130, 130, 1)",
  },
  number: {
    fontSize: 14,
    position: "absolute",
    top: 71,
    left: 13,
  },
  name: {
    fontSize: 12,
    position: "absolute",
    bottom: 20,
    left: 13,
    right: 55,
  },
  expiryLabel: {
    fontSize: 8,
    position: "absolute",
    bottom: 33,
    left: 183,
    right: 12,

  },
  expiry: {
    fontSize: 14,
    position: "absolute",
    bottom: 20,
    right: 12,
  },
  amexCVC: {
    fontSize: 14,
    position: "absolute",
    top: 55,
    fontStyle: 'italic',
    right: 11,
  },
  cvc: {
    fontSize: 14,
    position: "absolute",
    top: 55,
    fontStyle: 'italic',
    right: 11,
  },
});

/* eslint react/prop-types: 0 */ // https://github.com/yannickcr/eslint-plugin-react/issues/106
export default class CardView extends Component {
  static propTypes = {
    focused: PropTypes.string,

    brand: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    expiry: PropTypes.string,
    cvc: PropTypes.string,
    placeholder: PropTypes.object,

    scale: PropTypes.number,
    fontFamily: PropTypes.string,
    imageFront: PropTypes.number,
    imageBack: PropTypes.number,
    customIcons: PropTypes.object,
  };

  static defaultProps = {
    name: "",
    placeholder: {
      number: "•••• •••• •••• ••••",
      name: "FULL NAME",
      expiry: "••/••",
      cvc: "•••",
    },
    expiryLabel: 'MONTH/YEAR',
    scale: 1,
    fontFamily: Platform.select({ ios: "Courier", android: "monospace" }),
    imageFront: require("../images/card-front.png"),
    imageBack: require("../images/card-back.png"),
  };

  render() {
    const { focused,
      brand, name, number, expiry, cvc, customIcons,
      placeholder, imageFront, imageBack, scale, fontFamily, expiryLabel } = this.props;

    const Icons = { ...defaultIcons, ...customIcons };
    const isAmex = brand === "american-express";
    const shouldFlip = !isAmex && focused === "cvc";

    const containerSize = { ...BASE_SIZE, height: BASE_SIZE.height * scale };
    const transform = {
      transform: [
        { scale },
        { translateY: ((BASE_SIZE.height * (scale - 1) / 2)) },
      ]
    };

    return (
      <View style={[s.cardContainer, containerSize]}>
        <FlipCard style={{ borderWidth: 0 }}
          flipHorizontal
          flipVertical={false}
          friction={10}
          perspective={2000}
          clickable={false}
          flip={shouldFlip}>
          <ImageBackground style={[BASE_SIZE, s.cardFace, transform]}
            source={imageFront}>
            <Image style={[s.icon]}
              source={Icons[brand]} />
            <Text style={[s.baseText, { fontFamily }, s.number, !number && s.placeholder, focused === "number" && s.focused]}>
              {!number ? placeholder.number : number}
            </Text>
            <Text style={[s.baseText, { fontFamily }, s.name, !name && s.placeholder, focused === "name" && s.focused]}
              numberOfLines={1}>
              {!name ? placeholder.name : name.toUpperCase()}
            </Text>
            <Text style={[s.baseText, { fontFamily }, s.expiryLabel, s.placeholder, focused === "expiry" && s.focused]}>
              {expiryLabel}
            </Text>
            <Text style={[s.baseText, { fontFamily }, s.expiry, !expiry && s.placeholder, focused === "expiry" && s.focused]}>
              {!expiry ? placeholder.expiry : expiry}
            </Text>
            {isAmex &&
              <Text style={[s.baseText, { fontFamily }, s.amexCVC, !cvc && s.placeholder, focused === "cvc" && s.focused]}>
                {!cvc ? placeholder.cvc : cvc}
              </Text>}
          </ImageBackground>
          <ImageBackground style={[BASE_SIZE, s.cardFace, transform]}
            source={imageBack}>
            <Text style={[s.baseText, s.cvc, !cvc && s.cvcPlaceholder, focused === "cvc" && s.cvcFocused]}>
              {!cvc ? placeholder.cvc : cvc}
            </Text>
          </ImageBackground>
        </FlipCard>
      </View>
    );
  }
}
