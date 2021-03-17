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
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 20 }}>
                            <Text style={{
                                width: 28, height: 20, fontSize: 14, marginRight: 8,
                                fontWeight: '500', color: '#666666', lineHeight: 20
                            }}>中文</Text>
                            <Image
                              source={require('./src/images/down.png')}
                              style={{ width: 14, height: 8 }}
                            />
                        </View>
                    </View>
                    <Text style={{
                        width: 72, height: 33, opacity: 1, fontSize: 24, fontWeight: '600',
                        marginLeft: 80, marginBottom: 50, color: 'rgba(0,0,0,0.85)', lineHeight: 33
                    }}>
                        中债云
          </Text>
                    <Text style={{
                        width: 90, height: 25, opacity: 1, fontSize: 18, fontWeight: '400',
                        marginLeft: 37, marginBottom: 70, color: 'rgba(0,0,0,0.85)', lineHeight: 25
                    }}>
                        手机号登陆
          </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 }}>
                        <TextInput
                          autoFocus
                          fontSize={14}
                          inputColor="rgba(255,255,255,0.0)"
                          key="pass"
                          placeholder={'手机号'}
                          placeholderTextColor={'#cccccc'}
                        />
                        <TouchableWithoutFeedback style={{ marginRight: 10 }} >
                            <Image
                              source={require('./src/images/cancel.png')}
                              style={{ width: 16, height: 16 }}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                        <TextInput
                          fontSize={14}
                          inputColor="rgba(255,255,255,0.0)"
                          placeholder={'密码'}
                          placeholderTextColor={'#cccccc'}
                        />
                        <TouchableWithoutFeedback style={{ marginRight: 10 }} >
                            <Image
                              source={require('./src/images/visible.png')}
                              style={{ width: 15, height: 5 }}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{
                            width: 72, height: 17, opacity: 1, fontSize: 12, fontWeight: '400',
                            color: '#333333', lineHeight: 17
                        }}>
                            邮箱账号登录
            </Text>
                        <Text style={{
                            width: 48, height: 17, opacity: 1, fontSize: 12, fontWeight: '400',
                            color: '#8f1d22', lineHeight: 17
                        }}>
                            忘记密码
            </Text>
                    </View>
                    <TouchableOpacity style={{
                        height: 44, marginTop: 39, opacity: 1,
                        backgroundColor: 'rgba(143,29,34,0.30)', borderRadius: 5
                    }}>
                        <Text style={{
                            opacity: 1, fontSize: 18, fontWeight: '500',
                            color: '#ffffff', lineHeight: 44, textAlign: 'center'
                        }}>
                            登录
              </Text>
                    </TouchableOpacity>
                    <View style={{ position: 'absolute', bottom: 20, left: '50%' }}>
                        <Text style={{
                            height: 20, fontSize: 14, fontWeight: '500',
                            color: '#8f1d22', lineHeight: 20, textAlign: 'center'
                        }}>
                            注册
            </Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        paddingHorizontal: 10,
        opacity: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        height: 98,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
