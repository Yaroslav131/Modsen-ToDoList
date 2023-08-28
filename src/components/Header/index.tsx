import { Dimensions, StyleSheet, View, Text, TouchableOpacity, Image, ImageProps } from 'react-native';

interface HeaderProps {
    onPress: () => void
    leftImage: ImageProps
    title: string
}

function Header(props: HeaderProps) {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.leftButton}>
                <Image style={styles.buttonImage} source={props.leftImage} />
            </TouchableOpacity>
            <Text style={styles.titleText}>
                {props.title}
            </Text>
        </View>
    );
}


const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    buttonImage: {
        width: "100%",
        height: "100%"
    },
    titleText: {
        fontSize: 28,
        color: "#FFF",
        fontFamily: "jost_semiBold",
    },
    leftButton: {
        padding: 5,
        justifyContent: 'center',
        width: height * 0.04,
        height: height * 0.04,
        position: 'absolute',
        left: 0
    },
    headerContainer: {
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.08
    },
}
)


export default Header;