import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  //ใช้ useEffect เพื่อหน่วงเวลาในการโหลดหน้าจอหลัก
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/bmi');
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/bmiLogo.png')}
        style={styles.imgLogo}
      />
      <Text style={[styles.appName, {fontSize: 40}]}>BMI Calculator</Text>
      <Text style={[styles.appName, {fontSize: 20}]}>คำนวณ BMI</Text>
      <ActivityIndicator size="large" color="#0000ff" style={{marginTop: 20}} />
    </View>
  )
}

const styles = StyleSheet.create({
  appName: {
    color: '#333',
    marginTop: 10,
    fontFamily: 'prompt_700Bold',
  },
  imgLogo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6F4FE',
  }
})