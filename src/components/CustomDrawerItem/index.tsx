import React from 'react';
import { ImageProps } from 'react-native';
import { Container, Icon, Title } from './styles';

interface CustomDrawerItemProps {
  icon: ImageProps;
  title: string;
}

function CustomDrawerItem({ icon, title }: CustomDrawerItemProps) {
  return (
    <Container>
      <Icon source={icon} />
      <Title>{title}</Title>
    </Container>
  );
}

export default CustomDrawerItem;
