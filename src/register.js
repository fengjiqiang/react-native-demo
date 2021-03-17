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
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 20 }}>
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
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 41 }}>
                        <Text style={{
                            fontSize: 18, fontWeight: '500', color: '#333333', lineHeight: 20
                        }}>
                            +86
            </Text>
                        <Image
                          source={require('./src/images/down.png')}
                          style={{ marginLeft: 6, marginRight: 16, width: 12, height: 7 }}
                        />
                        <TextInput
                          autoFocus
                          fontSize={16}
                          key="pass"
                          placeholder={'手机号'}
                          placeholderTextColor={'#cccccc'}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 }}>
                        <TextInput
                          fontSize={16}
                          placeholder={'短信验证码'}
                          placeholderTextColor={'#cccccc'}
                        />
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 14, fontWeight: '400', color: '#8f1d22', lineHeight: 17
                            }}>
                                发送验证码
              </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                        <TextInput
                          autoCapitalize="none"
                          fontSize={16}
                          placeholder={'设置登录密码'}
                          placeholderTextColor={'#cccccc'}
                          secureTextEntry
                        />
                        <TouchableWithoutFeedback style={{ marginRight: 10 }} >
                            <Image
                              source={require('./src/images/visible.png')}
                              style={{ width: 15, height: 5 }}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <TouchableOpacity style={{
                        height: 44, marginTop: 39, opacity: 1,
                        backgroundColor: 'rgba(143,29,34,0.30)', borderRadius: 5
                    }}>
                        <Text style={{
                            opacity: 1, fontSize: 18, fontWeight: '500',
                            color: '#ffffff', lineHeight: 44, textAlign: 'center'
                        }}>
                            下一步
              </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        opacity: 1,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 81
    }
});
