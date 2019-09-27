import * as React from 'react';

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
  onFocus?: any;
  viewPlaceholder?: any;
  placeholders?: any;
  autoFocusPrevious?: boolean;
  autoFocusNext?: boolean;
}

export class CreditCardInput extends React.Component<CreditCardInputProps> {
  focus(field: string): void;
}
