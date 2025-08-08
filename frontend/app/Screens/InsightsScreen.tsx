import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppColors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native'; 

const InsightsScreen = () => {
  const navigation = useNavigation(); 

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Insights</Text>
          <View style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
        </View>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.menstrualBackground}>
              <View style={styles.menstrualMainText}>Menstrual Flow</View>
              <View style={styles.menstrualContainer}>
                <View style={styles.menstrualSection}>
                  <TouchableOpacity style={styles.menstrualButton} onPress={() => alert('Light Flow Tips')}>
                    <Image
                      source={require('../../assets/images/png/singleblood.png')} 
                      style={styles.menstrualImage}
                    />
                    <Text style={styles.menstrualText}>Light</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.menstrualSection}>
                  <TouchableOpacity style={styles.menstrualButton} onPress={() => alert('Medium Flow Tips')}>
                    <Image
                      source={require('../../assets/images/png/doubleblood.png')} 
                      style={styles.menstrualImage}
                    />
                    <Text style={styles.menstrualText}>Medium</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.menstrualSection}>
                  <TouchableOpacity style={styles.menstrualButton} onPress={() => alert('Heavy Flow Tips')}>
                    <Image
                      source={require('../../assets/images/png/heavyblood.png')} 
                      style={styles.menstrualImage}
                    />
                    <Text style={styles.menstrualText}>Heavy</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.background.tertiary,
  },
  content: {
    flex: 1,
    backgroundColor: AppColors.background.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationIcon: {
    padding: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  menstrualBackground: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 25,
    width: '90%',
    alignItems: 'center', 
    marginBottom: 20,
  },
  menstrualContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 5,
    width: '90%',
    marginBottom: 20,
  },
  menstrualSection: {
    width: '33%', 
    marginBottom: 5,
    borderColor: AppColors.border.light,
    borderWidth: 1,
    borderRadius: 20,
  },
  menstrualButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 5,
    borderRadius: 20,
    width: '100%',
  },
  menstrualImage: {
    width: 20, 
    height: 20, 
    marginRight: 2, 
  },
  menstrualText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  menstrualMainText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
    paddingHorizontal: 15,
    fontFamily: 'Arial',
    alignSelf: 'flex-start', 
    width: '100%', 
  },
  menstrualTagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  menstrualTag: {
    fontSize: 12,
    color: '#FFE4E1',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#FFF',
    elevation: 2,
  },
});

export default InsightsScreen;
