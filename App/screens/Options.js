import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Linking, Alert } from 'react-native';
import colors from '../constants/colors';
import { Entypo } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RowItem, RowSeperator } from '../components/RowItem';

const styles = StyleSheet.create({
    mainView: {
        paddingTop: 40,
        flex: 1
    }
});

const openUrl = (url) => {
    return Linking.openURL(url).catch( () => {
        Alert.alert('Sorry, something went wrong.', 'Please try again later');
    });
}

export default() => {
    return (
        <SafeAreaView style = {styles.mainView}>
            <ScrollView>
            <RowItem
                text = "Theme"
                onPress = { () =>
                    openUrl('https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter')
                }
                rightIcon = {
                    <Entypo name= "chevron-right" size = {20} color = {colors.blue}/>
                }
            />
            <RowSeperator />
            
            <RowItem
                text = "React Native Basics"
                onPress = {() => alert("Todo!")}
                rightIcon = {
                    <Entypo name= "export" size = {20} color = {colors.blue}/>
                }
            />
            <RowSeperator />

            <RowItem
                text = "React Native Basics"
                onPress = {() => alert("Todo!")}
                rightIcon = {
                    <Entypo name= "export" size = {20} color = {colors.blue}/>
                }
            />
            <RowSeperator />
            </ScrollView>

        </SafeAreaView>
    );
};