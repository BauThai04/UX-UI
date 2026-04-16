import React, { useState, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';

export default function OTPScreen({ navigation, route }) {
  const email = route?.params?.email || 'alex@lumina.ai';
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 3) inputs[index + 1].current.focus();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Security</Text>
      </View>

      <View style={styles.main}>
        {/* Title */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Verify Identity</Text>
          <Text style={styles.subtitle}>
            We've sent a 4-digit code to your email{'\n'}
            <Text style={styles.emailHighlight}>{email}</Text>
            {'. Enter it below to continue.'}
          </Text>
        </View>

        {/* OTP inputs */}
        <View style={styles.otpRow}>
          {otp.map((digit, i) => (
            <TextInput
              key={i}
              ref={inputs[i]}
              style={styles.otpInput}
              value={digit}
              onChangeText={(t) => handleChange(t.slice(-1), i)}
              keyboardType="number-pad"
              maxLength={1}
              secureTextEntry
            />
          ))}
        </View>

        {/* Resend */}
        <Text style={styles.resendText}>
          Didn't receive the code?{' '}
          <Text style={styles.resendLink}>Resend in 00:59</Text>
        </Text>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LoginSuccess')}
        >
          <Text style={styles.buttonText}>Verify & Continue  →</Text>
        </TouchableOpacity>

        <Text style={styles.secureText}>SECURELY ENCRYPTED BY LUMINA AI</Text>
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
    width: 40, height: 40, borderRadius: 9999,
    backgroundColor: '#f3f3f3', alignItems: 'center', justifyContent: 'center',
  },
  backIcon: { fontSize: 18, color: '#4f46e5' },
  headerTitle: { fontSize: 16, fontWeight: '600', color: '#4f46e5', marginLeft: 12 },
  main: { flex: 1, paddingHorizontal: 24, paddingTop: 40 },
  titleSection: { marginBottom: 40 },
  title: { fontSize: 30, fontWeight: '800', color: '#1a1c1c', letterSpacing: -0.75, lineHeight: 36 },
  subtitle: { fontSize: 16, color: '#464554', lineHeight: 26, marginTop: 12 },
  emailHighlight: { color: '#4648d4', fontWeight: '600' },
  otpRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  otpInput: {
    width: 64, height: 64, borderRadius: 12,
    backgroundColor: '#ffffff', textAlign: 'center',
    fontSize: 24, fontWeight: '700', color: '#6b7280',
  },
  resendText: { fontSize: 14, color: '#464554', textAlign: 'center', marginBottom: 48 },
  resendLink: { color: '#4648d4', fontWeight: '600' },
  button: {
    backgroundColor: '#4648d4', borderRadius: 12,
    paddingVertical: 18, alignItems: 'center', marginBottom: 16,
  },
  buttonText: { fontSize: 18, fontWeight: '600', color: '#ffffff', lineHeight: 28 },
  secureText: {
    fontSize: 12, fontWeight: '500', color: '#767586',
    textAlign: 'center', letterSpacing: 1.2,
  },
});
