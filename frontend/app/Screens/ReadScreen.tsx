import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppColors } from '@/constants/Colors';

const ReadScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Add search functionality here if needed
    alert(`Searching for: ${searchQuery}`);
  };

  const handleShare = () => {
    // Add share functionality here if needed
    alert('Share your day');
  };

  const handleInsights = () => {
    // Add insights functionality here if needed
    alert('View your daily insights');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
          <View style={styles.content}>
    <View style={styles.notificationContainer}>
              {/* <View style={styles.notificationIcon}>
                <Ionicons name="notifications-outline" size={24} color="black" />
              </View> */}
            </View>
    <ScrollView style={styles.scrollView}
     showsVerticalScrollIndicator={false}
     showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchLabel}>What would you like to find?</Text>
          <View style={styles.searchBar}>
            <TouchableOpacity style={styles.searchIcon} onPress={handleSearch}>
              <Ionicons name="search" size={20} color="#f758e9ff" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search"
              placeholderTextColor="#f758e9ff"
            />
          </View>
        </View>
        {/* Existing button section */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.discoverButton}>
            <Text style={styles.buttonText}>Discover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.videoButton}>
            <Text style={styles.buttonText}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tipsButton}>
            <Text style={styles.buttonText}>Tips & Tricks</Text>
          </TouchableOpacity>
        </View>
        {/* Existing doctor section */}
        <View style={styles.doctorSection}>
            <View style={styles.doctorImageContainer}>
              <Text style={styles.greetingText}>
                7 Period Hacks That are Better Than Nothing
                <View style={styles.insideDocSection}>
                  <Text style={styles.doctorTag}>Video</Text>
                  <Text style={styles.doctorTag}>Article</Text>
                </View>
              </Text>
              <Image
                source={require('../../assets/images/doctor.png')}
                style={styles.doctorImage}
              />
           </View>
        </View>
        {/* Existing insights section */}
        <View style={styles.insights}>
          <View style={styles.insightsSection}>
            <TouchableOpacity style={styles.insightsButton} onPress={handleInsights}>
              <Text style={styles.insightsText}>Exercise Body Yoga for Peroid</Text>
              <View style={styles.insideDocSection}>
                  <Text style={styles.insightsSectionTag}>Video</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={styles.insightsSection}>
            <TouchableOpacity style={styles.insightsButton} onPress={handleInsights}>
              <Text style={styles.insightsText}>Keep the Mood Good Food</Text>
              <View style={styles.insideDocSection}>
                  <Text style={styles.insightsSectionTag}>Article</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={styles.insightsSection}>
            <TouchableOpacity style={styles.insightsButton} onPress={handleInsights}>
              <Text style={styles.insightsText}>Exercise Body Yoga for Peroid</Text>
              <View style={styles.insideDocSection}>
                  <Text style={styles.insightsSectionTag}>Video</Text>
                </View>
            </TouchableOpacity>
          </View>
          <View style={styles.insightsSection}>
            <TouchableOpacity style={styles.insightsButton} onPress={handleInsights}>
              <Text style={styles.insightsText}>Keep the Mood Good Food</Text>
              <View style={styles.insideDocSection}>
                  <Text style={styles.insightsSectionTag}>Article</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%',
  },
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
  notificationContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  notificationIcon: {
    marginTop: 35,
    marginRight: 10,
    padding: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 70,
  },
  searchContainer: {
    width: '100%',
    maxWidth: 400,
  },
  searchLabel: {
    fontSize: 28,
    color: '#666',
    marginBottom: 10,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'transparent',
  },
  searchIcon: {
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  discoverButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  videoButton: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  tipsButton: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFE4E1',
    fontWeight: 'bold',
  },
  doctorImageContainer: {
    flexDirection: 'row',

  },
  doctorSection: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
    width: '65%',
    paddingHorizontal: 15,
  },
  insideDocSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:15,
    marginTop: 10,
  },
  doctorTag: {
    fontSize: 12,
    color: '#FFE4E1',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#FFF',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  shareText: {
    fontSize: 16,
    color: '#000',
    marginRight: 10,
  },
  insights: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    gap:10,
    marginTop: 20,
  },
  insightsSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  insightsButton: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    height: 130,
    width: 160,
  },
  insightsText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginRight: 10,
  },
  insightsSectionTag: {
        fontSize: 12,
        color: '#FFE4E1',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginTop: 25,
    },
});

export default ReadScreen;
