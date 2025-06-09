import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native-web";
import "../App.css";
import CustomIcon from "../components/CustomIcon.jsx";

const PetHealthDashboardScreen = () => {
  // Sample health data
  const healthData = {
    weight: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [15, 15.2, 15.1, 15.3, 15.4, 15.5]},
      ]},
    activity: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: [2000, 2500, 3000, 2800, 3200, 3500, 3800]},
      ]},
    heartRate: {
      labels: ['10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
      datasets: [
        {
          data: [120, 110, 125, 115, 120, 118]},
      ]}};

  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    style: {
      borderRadius: 16}};

  return (
    <div className="container">
      <View style={styles.header}>
        <Text style={styles.title}>Pet Health Dashboard</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weight Tracking</Text>
          <View style={styles.chartContainer}>
            <View style={styles.lineChart}>
              {healthData.weight.datasets[0].data.map((value, index) => (
                <View key={index} style={[
                  styles.linePoint,
                  { left: `${(index / (healthData.weight.labels.length - 1)) * 100}%` },
                  { top: `${100 - (value / Math.max(...healthData.weight.datasets[0].data) * 100)}%` }
                ]}>
                  <View style={styles.linePointDot} />
                </View>
              ))}
              {healthData.weight.labels.map((label, index) => (
                <Text
                  key={label}
                  style={[
                    styles.chartLabel,
                    { left: `${(index / (healthData.weight.labels.length - 1)) * 100}%` }
                  ]}
                >
                  {label}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Activity Levels</Text>
          <View style={styles.chartContainer}>
            <View style={styles.lineChart}>
              {healthData.activity.datasets[0].data.map((value, index) => (
                <View key={index} style={[
                  styles.linePoint,
                  { left: `${(index / (healthData.activity.labels.length - 1)) * 100}%` },
                  { top: `${100 - (value / Math.max(...healthData.activity.datasets[0].data) * 100)}%` }
                ]}>
                  <View style={styles.linePointDot} />
                </View>
              ))}
              {healthData.activity.labels.map((label, index) => (
                <Text
                  key={label}
                  style={[
                    styles.chartLabel,
                    { left: `${(index / (healthData.activity.labels.length - 1)) * 100}%` }
                  ]}
                >
                  {label}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Heart Rate</Text>
          <View style={styles.chartContainer}>
            <View style={styles.lineChart}>
              {healthData.heartRate.datasets[0].data.map((value, index) => (
                <View key={index} style={[
                  styles.linePoint,
                  { left: `${(index / (healthData.heartRate.labels.length - 1)) * 100}%` },
                  { top: `${100 - (value / Math.max(...healthData.heartRate.datasets[0].data) * 100)}%` }
                ]}>
                  <View style={styles.linePointDot} />
                </View>
              ))}
              {healthData.heartRate.labels.map((label, index) => (
                <Text
                  key={label}
                  style={[
                    styles.chartLabel,
                    { left: `${(index / (healthData.heartRate.labels.length - 1)) * 100}%` }
                  ]}
                >
                  {label}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Health Tips</Text>
          <View style={styles.tipsContainer}>
            <View style={styles.tipItem}>
              <CustomIcon name="check-circle" size={20} color="#007AFF" />
              <Text style={styles.tipText}>
                Maintain regular exercise schedule
              </Text>
            </View>
            <View style={styles.tipItem}>
              <CustomIcon name="check-circle" size={20} color="#007AFF" />
              <Text style={styles.tipText}>
                Monitor water intake
              </Text>
            </View>
            <View style={styles.tipItem}>
              <CustomIcon name="check-circle" size={20} color="#007AFF" />
              <Text style={styles.tipText}>
                Regular vet checkups
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'},
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'},
  title: {
    fontSize: 24,
    fontWeight: 'bold'},
  content: {
    flex: 1,
    padding: 16},
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4},
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16},
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5},
  lineChart: {
    position: 'relative',
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden'},
  linePoint: {
    position: 'absolute',
    width: 8,
    height: 8},
  linePointDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
    position: 'absolute',
    left: 0,
    top: 0},
  chartLabel: {
    position: 'absolute',
    bottom: -20,
    color: '#666',
    fontSize: 12,
    textAlign: 'center'},
  tipsContainer: {
    marginTop: 16},
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12},
  tipText: {
    marginLeft: 12,
    fontSize: 16}});

export default PetHealthDashboardScreen;
