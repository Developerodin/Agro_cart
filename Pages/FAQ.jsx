import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, FlatList, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenHeader from '../Components/ScreenHeader';

export default function FAQ() {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqs = [
        { question: 'How to place an order?', answer: '' },
        { question: 'How to place a bulk order?', answer: '' },
        { question: 'What are the other payment methods?', answer: '' },
        {
            question: 'How to create support ticket?',
            answer: `• Office ipsum you must be muted.\n• Corporate own no going key language with hours exploratory.\n• Door strategy caught 2 with resources.\n• Respectively if before book hit eco-system.\n• So resources while red-flag pants fruit pushback door.`
        }
    ];

    const [faq, setFAQ] = useState(null);

    const handlePress = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" backgroundColor={"#fff"} />
            <ScreenHeader title="FAQ" />
            <ScrollView style={{ backgroundColor: "#1DAB451A" }}>
                <View>
                    {
                        faqs != null
                            ?
                            faqs.map((elem, index) => {
                                return (
                                    <View style={styles.faqItem} key={index}>
                                        <TouchableOpacity onPress={() => handlePress(index)} style={styles.questionContainer}>
                                            <Text style={styles.question}>{elem.question}</Text>

                                            <Image source={require('../assets/rightarrow.png')} style={expandedIndex == index ? styles.rotateImage : styles.openarrow} />
                                        </TouchableOpacity>
                                        {expandedIndex === index && (
                                            <View style={styles.answerContainer}>
                                                <Text style={styles.answer}>{elem.answer}</Text>
                                            </View>
                                        )}
                                    </View>
                                )
                            })
                            :
                            null
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    header: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff', // Green background
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },

    arrow: {
        marginLeft: 20
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101811',
        textAlign: 'center',
        width: Dimensions.get('screen').width / 1.2
    },
    faqItem: {
        backgroundColor: "#fff",
        margin: 10,
        padding: 20,
        borderRadius: 10
    },
    questionContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    openarrow: {
        width: 20,
        height: 20,
    },
    rotateImage: {
        transform: [{ rotate: '90deg' }],
        width: 20,
        height: 20,
    },
    answerContainer: {
        marginTop: 20
    }
})