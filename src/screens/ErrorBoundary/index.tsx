/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { Component } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import ErrorContainer from './styles';
import MainBackgroundLayout from '../../components/BackgroundWrappers/MainBackgroundLayout';
import { StyledText } from '../../../globalStyles';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <MainBackgroundLayout>
          <ErrorContainer>
            <StyledText fontSize="24px" textColor="#363636">
              Oops, Something went wrong.
            </StyledText>
            <StyledText fontSize="24px" textColor="#363636">
              Try again later :)
            </StyledText>
            <StyledText fontSize="24px" textColor="#363636">
              Error:
            </StyledText>
            <StyledText fontSize="24px" textColor="#363636">
              {error && error.toString()}
            </StyledText>
          </ErrorContainer>
        </MainBackgroundLayout>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
