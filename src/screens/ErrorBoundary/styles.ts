import { Dimensions, View } from 'react-native';

import styled from 'styled-components/native';

export const { height } = Dimensions.get('window');

const ErrorContainer = styled(View)`
  height: ${height}px;
  justify-content: center;
  align-items: center;
`;

export default ErrorContainer;
