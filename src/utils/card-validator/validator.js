import { luhn10 } from "./luhn-10";

const verification = (card, isPotentiallyValid, isValid) => {
  return { card: card, isPotentiallyValid: isPotentiallyValid, isValid: isValid };
};

export const validate = (cardInfo, cardNumber) => {
  let potentialTypes, cardType, isPotentiallyValid, isValid, i, maxLength;

  if (!isNaN(cardNumber)) {
    cardNumber = String(cardNumber);
  }

  if (typeof cardNumber !== "string") { return verification(null, false, false); }

  cardNumber = cardNumber.replace(/\-|\s/g, "");

  if (!/^\d*$/.test(cardNumber)) { return verification(null, false, false); }

  potentialTypes = cardInfo.filter(card => {
    const newRegex = new RegExp(eval(card.regex));
    return newRegex.test(cardNumber);
  });

  if (potentialTypes.length === 0) {
    return verification(null, false, false);
  } else if (potentialTypes.length !== 1) {
    return verification(null, true, false);
  }

  cardType = potentialTypes[0];

  isValid = luhn10(cardNumber);

  maxLength = Math.max.apply(null, cardType.lengths);

  for (i = 0; i < cardType.lengths.length; i++) {
    if (cardType.lengths[i] === cardNumber.length) {
      isPotentiallyValid = cardNumber.length !== maxLength || isValid;
      return verification(cardType, isPotentiallyValid, isValid);
    }
  }

  return verification(cardType, cardNumber.length < maxLength, false);
};
