import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform,
} from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.logo}>Lumina</Text>
          </View>

          <View style={styles.main}>
            <View style={styles.card}>
              {/* Title */}
              <View style={styles.titleSection}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>
                  Join the next generation of AI-assisted{'\n'}productivity.
                </Text>
              </View>

              {/* Form */}
              <View style={styles.form}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>FULL NAME</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Alex Rivers"
                    placeholderTextColor="#76758666"
                    value={name}
                    onChangeText={setName}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>EMAIL</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="alex@lumina.ai"
                    placeholderTextColor="#76758666"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>PASSWORD</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="••••••••"
                    placeholderTextColor="#76758666"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                </View>

                {/* Terms */}
                <TouchableOpacity style={styles.termsRow} onPress={() => setAgreed(!agreed)}>
                  <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
                    {agreed && <Text style={styles.checkmark}>✓</Text>}
                  </View>
                  <Text style={styles.termsText}>
                    I agree to the{' '}
                    <Text style={styles.termsLink}>Terms of Service</Text>
                    {' '}and{' '}
                    <Text style={styles.termsLink}>Privacy Policy.</Text>
                  </Text>
                </TouchableOpacity>

                {/* Button */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('OTP', { email })}
                >
                  <Text style={styles.buttonText}>Create Account  →</Text>
                </TouchableOpacity>
              </View>

              {/* Login link */}
              <View style={styles.loginRow}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.loginLink}>Log In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 LUMINA INTELLIGENCE SYSTEMS</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: {
    height: 64, backgroundColor: '#f9f9f9',
    paddingHorizontal: 24, justifyContent: 'center', alignItems: 'center',
  },
  logo: { fontSize: 20, fontWeight: '700', color: '#4648d4', letterSpacing: -1 },
  main: { flex: 1, paddingHorizontal: 16, paddingVertical: 8 },
  card: {
    backgroundColor: '#ffffffb2', borderRadius: 32,
    padding: 32, borderWidth: 1, borderColor: '#ffffff66',
  },
  titleSection: { alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 30, fontWeight: '700', color: '#1a1c1c', letterSpacing: -0.75, lineHeight: 36 },
  subtitle: { fontSize: 14, color: '#464554', textAlign: 'center', lineHeight: 20, marginTop: 8 },
  form: { gap: 16 },
  inputGroup: { gap: 6 },
  label: { fontSize: 11, fontWeight: '700', color: '#464554', letterSpacing: 0.55 },
  input: {
    backgroundColor: '#ffffff', borderRadius: 12,
    paddingHorizontal: 16, paddingVertical: 18, fontSize: 16, color: '#1a1c1c',
  },
  termsRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 8 },
  checkbox: {
    width: 20, height: 20, borderRadius: 2,
    borderWidth: 1.5, borderColor: '#c7c4d7',
    backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center',
  },
  checkboxChecked: { backgroundColor: '#4648d4', borderColor: '#4648d4' },
  checkmark: { color: '#ffffff', fontSize: 12 },
  termsText: { flex: 1, fontSize: 14, color: '#464554', lineHeight: 20 },
  termsLink: { color: '#4648d4', fontWeight: '600' },
  button: {
    backgroundColor: '#4648d4', borderRadius: 12,
    paddingVertical: 16, alignItems: 'center', marginTop: 8,
  },
  buttonText: { fontSize: 16, fontWeight: '700', color: '#ffffff', lineHeight: 24 },
  loginRow: {
    flexDirection: 'row', justifyContent: 'center',
    alignItems: 'center', marginTop: 24, paddingTop: 24,
    borderTopWidth: 1, borderTopColor: '#c7c4d71a',
  },
  loginText: { fontSize: 14, color: '#464554' },
  loginLink: { fontSize: 14, fontWeight: '700', color: '#4648d4' },
  footer: { paddingVertical: 24, alignItems: 'center' },
  footerText: { fontSize: 10, color: '#76758699', letterSpacing: 1 },
});
