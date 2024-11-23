import { Dimensions, ScrollView, StatusBar, StyleSheet, Image, View, SafeAreaView, Platform, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import { Styles } from '../Components/Stylesheets';
import Recentsearch from '../Components/Recentsearch';
import Category from '../Components/Category';
import BestDeal from './BestDeal';
import Banner from './Banner';

const { width, height } = Dimensions.get('screen');

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1DAB451A' }}>
            <StatusBar barStyle="dark-content" backgroundColor="#1DAB451A" />
            <ScrollView style={styles.container}>
                <Header />

                <View style={[Styles.Row, styles.searchcontainer]}>
                    {/* Search Input */}
                    <View style={styles.searchSection}>
                        <Image source={require('../assets/icon/search.png')} style={styles.searchIcon} />
                        <TextInput
                            placeholder="Search"
                            style={styles.input}
                            placeholderTextColor={'#9DA49ECC'}
                        />
                    </View>

                    {/* Filter Button */}
                    <TouchableOpacity style={styles.filterButton}>
                        <Image source={require('../assets/icon/filter.png')} style={styles.searchIcon} />
                    </TouchableOpacity>
                </View>

                <View style={[Styles.marginTop1,Styles.marginHorizontal1]}>
                    <Recentsearch />
                </View>

                <View>
                    <Category />
                </View>

                <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                    <Banner />
                </View>

                <View style={[Styles.marginTop1,Styles.marginBottom4,Styles.marginHorizontal1]}>
                    <BestDeal />
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        marginTop: Platform.OS == "android" ? 25 : 0,
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        borderRadius: 10,
        flex: 1,
        paddingHorizontal: 10,
        height: 55,
    },
    searchIcon: {
        marginRight: 5,
        width: 24,
        height: 24
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    filterButton: {
        backgroundColor: '#00C853',
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
        height: 50,
        justifyContent: 'center',
    },
    searchcontainer: {
        marginHorizontal: 10
    },

});
