/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

export default class App extends Component {

  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require('./src/images/close.png')}
              style={{ width: 14, height: 14 }}
            />
            <Text style={{
              height: 29, fontSize: 21, textAlign: 'center',
              fontWeight: '600', color: '#333333', lineHeight: 29
            }}>
              注册
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{
                fontSize: 14, marginRight: 8, fontWeight: '500',
                color: '#666666', lineHeight: 20
              }}>中文</Text>
              <Image
                source={require('./src/images/down.png')}
                style={{ width: 14, height: 8 }}
              />
            </View>
          </View>
          <View style={{ backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#333333', lineHeight: 20 }}>
              姓名
            </Text>
            <TextInput
              autoFocus
              fontSize={14}
              justifyContent={'flex-end'}
              key="name"
              placeholder={'请输入您的姓名'}
              placeholderTextColor={'#cccccc'}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 1,
    margin: 20,
    paddingHorizontal: 10
  },
  body: {
    opacity: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 81
  }
});
