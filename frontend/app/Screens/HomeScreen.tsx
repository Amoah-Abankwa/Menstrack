import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppColors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native'; 
import type { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Insights: undefined;
 
};

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Insights'>>(); 

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Image
              source={require('../../assets/images/profile.jpg')} 
              style={styles.profileImage}
            />
            <View style={styles.verifiedIcon}>
              <Ionicons name="checkmark-circle" size={20} color="#FF69B4" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.greeting}>Good Morning,</Text>
              <Text style={styles.name}>Joy!</Text>
            </View>
          </View>
          <View style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
        </View>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.contentContainer}>
            <View style={styles.calendar}>
              <View style={styles.dayRow}>
                <Text style={styles.day}>M</Text>
                <Text style={styles.day}>T</Text>
                <Text style={styles.day}>W</Text>
                <Text style={styles.day}>T</Text>
                <Text style={styles.day}>F</Text>
                <Text style={styles.day}>S</Text>
                <Text style={styles.day}>S</Text>
              </View>
              <View style={styles.dateRow}>
                <TouchableOpacity style={styles.date}>
                  <Text style={styles.dateText}>22</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.date, styles.selectedDate]}>
                  <Text style={styles.dateText}>23</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.date}>
                  <Text style={styles.dateText}>24</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.date}>
                  <Text style={styles.dateText}>25</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.date}>
                  <Text style={styles.dateText}>26</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.date}>
                  <Text style={styles.dateText}>27</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.date}>
                  <Text style={styles.dateText}>28</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cycleInfo}>
              <Text style={styles.cycleTitle}>Current Cycle</Text>
              <Text style={styles.cycleDay}>Day 2</Text>
              <Text style={styles.cycleStatus}>Low Chance of getting Pregnant</Text>
            </View>
            <View style={styles.greetingBox}>
              <Text style={styles.greetingText}>Hello Joy, How are you feeling today?</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Image
                  source={require('../../assets/images/doc.jpg')} 
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>Share with us your day</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Insights')} 
              >
                <Image
                  source={require('../../assets/images/bulb.jpg')} 
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>Your daily insights</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </TouchableOpacity>
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
  container: {
    flex: 1,
    backgroundColor: AppColors.background.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: AppColors.background.tertiary,
    width: '100%',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  verifiedIcon: {
    position: 'absolute',
    bottom: 0,
    left: 35,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 2,
  },
  textContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 16,
    color: '#000',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: AppColors.text.main,
  },
  notificationIcon: {
    padding: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  scrollView: {
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
  },
  calendar: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 10,
    width: '90%',
    alignSelf: 'center',
  },
  dayRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  day: {
    fontSize: 14,
    color: '#666',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  date: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  selectedDate: {
    backgroundColor: AppColors.text.main,
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  cycleInfo: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#FFF',
    borderRadius: 150,
    marginTop: 5,
    marginBottom: 5,
    margin: 20,
    shadowColor: AppColors.text.main,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.1,
    shadowRadius: 10,
    elevation: 5,
    width: 250,
    height: 250,
    justifyContent: 'center',
  },
  cycleTitle: {
    fontSize: 20,
    color: '#666',
    fontWeight: '700',
    marginBottom: 5,
  },
  cycleDay: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  cycleStatus: {
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
    fontWeight: '500',
  },
  greetingBox: {
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: '90%',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 22,
    paddingHorizontal: 30,
    color: '#808080',
    textAlign: 'left',
  },
  buttonContainer: {
    width: '90%',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 80,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFE4E1',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 10,
  },
  buttonText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
  },
  addButton: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    color: AppColors.text.main,
    fontWeight: 'bold',
  },
  contentContainer: {
    backgroundColor: '#FFF',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    marginBottom: 0,
  },
});

export default HomeScreen;
