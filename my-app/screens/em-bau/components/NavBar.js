import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NAV_ITEMS = [
  { label: 'Home', icon: '⊟', screen: 'DashboardToday' },
  { label: 'Tasks', icon: '≡', screen: 'TaskStatus' },
  { label: 'PROJECT', icon: '◫', screen: 'ProjectProgress' },
  { label: 'Insights', icon: '↗', screen: 'BurndownChart' },
  { label: 'Settings', icon: '⚙', screen: 'AlertSettings' },
];

export default function NavBar({ navigation, active }) {
  return (
    <View style={styles.navbar}>
      {NAV_ITEMS.map((item) => {
        const isActive = item.label === active;
        return (
          <TouchableOpacity
            key={item.label}
            style={styles.navItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={[styles.navIcon, isActive && styles.navIconActive]}>
              {item.icon}
            </Text>
            <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: '#e0e3e5',
  },
  navItem: { flex: 1, alignItems: 'center', gap: 2 },
  navIcon: { fontSize: 16, color: '#a1a1aa' },
  navIconActive: { color: '#1515ff' },
  navLabel: { fontSize: 10, fontWeight: '700', color: '#a1a1aa', letterSpacing: 0.5 },
  navLabelActive: { color: '#1515ff' },
});
