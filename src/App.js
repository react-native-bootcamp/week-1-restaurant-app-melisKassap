/*Melis KASSAP - restaurantApp*/
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';

import data from './database/data.json';



const App = () => {


  const newData = data.map((data) => {
    return (
      <View key={data.id} style={styles.cardStyle}>
        <View style={styles.textViewStyle}>
          <Text style={styles.textNameStyle}>{data.name}</Text>
          <Text style={styles.textLocationStyle}>{data.location}</Text>
        </View>
        <Image style={styles.imageStyle} source={{ uri: data.image }} />
        <View style={styles.cardBottomStyle}>

          <View >
            {data.isOpenNow ?
              <Image style={styles.openNowStyle} source={require('./assets/open.png')} />
              :
              <Image style={styles.openNowStyle} source={require('./assets/closed.png')} />
            }
          </View>

          <View style={styles.likeStyle}>
            {
              data.isPopular ?
                <Image style={styles.heartStyle} source={require('./assets/heartRed.png')} />
                :
                <Image style={styles.heartStyle} source={require('./assets/heart_empty.png')} />
            }
            <Text style={styles.likeTextStyle}>{data.likes}</Text>
          </View>
        </View>
      </View>
    )
  })

  return (

    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={{ flex: 1 }}>
          {newData}
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#c8d9a3",
  },

  cardStyle: {
    margin: 9,
    borderRadius: 12,
    backgroundColor: "#e7dfd5",
    height: Dimensions.get("window").height / 1.8,

  },
  cardBottomStyle: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "flex-end",
    marginTop: 2,
    marginRight: 15
  },

  imageStyle: {
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height / 2.6,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 5
  },
  textViewStyle: {
    marginTop: 5,
    marginLeft: 15,
  },
  textNameStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#204051"
  },

  textLocationStyle: {
    fontSize: 12,
    color: "#3B6978"
  },

  heartStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  openNowStyle: {
    marginTop: -15,
    marginLeft: 25,
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },

  likeStyle: {
    marginTop: 2,
    marginLeft: 25
  },
  likeTextStyle: {
    marginLeft: 4
  }

});

export default App;
