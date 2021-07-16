import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Home(props) {
    const [copos, setCopos] = useState([300, 500, 2000, 1, 10, 224, 43, 23410, 22443, 4565, 123, 12345, 43234]);
    const [currentCopo, setCurrentCopo] = useState([300])
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <FlatList
                    styles={styles.coluna}
                    data={copos}
                    keyExtractor={item => item.toString()}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={<TouchableOpacity style={styles.bola}><Entypo name='plus' size={60} color={'#fff'} /></TouchableOpacity>}
                    renderItem={({ item }) => (<TouchableOpacity style={styles.bola}><Text style={styles.textoMl}>{item} ml</Text></TouchableOpacity>)}>


                </FlatList>
               
                <View style={styles.TextoProgresso}>
                    <Text style={styles.textCenter}>Você bebeu 8 copos de água </Text> 
                    <Text style={styles.textCenter}>Meta: 10</Text>
                </View>
                                  

                <View style={styles.medidor}>
                    <View style={styles.water} ></View>
                </View>
            </View>
            <View style={styles.timeRow}>
                <View>
                    <Text>Horário de acordar</Text>
                    <TouchableOpacity style={styles.timePicker}>
                        <Feather name="sun" size={24} color="black"/>
                        <Text>00h00</Text>
                    </TouchableOpacity>
                    </View>
                <View>
                    <Text>Horário de dormir</Text>
                    <TouchableOpacity style={styles.timePicker}>
                    <Feather name="moon" size={24} color="black"/>
                    <Text>00h00</Text>

                    </TouchableOpacity>
                    </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Entypo name='plus' size={60} color={'#fff'} />
            </TouchableOpacity>
        </View>
    );
}

function Progress() {
    return wp(`${30*0.2}%`);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        borderRadius: 60,
        backgroundColor: '#444',
        width: wp('18%'),
        height: wp('18%'),
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10,
        right: 10
    },

    row: {
        margin: hp('4%'),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        maxHeight: hp('33%')
    },
    timeRow: {
        margin: hp('4%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flexDirection: 'row',
        maxHeight: hp('33%')
    },
    coluna: {
        maxHeight: hp('33%'),
        paddingVertical: 20,
        width: wp('17%')

    },
    bola: {
        borderRadius:  wp('15%'),
        borderColor: '#222',
        margin: wp('0.5%'),
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('15%'),
        height: wp('15%'),
    },
    TextoProgresso: {
        borderColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('20%'),
        height: wp('20%'),
    },
    medidor: {
        marginLeft:20,
        borderRadius: 60,
        borderColor: '#222',
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: wp('30%'),
        height: wp('30%'),
        overflow: 'hidden'
    },
    water: {
        width: wp('30%'),
        backgroundColor: '#00FFFF',
        height: Progress()
    },
    textoMl: {
        color:'#fff',
        textAlign: 'center'
    },
    textCenter: {
        textAlign: 'center'
    },
    timePicker: {
        borderRadius: 5,
        margin: wp('2%'),
        height: wp('10%'),
        width: wp('24%'),
        padding: wp('2%'),
        flexDirection: 'row',
        backgroundColor: '#00ffff',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    }
});
