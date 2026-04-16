import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reset Password</Text>
        <Text style={styles.logo}>Lumina</Text>
      </View>

      <View style={styles.main}>
        {/* Title */}
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>
          Enter your email address and we'll send{'\n'}
          you instructions to reset your password.
        </Text>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>EMAIL ADDRESS</Text>
          <TextInput
            style={styles.input}
            placeholder="alex@lumina.ai"
            placeholderTextColor="#76758680"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Send Reset Link  →</Text>
          </TouchableOpacity>
        </View>

        {/* Footer links */}
        <View style={styles.footerLinks}>
          <TouchableOpacity style={styles.helpBtn}>
            <Text style={styles.helpText}>🔒  Need help? Contact Support</Text>
          </TouchableOpacity>
          <Text style={styles.secureText}>SECURED BY LUMINA AI ENCRYPTION</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: {
    height: 72, flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 24, backgroundColor: '#f9f9f9',
  },
  backBtn: {
    width: 32, height: 32, borderRadius: 9999,
    backgroundColor: '#f3f3f3', alignItems: 'center', justifyContent: 'center',
  },
  backIcon: { fontSize: 16, color: '#4f46e5' },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#4f46e5', marginLeft: 12, flex: 1 },
  logo: { fontSize: 20, fontWeight: '700', color: '#4f46e5', letterSpacing: -1 },
  main: { flex: 1, paddingHorizontal: 24, paddingTop: 32 },
  title: {
    fontSize: 36, fontWeight: '800', color: '#1a1c1c',
    letterSpacing: -0.9, lineHeight: 45, marginBottom: 16,
  },
  subtitle: { fontSize: 18, color: '#464554', lineHeight: 29, marginBottom: 40 },
  form: { gap: 12 },
  label: { fontSize: 12, fontWeight: '600', color: '#464554', letterSpacing: 0.6 },
  input: {
    backgroundColor: '#ffffff', borderRadius: 12,
    paddingHorizontal: 20, paddingVertical: 18, fontSize: 16, color: '#1a1c1c',
  },
  button: {
    backgroundColor: '#4648d4', borderRadius: 12,
    paddingVertical: 16, alignItems: 'center', marginTop: 8,
  },
  buttonText: { fontSize: 18, fontWeight: '700', color: '#ffffff', lineHeight: 28 },
  footerLinks: { marginTop: 48, alignItems: 'center', gap: 16 },
  helpBtn: {
    backgroundColor: '#f3f3f3', borderRadius: 9999,
    paddingHorizontal: 16, paddingVertical: 8,
  },
  helpText: { fontSize: 14, fontWeight: '600', color: '#4648d4' },
  secureText: { fontSize: 12, fontWeight: '500', color: '#767586', letterSpacing: 0.3 },
});
