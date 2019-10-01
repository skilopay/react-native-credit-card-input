import * as React from 'react';
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
  values: ValuesObject
}

export class CreditCardInput extends React.Component<CreditCardInputProps> {
  focus(field: string): void;
  setValues(values: ValuesObject): void
}
