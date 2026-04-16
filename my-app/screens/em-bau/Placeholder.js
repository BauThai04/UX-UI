import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function Placeholder({ route, navigation }) {
  const name = route?.name || 'Screen';
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.sub}>Coming soon...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', alignItems: 'center', justifyContent: 'center' },
  back: { position: 'absolute', top: 60, left: 24 },
  backText: { fontSize: 16, color: '#4648d4', fontWeight: '600' },
  title: { fontSize: 24, fontWeight: '700', color: '#1a1c1c', marginBottom: 8 },
  sub: { fontSize: 14, color: '#767586' },
});
