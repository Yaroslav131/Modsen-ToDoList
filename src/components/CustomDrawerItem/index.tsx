import React from 'react';
import { View, Text, Image, ImageProps } from 'react-native';

interface CustomDrawerItemProps {
    icon: ImageProps
    title: string
}

const CustomDrawerItem = ({ icon, title }: CustomDrawerItemProps) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={icon} style={{ width: 24, height: 24 }} />
            <Text style={{ marginLeft: 10 }}>{title}</Text>
        </View>
    );
};

export default CustomDrawerItem;