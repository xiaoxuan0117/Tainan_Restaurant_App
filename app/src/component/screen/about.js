import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

const style = StyleSheet.create({
    link:{
        padding:10,
        width:'90%',
        backgroundColor: '#fefefe',
        borderRadius:10,
        elevation:5,
        shadowColor:'#676767'
    }
})
const About = ()=>{
    return (
        <View style={{
            justifyContent:'center',
            alignItems:'center'
        }}>
            <View style={{
                padding:20
            }}>
                <Text style={{
                    fontSize:15,
                    borderBottomColor:"#c7c7c7",
                    borderBottomWidth:1,
                    marginBottom:10
                }}>這是一個查看與收藏台南餐廳的APP</Text>
                <Text style={{
                    marginBottom:5
                }}>頁面說明:</Text>
                <Text style={{
                    marginBottom:5
                }}>&bull;&nbsp;Restauraunt:在此頁面利用fetch取得先前製作好的fake api，使用者可以查看餐廳的地址與簡介</Text>
                <Text>&bull;&nbsp;Favorite:此頁面會出現在Restaurant頁面有點擊愛心的餐廳</Text>
            </View>
            <TouchableOpacity
                onPress={()=>openURLInBrowser('https://xiaoxuan0117.github.io/cv_website/#/')}
                style={style.link}>
                <Text style={{
                    fontSize:15,
                    color:'#FF6B6B'
                }}>Creator Website</Text>
                <Text>https://xiaoxuan0117.github.io/cv_website/#/</Text>
            </TouchableOpacity>
        </View>
    )
}

export default About;