import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { AppColors } from '../../constants/Colors';

const CalenderScreen = () => {
  const today = new Date('2025-08-05T20:23:00Z'); // August 5, 2025, 08:23 PM GMT
  const [currentMonth] = useState(today.getMonth());
  const [currentYear] = useState(today.getFullYear());

  const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const totalDays = getDaysInMonth(currentMonth, currentYear);
  const firstDayIndex = getFirstDayOfMonth(currentMonth, currentYear);

  const dates: (number | null)[] = []; 
  for (let i = 0; i < firstDayIndex; i++) {
    dates.push(null);
  }
  for (let day = 1; day <= totalDays; day++) {
    dates.push(day);
  }
  while (dates.length % 7 !== 0) {
    dates.push(null);
  }

  const getDateStyle = (date: number | null) => {
    if (date === null) return styles.emptyDate;
    const fullDate = new Date(currentYear, currentMonth, date);
    if (fullDate.toDateString() === today.toDateString()) return [styles.date, styles.today];

    // Check for range-based colors
    if (date >= 1 && date <= 3) return [styles.date, styles.fertileDate]; 
    if (date >= 15 && date <= 19) return [styles.date, styles.periodDate]; 
    if (date === 11) return [styles.date, styles.ovulationDate]; 
    return styles.date;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.notificationContainer}>
          <View style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
        </View>
        <ScrollView style={styles.scrollView} 
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.background}>
              <View style={styles.header}>
                <View style={styles.dropdownContainer}>
                  <TouchableOpacity style={styles.dropdown}>
                    <Text style={styles.dropdownText}>
                      {today.toLocaleString('default', { month: 'long' })}
                    </Text>
                    <Ionicons name="chevron-down" size={16} color="#000" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.dropdown}>
                    <Text style={styles.dropdownText}>{today.getFullYear()}</Text>
                    <Ionicons name="chevron-down" size={16} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.calendar}>
                <View style={styles.dayRow}>
                  {days.map((day, index) => (
                    <Text key={index} style={styles.dayText}>{day}</Text>
                  ))}
                </View>
                {Array.from({ length: Math.ceil(dates.length / 7) }, (_, i) => (
                  <View key={i} style={styles.dateRow}>
                    {dates.slice(i * 7, (i + 1) * 7).map((date, index) => (
                      <TouchableOpacity
                        key={index}
                        style={getDateStyle(date)}
                        onPress={() => date && alert(`Selected date: ${date}`)}
                        disabled={!date}
                      >
                        {date && <Text style={styles.dateText}>{date}</Text>}
                      </TouchableOpacity>
                    ))}
                  </View>
                ))}
              </View>
              <TouchableOpacity style={styles.editButton} onPress={() => alert('Edit dates')}>
                <View style={styles.editDates}>
                  <Text style={styles.editText}>Edit Dates</Text>
                </View>
                <View style={styles.editIcon}>
                  <Feather name="edit-3" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.legendContainer}>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, styles.fertileColor]} />
                <Text style={styles.legendText}>Fertile</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, styles.periodColor]} />
                <Text style={styles.legendText}>Period</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, styles.ovulationColor]} />
                <Text style={styles.legendText}>Ovulation</Text>
              </View>
            </View>
            {/* New section based on the image */}
            <View style={styles.nextEventsContainer}>
              <TouchableOpacity style={styles.nextEventButton}>
                <View style={styles.nextEventArrow}>
                  <Text style={styles.nextEventText}>Next Fertile</Text>
                  <Ionicons name="chevron-down" size={16} color="#000" />
                </View>
                <Text style={styles.nextEventDate}>14 September</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.nextEventButton}>
                <View style={styles.nextEventArrow}>
                  <Text style={styles.nextEventText}>Next Period</Text>
                  <Ionicons name="chevron-down" size={16} color="#000" />
                </View>
                <Text style={styles.nextEventDate}>26 September</Text>
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
  content: {
    flex: 1,
    backgroundColor: AppColors.background.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    paddingBottom: 70,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
  background: {
    width: '90%', 
    backgroundColor: AppColors.background.main,
    borderRadius: 15, 
    padding: 15, 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10, 
    alignItems: 'center',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 10,
  },
  dropdownText: {
    fontSize: 14,
    color: '#000',
    marginRight: 5,
  },
  calendar: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 10,
    width: '100%', 
  },
  dayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderColor: AppColors.border.light,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  dayText: {
    fontSize: 14,
    color: AppColors.text.light,
    fontWeight: '500',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  date: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyDate: {
    width: 30,
    height: 30,
  },
  today: {
    borderWidth: 2,
    borderColor: '#000',
  },
  fertileDate: {
    backgroundColor: '#98FF98',
  },
  periodDate: {
    backgroundColor: '#FF69B4',
  },
  ovulationDate: {
    backgroundColor: '#FFA500',
  },
  dateText: {
    fontSize: 14,
    color: '#000',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    backgroundColor: 'transparent',
    borderColor: AppColors.border.light,
    borderWidth: 1,
    padding: 0,
    borderRadius: 10,
    marginTop: 0,
    paddingLeft: 100,
  },
  editText: {
    fontSize: 16,
    color: '#000',
    marginRight: 5,
  },
  editDates: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    padding: 5,
    borderColor: AppColors.border.light,
    borderWidth: 1,
    borderRadius: 10,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 15,
    marginRight: 5,
  },
  fertileColor: {
    backgroundColor: '#98FF98',
  },
  periodColor: {
    backgroundColor: '#FF69B4',
  },
  ovulationColor: {
    backgroundColor: '#FFA500',
  },
  legendText: {
    fontSize: 14,
    color: '#000',
  },
  nextEventsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 20,
    width: '80%',
    marginTop: 10,
  },
  nextEventArrow: {
    flexDirection: 'row',
  },
  nextEventButton: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  nextEventText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  nextEventDate: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default CalenderScreen;
