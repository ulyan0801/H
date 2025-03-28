import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View } from 'react-native'
import Swiper from 'react-native-swiper';
import storage from '../../utils/storage';
import LoginPage from '../LoginPage';
import { Icon, MD3Colors, MD3LightTheme} from 'react-native-paper'
import { useTranslation } from 'react-i18next';




export default function Home({ navigation }) {
  const {t} = useTranslation()

  const topList = [
    {
      pageName: 'OrderPage',
      name: t("appointment"),
      bgColor: MD3Colors.secondary80,
      icon: 'clock-alert',
    },
    {
      pageName: 'DoctorPage',
      name: t("Doctor"),
      bgColor: MD3Colors.primary80,
      icon: 'account-circle',
    },
    // {
    //   pageName: 'MedicantPage',
    //   name: '药品查询',
    //   bgColor: '#0f0',
    //   icon: 'search-outline',
    // },
    {
      pageName: 'PrescripPage',
      name: t("Prescription"),
      bgColor: MD3Colors.neutral80,
      icon: 'briefcase-edit',
    }
  ]
  const gotoPage = (pageName) => {
    navigation.push(pageName);
  }

  const useUserData = () => {
    const [patientId,setPatientId] = useState('');
    storage.load({
      key: 'userData',
      autoSync: true,
    }).then(res => {
      if(res.patientId){
        setPatientId(res.patientId)
      }
    })
    return patientId;
  }

  const patientId = useUserData();
  if (!patientId) {
    // gotoPage('LoginPage')
    // navigation.navigate('LoginPage')
  }

  

  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Swiper style={styles.wrapperBox} showsButtons={false}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>

        <View style={styles.listBox}>
          {
            topList.map((item, index) => {
              return (
                <View style={styles.listItem} key={index} onTouchEnd={() => gotoPage(item?.pageName)}>
                  <View style={{ ...styles.listItemIcon, backgroundColor: item.bgColor }}>
                    <Icon source={item.icon} size={28} color={MD3Colors.primary0} />
                  </View>
                  <Text style={styles.listItemText}>{item.name}</Text>
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 14
  },
  listBox: {
    padding: 15,
    borderRadius: 20,
    marginTop: 14,
    backgroundColor: '#fff',
    elevation: 1, // 适配android的
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listItem: {
  },
  listItemIcon: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItemText: {
    marginTop: 5,
    textAlign: 'center'
  },
  wrapper: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  wrapperBox: {
    height: 200,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})