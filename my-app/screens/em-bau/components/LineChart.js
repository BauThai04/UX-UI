import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Polyline, Circle } from 'react-native-svg';

// Data points normalized to fit in viewBox 302x96
// Extracted from Figma Vector node positions
const POINTS_TODAY = [0,96, 48,72, 96,86, 144,32, 192,54, 240,16, 302,0];
const POINTS_WEEK  = [0,96, 48,80, 96,88, 144,40, 192,60, 240,20, 302,4];
const POINTS_MONTH = [0,96, 48,76, 96,84, 144,36, 192,56, 240,12, 302,2];

const DOTS_TODAY = [[0,96],[48,72],[96,86],[144,32],[192,54],[240,16],[302,0]];
const DAYS = ['MON','TUE','WED','THU','FRI','SAT','SUN'];

export default function LineChart({ variant = 'today', onViewDetails, navigation }) {
  const pts = variant === 'today' ? POINTS_TODAY : variant === 'week' ? POINTS_WEEK : POINTS_MONTH;
  const dots = DOTS_TODAY;
  const pointsStr = pts.map((v, i) => (i % 2 === 0 ? v : 96 - v)).join(' ');

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Task Completion Trend</Text>
        <TouchableOpacity onPress={onViewDetails}>
          <Text style={styles.link}>View Details→</Text>
        </TouchableOpacity>
      </View>

      {/* SVG Chart */}
      <View style={styles.chartContainer}>
        <Svg width="302" height="112" viewBox="0 0 302 112">
          <Polyline
            points={pointsStr}
            fill="none"
            stroke="#4648d4"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {dots.map(([x, y], i) => (
            <Circle
              key={i}
              cx={x}
              cy={96 - y}
              r="4.5"
              fill="#4648d4"
            />
          ))}
        </Svg>
      </View>

      {/* X-axis labels */}
      <View style={styles.xAxis}>
        {DAYS.map((d) => (
          <Text key={d} style={styles.xLabel}>{d}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    paddingTop: 12,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: { fontSize: 14, fontWeight: '700', color: '#1a1c1c' },
  link: { fontSize: 14, fontWeight: '600', color: '#2c2abc' },
  chartContainer: { alignItems: 'center', marginBottom: 8 },
  xAxis: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 0 },
  xLabel: { fontSize: 10, fontWeight: '500', color: '#464554', letterSpacing: 1 },
});
