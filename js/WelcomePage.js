import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import NavigatorUtils from './utils/NavigatorUtils';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

class WelcomePage extends Component {

    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigatorUtils.resetHomePage(this.props);
        }, 2000);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {myIcon}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default WelcomePage;
