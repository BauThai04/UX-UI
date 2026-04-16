import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function LoginSuccessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        {/* Badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>✓  AUTHENTICATED</Text>
        </View>

        {/* Welcome */}
        <Text style={styles.title}>Welcome back,{'\n'}Alex!</Text>
        <Text style={styles.subtitle}>
          Mọi thứ đã sẵn sàng cho{'\n'}phiên làm việc hiệu quả của bạn.
        </Text>

        {/* Logo card */}
        <View style={styles.logoCard}>
          <Text style={styles.logoText}>MT APP</Text>
        </View>
      </View>

      {/* Bottom actions */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.buttonText}>Go to Dashboard  →</Text>
        </TouchableOpacity>
        <View style={styles.syncRow}>
          <Text style={styles.syncText}>Đồng bộ tasks...</Text>
          <View style={styles.dots}>
            <View style={[styles.dot, { opacity: 1 }]} />
            <View style={[styles.dot, { opacity: 0.4 }]} />
            <View style={[styles.dot, { opacity: 0.2 }]} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  main: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  badge: {
    backgroundColor: '#4648d41a', borderRadius: 9999,
    paddingHorizontal: 16, paddingVertical: 6, marginBottom: 24,
    flexDirection: 'row', alignItems: 'center',
  },
  badgeText: { fontSize: 12, fontWeight: '600', color: '#4648d4', letterSpacing: 1.2 },
  title: {
    fontSize: 36, fontWeight: '800', color: '#1a1c1c',
    textAlign: 'center', letterSpacing: -0.9, lineHeight: 45, marginBottom: 16,
  },
  subtitle: {
    fontSize: 18, color: '#464554', textAlign: 'center', lineHeight: 29,
  },
  logoCard: {
    marginTop: 40, backgroundColor: '#ffffffb2', borderRadius: 16,
    paddingHorizontal: 16, paddingVertical: 16,
    borderWidth: 1, borderColor: '#ffffff33',
  },
  logoText: { fontSize: 30, fontWeight: '700', color: '#4648d4' },
  actions: { paddingHorizontal: 32, paddingBottom: 32 },
  button: {
    backgroundColor: '#4648d4', borderRadius: 12,
    paddingVertical: 18, alignItems: 'center', marginBottom: 24,
  },
  buttonText: { fontSize: 18, fontWeight: '600', color: '#ffffff', lineHeight: 28 },
  syncRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 },
  syncText: { fontSize: 14, fontWeight: '500', color: '#464554' },
  dots: { flexDirection: 'row', gap: 10 },
  dot: { width: 6, height: 6, borderRadius: 9999, backgroundColor: '#4648d4' },
});
