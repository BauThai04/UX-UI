import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Batch 1: Dashboard
import DashboardToday from './DashboardToday';
import DashboardWeek from './DashboardWeek';
import DashboardMonth from './DashboardMonth';

// Placeholder for all future screens
import Placeholder from './Placeholder';

const Stack = createStackNavigator();

export const handleNavPress = (tab, navigation) => {
  const navMap = {
    'Home': 'DashboardToday',
    'Tasks': 'TaskStatus',
    'PROJECT': 'ProjectProgress',
    'Insights': 'BurndownChart',
    'Settings': 'AlertSettings',
  };
  if (navMap[tab]) navigation.navigate(navMap[tab]);
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Batch 1: Dashboard */}
        <Stack.Screen name="DashboardToday" component={DashboardToday} />
        <Stack.Screen name="DashboardWeek" component={DashboardWeek} />
        <Stack.Screen name="DashboardMonth" component={DashboardMonth} />

        {/* Batch 2 — placeholder */}
        <Stack.Screen name="CustomMode" component={Placeholder} />
        <Stack.Screen name="BurndownChart" component={Placeholder} />

        {/* Batch 3 — placeholder */}
        <Stack.Screen name="WorkloadMembers" component={Placeholder} />
        <Stack.Screen name="DetailMember" component={Placeholder} />
        <Stack.Screen name="MemberComparison" component={Placeholder} />

        {/* Batch 4 — placeholder */}
        <Stack.Screen name="HeatMap" component={Placeholder} />
        <Stack.Screen name="ProjectProgress" component={Placeholder} />
        <Stack.Screen name="TaskStatus" component={Placeholder} />

        {/* Batch 5 — placeholder */}
        <Stack.Screen name="PriorityAnalysis" component={Placeholder} />
        <Stack.Screen name="OverdueTask" component={Placeholder} />
        <Stack.Screen name="Completion" component={Placeholder} />

        {/* Batch 6 — placeholder */}
        <Stack.Screen name="AvgTime" component={Placeholder} />
        <Stack.Screen name="CycleTime" component={Placeholder} />

        {/* Batch 7 — placeholder */}
        <Stack.Screen name="BuildReport" component={Placeholder} />
        <Stack.Screen name="ReportPreview" component={Placeholder} />
        <Stack.Screen name="ExportOptions" component={Placeholder} />
        <Stack.Screen name="AlertSettings" component={Placeholder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
