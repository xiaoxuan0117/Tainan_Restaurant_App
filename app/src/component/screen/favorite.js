import React, { useEffect, useState }  from 'react';
import {Image, View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import store from '../redux/store';

const style = StyleSheet.create({
    outterView:{
        justifyContent: 'center',
        alignItems:'center'
    },
    card:{
        backgroundColor:"#fefefe",
        width:'100%',
        justifyContent: 'center',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5
    },
    itemName:{
        paddingTop:5,
        paddingBottom:10,
        paddingLeft:15,
        fontSize:20,
        textAlign:'center'
    },
    photo:{
        width:'100%',
        height:400,
    },
    itemAddress:{
        paddingTop:10,
        paddingLeft:6,
    },
    itemDiscription:{
        padding:10
    },
    heart:{
        position:'absolute',
        right:10,
        top:410
    }
})

const Favorite = ()=>{
    const [favorite, setFavorite] = useState([])

    useEffect(()=>{        
        var unsubscribe = store.subscribe(()=>{
            setFavorite(store.getState().restauraunt)
        })
        return ()=>{
            unsubscribe()
        }
    },[favorite])

    return (
        <View
        style={style.outterView}>
            <FlatList
                data={favorite}
                keyExtractor={({ id },index)=> index}
                renderItem={({item}) => {
                    if(item.isFavorite == "true"){
                        return(
                            <View
                            style={style.card}>
                                <Text style={style.itemName}>{item.name}</Text>
                                <Image
                                    style={style.photo}
                                    source={{uri:`${item.photo}`}}>
                                </Image>
                                <View style={{
                                    display:'flex',
                                    flexDirection: 'row',
                                    paddingLeft:10,
                                    alignItems: 'center'
                                }}>
                                    <Ionicons name='home' size={20} color={'#c7c7c7'} style={{
                                        marginTop:6
                                    }}/>
                                    <Text style={style.itemAddress}>{item.address}</Text>
                                </View>
                                <Text style={style.itemDiscription}>{item.discription}</Text>
                                <View style={style.heart}>
                                    <Ionicons name={item.isFavorite == "true" ? 'heart' :'heart-outline'} size={30} color={'white'} onPress={()=>{
                                        if(item.isFavorite == 'false'){
                                            store.dispatch({
                                                type:'favorite_on',
                                                payload:item.id
                                            })
                                        }else{
                                            store.dispatch({
                                                type:'favorite_off',
                                                payload:item.id
                                            })
                                        }
                                    }}/>
                                </View>
                            </View>
                        )
                    }
                }}/>
        </View>
    )
}

export default Favorite;