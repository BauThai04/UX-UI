import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, SafeAreaView,
} from 'react-native';
import NavBar from './components/NavBar';
import LineChart from './components/LineChart';

const METRICS = [
  { label: 'Total Tasks',  value: '100', icon: '📋', iconColor: '#2c2abc', sub: '+12% vs last week',     subColor: '#1d9681' },
  { label: 'Completed',    value: '75',  icon: '✅', iconColor: '#1d9681', sub: '75% completion rate',   subColor: '#464554' },
  { label: 'In Progress',  value: '17',  icon: '🕐', iconColor: '#0aa5e9', sub: '17% of total workload', subColor: '#464554' },
  { label: 'Overdue',      value: '8',   icon: '⚠️', iconColor: '#ba1a1a', sub: '8% needs attention',    subColor: '#ba1a1a' },
];

const TEAM = [
  { name: 'The Anh', activity: 'Finish Report 4h ago' },
  { name: 'Bau',     activity: 'Finish Weekly report 6h ago' },
  { name: 'Tuan',    activity: 'Finish Figma 7h ago' },
];

const TABS = [
  { label: 'Today',      screen: 'DashboardToday' },
  { label: 'This Week',  screen: 'DashboardWeek' },
  { label: 'This Month', screen: 'DashboardMonth' },
  { label: 'Custom',     screen: 'CustomMode' },
];

export default function DashboardWeek({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBlock}>
          <View style={styles.purpleBg} />

          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={styles.avatarBorder}>
                <View style={styles.avatar} />
              </View>
              <Text style={styles.headerTitle}>Insights</Text>
            </View>
            <View style={styles.headerBtn} />
          </View>

          <View style={styles.tabBar}>
            {TABS.map((tab) => {
              const isActive = tab.label === 'This Week';
              return (
                <TouchableOpacity
                  key={tab.label}
                  style={[styles.tab, isActive && styles.tabActive]}
                  onPress={() => navigation.navigate(tab.screen)}
                >
                  <Text style={[styles.tabText, isActive && styles.tabTextActive]}>{tab.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.metricsGrid}>
            {METRICS.map((m, i) => (
              <View key={i} style={styles.metricCard}>
                <View style={styles.accentBar} />
                <View style={styles.metricRow}>
                  <Text style={styles.metricLabel}>{m.label}</Text>
                  <Text style={{ color: m.iconColor, fontSize: 14 }}>{m.icon}</Text>
                </View>
                <Text style={styles.metricValue}>{m.value}</Text>
                <Text style={[styles.metricSub, { color: m.subColor }]}>{m.sub}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('ProjectProgress')}
        >
          <Text style={styles.ctaButtonText}>Details this week's tasks →</Text>
        </TouchableOpacity>

        <View style={styles.chartWrapper}>
          <LineChart variant="week" onViewDetails={() => navigation.navigate('TaskStatus')} />
        </View>

        <View style={styles.quickSection}>
          <View style={styles.quickRow}>
            <TouchableOpacity style={styles.quickBtn} onPress={() => navigation.navigate('WorkloadMembers')}>
              <Text style={styles.quickBtnText}>👥 Workload</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WorkloadMembers')}>
              <Text style={styles.viewMore}>View More</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickBtn} onPress={() => navigation.navigate('PriorityAnalysis')}>
              <Text style={styles.quickBtnText}>📊 Priority</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.quickRow2}>
            <TouchableOpacity style={styles.quickBtn} onPress={() => navigation.navigate('BurndownChart')}>
              <Text style={styles.quickBtnText}>🔥 Burndown</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickBtn} onPress={() => navigation.navigate('BuildReport')}>
              <Text style={styles.quickBtnText}>📋 Reports</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.teamSection}>
          <View style={styles.teamHeader}>
            <Text style={styles.teamTitle}>Team Activity</Text>
            <TouchableOpacity onPress={() => navigation.navigate('DetailMember')}>
              <Text style={styles.teamLink}>View Details→</Text>
            </TouchableOpacity>
          </View>
          {TEAM.map((member, i) => (
            <TouchableOpacity
              key={i}
              style={styles.memberCard}
              onPress={() => navigation.navigate('DetailMember')}
            >
              <View style={styles.memberAvatar} />
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.memberActivity}>{member.activity}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 20 }} />
      </ScrollView>

      <NavBar navigation={navigation} active="Insights" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  topBlock: { position: 'relative' },
  purpleBg: { position: 'absolute', top: 84, left: 0, width: 390, height: 384, backgroundColor: '#e1e0ff', borderRadius: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 16, backgroundColor: 'rgba(248,250,252,0.8)' },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatarBorder: { width: 40, height: 40, borderRadius: 9999, borderWidth: 1.5, borderColor: 'rgba(74,71,210,0.2)', alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 36, height: 36, borderRadius: 9999, backgroundColor: '#c7c4d7' },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#7c3aed', fontFamily: 'PlusJakartaSans_700Bold' },
  headerBtn: { width: 40, height: 40, borderRadius: 9999, backgroundColor: 'rgba(255,255,255,0.6)' },
  tabBar: { flexDirection: 'row', marginHorizontal: 12, marginTop: 17, marginBottom: 12, gap: 4 },
  tab: { flex: 1, height: 28, borderRadius: 9999, backgroundColor: 'rgba(123,111,111,0.2)', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 },
  tabActive: { backgroundColor: '#4648d4' },
  tabText: { fontSize: 14, fontWeight: '500', color: '#1a1c1c', fontFamily: 'Inter_500Medium' },
  tabTextActive: { color: '#ffffff' },
  metricsGrid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 27, gap: 16, marginBottom: 16 },
  metricCard: { width: '46%', backgroundColor: '#ffffff', borderRadius: 12, padding: 16, overflow: 'hidden' },
  accentBar: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, backgroundColor: '#4648d4', borderTopLeftRadius: 12, borderBottomLeftRadius: 12 },
  metricRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  metricLabel: { fontSize: 12, fontWeight: '500', color: '#464554', fontFamily: 'Inter_500Medium' },
  metricValue: { fontSize: 24, fontWeight: '800', color: '#1a1c1c', letterSpacing: -0.6, lineHeight: 32, fontFamily: 'Inter_800ExtraBold' },
  metricSub: { fontSize: 10, fontWeight: '600', marginTop: 4, fontFamily: 'Inter_600SemiBold' },
  ctaButton: {
    backgroundColor: '#4648d4', borderRadius: 12,
    paddingVertical: 16, marginHorizontal: 27, marginBottom: 12, alignItems: 'center',
  },
  ctaButtonText: { fontSize: 14, fontWeight: '600', color: '#ffffff', fontFamily: 'Inter_600SemiBold' },
  chartWrapper: { marginHorizontal: 17, marginBottom: 12 },
  quickSection: { marginHorizontal: 17, marginBottom: 16 },
  quickRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  quickRow2: { flexDirection: 'row', justifyContent: 'space-between' },
  quickBtn: { backgroundColor: '#e1e0ff', borderRadius: 18, paddingHorizontal: 14, paddingVertical: 9, flexDirection: 'row', alignItems: 'center', gap: 4 },
  quickBtnText: { fontSize: 12, color: '#4648d4', fontWeight: '500', fontFamily: 'Inter_500Medium' },
  viewMore: { fontSize: 14, fontWeight: '700', color: '#1a1c1c', fontFamily: 'Inter_700Bold' },
  teamSection: { marginHorizontal: 23, marginTop: 8 },
  teamHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  teamTitle: { fontSize: 18, fontWeight: '700', color: '#1a1c1c', letterSpacing: -0.45, fontFamily: 'Inter_700Bold' },
  teamLink: { fontSize: 14, fontWeight: '600', color: '#2c2abc', fontFamily: 'Inter_600SemiBold' },
  memberCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', borderRadius: 16, padding: 16, marginBottom: 8 },
  memberAvatar: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#c7c4d7', marginRight: 16 },
  memberInfo: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  memberName: { fontSize: 14, fontWeight: '700', color: '#2c2f31', fontFamily: 'Inter_700Bold' },
  memberActivity: { fontSize: 10, fontWeight: '700', color: '#000000', fontFamily: 'Inter_700Bold' },
});
