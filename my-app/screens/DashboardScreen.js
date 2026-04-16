import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';

const tasks = [
  { id: 1, title: 'Review Q3 Architecture', tag: 'Design', tagColor: '#eeeeee', tagTextColor: '#464554', due: 'Due 11:00 AM', borderColor: '#ba1a1a', done: false },
  { id: 2, title: 'Finalize Vendor Contract', tag: 'Operations', tagColor: '#e1e0ff', tagTextColor: '#2f2ebe', due: 'Due 2:00 PM', borderColor: '#4648d4', done: false },
  { id: 3, title: 'Morning Standup', tag: 'Internal', tagColor: '#eeeeee', tagTextColor: '#464554', due: '', borderColor: '#fea619', done: true },
];

const onboardingSteps = [
  { label: 'Create your first project', done: true },
  { label: 'Add your team', done: false },
  { label: 'Enable smart scheduling', done: false },
];

const navItems = [
  { label: 'Home', icon: '🏠', active: true },
  { label: 'Tasks', icon: '✓', active: false },
  { label: 'PROJECT', icon: '⊞', active: false },
  { label: 'Insights', icon: '📊', active: false },
  { label: 'Settings', icon: '⚙️', active: false },
];

export default function DashboardScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatar} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.main} showsVerticalScrollIndicator={false}>
        {/* Welcome */}
        <View style={styles.section}>
          <Text style={styles.welcomeTitle}>Welcome to Lumina,{'\n'}Alex!</Text>
          <Text style={styles.welcomeSub}>Ready to start your first productive day?</Text>
        </View>

        {/* Onboarding Card */}
        <View style={styles.onboardingCard}>
          <Text style={styles.cardTitle}>Getting Started with Lumina AI</Text>
          <Text style={styles.cardSub}>Let's set up your workspace for success.</Text>
          <View style={styles.stepList}>
            {onboardingSteps.map((step, i) => (
              <View key={i} style={styles.stepItem}>
                <View style={[styles.stepDot, { backgroundColor: step.done ? '#4648d4' : 'transparent', borderColor: step.done ? '#4648d4' : '#c7c4d7' }]} />
                <Text style={styles.stepLabel}>{step.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Progress Snapshot */}
        <View style={styles.sectionLabel}>
          <Text style={styles.sectionLabelText}>PROGRESS SNAPSHOT</Text>
        </View>
        <View style={styles.progressRow}>
          <View style={styles.progressCard}>
            <View style={styles.progressCircle}>
              <Text style={styles.progressPercent}>0%</Text>
            </View>
            <Text style={styles.progressCardLabel}>Today's Goal</Text>
          </View>
          <View style={styles.progressCard}>
            <Text style={styles.streakNumber}>0</Text>
            <Text style={styles.streakLabel}>Day Streak</Text>
          </View>
        </View>

        {/* Today's Focus */}
        <View style={styles.sectionLabel}>
          <Text style={styles.sectionLabelText}>TODAY'S FOCUS</Text>
        </View>
        <View style={styles.taskList}>
          {tasks.map(task => (
            <View key={task.id} style={[styles.taskCard, { borderLeftColor: task.borderColor }]}>
              <View style={[styles.taskCheckbox, task.done && styles.taskCheckboxDone]}>
                {task.done && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <View style={styles.taskContent}>
                <Text style={[styles.taskTitle, task.done && styles.taskTitleDone]}>{task.title}</Text>
                <View style={styles.taskMeta}>
                  <View style={[styles.taskTag, { backgroundColor: task.tagColor }]}>
                    <Text style={[styles.taskTagText, { color: task.tagTextColor }]}>{task.tag}</Text>
                  </View>
                  {task.due ? <Text style={styles.taskDue}>{task.due}</Text> : null}
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Active Projects */}
        <View style={styles.projectsSection}>
          <View style={styles.projectsHeader}>
            <Text style={styles.projectsTitle}>Active Projects</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.emptyProjects}>
            <View style={styles.emptyIcon}>
              <Text style={styles.emptyIconText}>📁</Text>
            </View>
            <View>
              <Text style={styles.emptyTitle}>No projects found</Text>
              <Text style={styles.emptySub}>Organize your flow.</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.navbar}>
        {navItems.map((item, i) => (
          <TouchableOpacity key={i} style={styles.navItem} onPress={() => setActiveTab(item.label)}>
            <Text style={[styles.navIcon, activeTab === item.label && styles.navIconActive]}>{item.icon}</Text>
            <Text style={[styles.navLabel, activeTab === item.label && styles.navLabelActive]}>{item.label}</Text>
            {activeTab === item.label && <View style={styles.navDot} />}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 24, paddingVertical: 16, backgroundColor: '#f9f9f9',
  },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#1a1c1c', letterSpacing: -0.5 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  iconBtn: { width: 32, height: 32, justifyContent: 'center', alignItems: 'center' },
  iconText: { fontSize: 18 },
  avatar: { width: 32, height: 32, borderRadius: 9999, backgroundColor: '#c7c4d7' },
  main: { paddingHorizontal: 24, paddingBottom: 32 },
  section: { marginBottom: 24 },
  welcomeTitle: { fontSize: 30, fontWeight: '800', color: '#1a1c1c', letterSpacing: -0.75, lineHeight: 36 },
  welcomeSub: { fontSize: 16, fontWeight: '500', color: '#464554', lineHeight: 24, marginTop: 8 },
  onboardingCard: {
    backgroundColor: '#ffffff', borderRadius: 14,
    padding: 24, marginBottom: 24,
  },
  cardTitle: { fontSize: 20, fontWeight: '700', color: '#1a1c1c', lineHeight: 28 },
  cardSub: { fontSize: 14, color: '#464554', marginTop: 4, marginBottom: 16 },
  stepList: { gap: 12 },
  stepItem: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  stepDot: { width: 15, height: 15, borderRadius: 9999, borderWidth: 1.5 },
  stepLabel: { fontSize: 14, fontWeight: '500', color: '#1a1c1c' },
  sectionLabel: { marginBottom: 8 },
  sectionLabelText: { fontSize: 11, fontWeight: '600', color: '#a1a1aa', letterSpacing: 1.1 },
  progressRow: { flexDirection: 'row', gap: 16, marginBottom: 24 },
  progressCard: {
    flex: 1, backgroundColor: '#ffffff', borderRadius: 12,
    padding: 16, alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: '#f3f3f3', minHeight: 124,
  },
  progressCircle: {
    width: 48, height: 48, borderRadius: 24,
    borderWidth: 3, borderColor: '#4648d4',
    alignItems: 'center', justifyContent: 'center', marginBottom: 8,
  },
  progressPercent: { fontSize: 10, fontWeight: '600', color: '#1a1c1c' },
  progressCardLabel: { fontSize: 12, fontWeight: '600', color: '#1a1c1c' },
  streakNumber: { fontSize: 18, fontWeight: '600', color: '#1a1c1c' },
  streakLabel: { fontSize: 11, fontWeight: '600', color: '#a1a1aa', marginTop: 4 },
  taskList: { gap: 12, marginBottom: 24 },
  taskCard: {
    backgroundColor: '#ffffff', borderRadius: 12,
    padding: 16, flexDirection: 'row', alignItems: 'center',
    borderLeftWidth: 3, gap: 12,
  },
  taskCheckbox: {
    width: 24, height: 24, borderRadius: 12,
    borderWidth: 1.5, borderColor: '#c7c4d7',
    alignItems: 'center', justifyContent: 'center',
  },
  taskCheckboxDone: { backgroundColor: '#4648d4', borderColor: '#4648d4' },
  checkmark: { color: '#ffffff', fontSize: 12 },
  taskContent: { flex: 1 },
  taskTitle: { fontSize: 14, fontWeight: '600', color: '#1a1c1c', lineHeight: 20 },
  taskTitleDone: { color: '#a1a1aa', textDecorationLine: 'line-through' },
  taskMeta: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 },
  taskTag: { borderRadius: 9999, paddingHorizontal: 8, paddingVertical: 2 },
  taskTagText: { fontSize: 10, fontWeight: '500' },
  taskDue: { fontSize: 10, color: '#a1a1aa' },
  projectsSection: { marginBottom: 16 },
  projectsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  projectsTitle: { fontSize: 18, fontWeight: '700', color: '#1a1c1c' },
  viewAll: { fontSize: 14, fontWeight: '700', color: '#4648d4' },
  emptyProjects: {
    backgroundColor: '#f3f3f3', borderRadius: 16,
    padding: 24, flexDirection: 'row', alignItems: 'center', gap: 12,
  },
  emptyIcon: {
    width: 48, height: 48, borderRadius: 12, backgroundColor: '#ffffff',
    alignItems: 'center', justifyContent: 'center',
  },
  emptyIconText: { fontSize: 20 },
  emptyTitle: { fontSize: 14, fontWeight: '700', color: '#1a1c1c' },
  emptySub: { fontSize: 12, color: '#464554', marginTop: 2 },
  addBtn: {
    marginLeft: 'auto', width: 30, height: 30, borderRadius: 8,
    backgroundColor: '#e8e8e8', alignItems: 'center', justifyContent: 'center',
  },
  addBtnText: { fontSize: 18, color: '#4648d4', fontWeight: '700' },
  navbar: {
    flexDirection: 'row', backgroundColor: '#ffffffcc',
    paddingHorizontal: 13, paddingVertical: 13,
    borderTopWidth: 1, borderTopColor: '#f3f3f3',
  },
  navItem: { flex: 1, alignItems: 'center', gap: 2 },
  navIcon: { fontSize: 16, color: '#a1a1aa' },
  navIconActive: { color: '#4f46e5' },
  navLabel: { fontSize: 10, fontWeight: '700', color: '#a1a1aa', letterSpacing: 0.5 },
  navLabelActive: { color: '#4f46e5' },
  navDot: { width: 4, height: 4, borderRadius: 9999, backgroundColor: '#4f46e5' },
});
