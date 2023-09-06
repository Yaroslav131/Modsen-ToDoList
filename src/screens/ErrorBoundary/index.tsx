import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import MainBackgroundLayout from '../../components/BackgroundWrappers/MainBackgroundLayout';
import { styles } from './styles';

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
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Oops, Something went wrong.</Text>
            <Text style={styles.errorText}>Try again later :)</Text>
            <Text style={styles.errorText}>Error:</Text>
            <Text style={styles.errorText}>{error && error.toString()}</Text>
          </View>
        </MainBackgroundLayout>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
