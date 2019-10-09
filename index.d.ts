import * as React from 'react';
import { TextStyle, StyleProp } from 'react-native';
export type FormKeys = 'number' | 'expiry' | 'cvc' | 'name' | 'postalCode';

export type ValuesObject = {
  [key in FormKeys]?: string;
};

export interface CreditCardInputProps {
  cardImageFront?: any;
  cardImageBack?: any;
  fontFamily?: any;
  cardScale?: any;
  autoFocus?: any;
  fieldsOrder?: any;
  requiresName?: any;
  expiryLabel?: any;
  inputContainerStyle?: any;
  labels?: any;
  onFocus?: Function;
  onChange?: Function;
  viewPlaceholder?: any;
  placeholders?: any;
  autoFocusPrevious?: boolean;
  autoFocusNext?: boolean;
  values?: ValuesObject;
  cardFontFamily?: string;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  validColor?: string;
  invalidColor?: string;
}

export class CreditCardInput extends React.Component<CreditCardInputProps> {
  focus(field: string): void;
  setValues(values: ValuesObject): void
}
