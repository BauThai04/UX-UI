# BATCH 0 — Project Setup (Navigation + Colors + Fonts)

> Read and follow ALL rules in `prompts/00-master-prompt.md` before starting.
## Import Checklist — MUST verify before saving each file

Every component used in JSX MUST be imported. Before saving any screen file, verify these imports exist at the top:

```javascript
// Only include what you actually use in the file:
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,    // ← REQUIRED if any onPress exists
  StyleSheet,
  SafeAreaView,
  Dimensions,          // ← if using screen width/height
  Image,               // ← if using images
} from 'react-native';
```

**Common mistakes to avoid:**
- Using `TouchableOpacity` without importing it → causes `ReferenceError: Property 'TouchableOpacity' doesn't exist`
- Using `ScrollView` without importing it
- Using `Dimensions` without importing it
- Using `Svg`, `Line`, `Path` without `import Svg, { Line, Path } from 'react-native-svg'`
- Using `LinearGradient` without `import { LinearGradient } from 'expo-linear-gradient'`

**Rule: After generating each file, scan the JSX for every component name and confirm it has a matching import.**

## IMPORTANT — Working Directory

**ALL commands MUST run inside `my-app/` directory.**
- The project root is `C:\code\uiux\` but `package.json` is at `C:\code\uiux\my-app\package.json`
- ALWAYS `cd my-app` first, or use full path `C:\code\uiux\my-app`
- ALL file paths for screens are relative to `my-app/` (e.g., `my-app/screens/em-bau/...`)

## Goal

Set up the project foundation: navigation library, design tokens, font loading, and App.js entry point for Em Bau's screens.

## Figma Page

- Page: "Em BauTb" — ID: `49:246`

## Tasks

### 1. Install dependencies

```bash
cd my-app
npx expo install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-svg expo-font
```

### 2. Create `screens/em-bau/colors.js`

```javascript
// Design tokens extracted from Figma Variables + per-node color reads
export const COLORS = {
  // From Figma Variables (tokens)
  primary: {
    main: '#4648D4',
    container: '#6063EE',
    fixed: '#E1E0FF',
  },
  secondary: {
    main: '#855300',
    container: '#FEA619',
  },
  neutral: {
    onSurface: '#1A1C1C',
    surface: '#EEEEEE',
    surfaceLow: '#F3F3F3',
    surfaceLowest: '#FFFFFF',
  },
  accent: {
    error: '#EF4444',
    info: '#0EA5E9',
    success: '#10B981',
    warning: '#F59E0B',
  },
  // Additional colors found in Figma nodes (read directly)
  text: {
    dark: '#2c2f31',
    muted: '#595c5e',
    magenta: '#6c104f',
  },
  brand: {
    primary: '#4a47d2',
    purple: '#6149b2',
    pinkPurple: '#973773',
    alertRed: '#b41340',
  },
  bg: {
    light: '#eff1f3',
    card: '#ffffff',
    overlay: 'rgba(150, 149, 255, 0.2)', // #9695ff33
  },
  border: {
    grid: '#757779',
    divider: '#e0e3e5',
  },
};
```

### 3. Create `screens/em-bau/AppNavigator.js`

Set up a Stack Navigator with ALL 20 screens registered. This file will be updated with each batch.

```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Batch 0: placeholder screens — will be replaced in each batch
import DashboardToday from './DashboardToday';
// ... more imports added per batch

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Batch 1: Dashboard */}
        <Stack.Screen name="DashboardToday" component={DashboardToday} />
        <Stack.Screen name="DashboardWeek" component={DashboardWeek} />
        <Stack.Screen name="DashboardMonth" component={DashboardMonth} />
        {/* Batch 2 */}
        <Stack.Screen name="CustomMode" component={CustomMode} />
        <Stack.Screen name="BurndownChart" component={BurndownChart} />
        {/* Batch 3 */}
        <Stack.Screen name="WorkloadMembers" component={WorkloadMembers} />
        <Stack.Screen name="DetailMember" component={DetailMember} />
        <Stack.Screen name="MemberComparison" component={MemberComparison} />
        {/* Batch 4 */}
        <Stack.Screen name="HeatMap" component={HeatMap} />
        <Stack.Screen name="ProjectProgress" component={ProjectProgress} />
        <Stack.Screen name="TaskStatus" component={TaskStatus} />
        {/* Batch 5 */}
        <Stack.Screen name="PriorityAnalysis" component={PriorityAnalysis} />
        <Stack.Screen name="OverdueTask" component={OverdueTask} />
        <Stack.Screen name="Completion" component={Completion} />
        {/* Batch 6 */}
        <Stack.Screen name="AvgTime" component={AvgTime} />
        <Stack.Screen name="CycleTime" component={CycleTime} />
        {/* Batch 7 */}
        <Stack.Screen name="BuildReport" component={BuildReport} />
        <Stack.Screen name="ReportPreview" component={ReportPreview} />
        <Stack.Screen name="ExportOptions" component={ExportOptions} />
        <Stack.Screen name="AlertSettings" component={AlertSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

Initially, only register screens from Batch 1. Comment out the rest. Uncomment as each batch is completed.

### 4. Update `App.js`

```javascript
import React from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';
import AppNavigator from './screens/em-bau/AppNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    PlusJakartaSans_700Bold,
  });

  if (!fontsLoaded) return null;

  return <AppNavigator />;
}
```

Install font packages:
```bash
npx expo install @expo-google-fonts/inter @expo-google-fonts/plus-jakarta-sans
```

### 5. Prototype Navigation Map

This is the COMPLETE navigation flow. Use `navigation.navigate('ScreenName')` for links.

```
BOTTOM NAVBAR (all screens):
  Home     → DashboardToday
  Tasks    → TaskStatus
  PROJECT  → ProjectProgress
  Insights → BurndownChart
  Settings → AlertSettings

DASHBOARD TAB BUTTONS:
  Today      → DashboardToday
  This Week  → DashboardWeek
  This Month → DashboardMonth
  Custom     → CustomMode

DASHBOARD METRIC CARDS (from Figma prototype reactions):
  Total Tasks card    → ProjectProgress     (501:757)
  Completed card      → TaskStatus          (520:464)
  In Progress card    → Completion          (529:473)
  Overdue card        → OverdueTask         (525:831)

DASHBOARD LINKS:
  "View Details Today's Tasks→"      → ProjectProgress  (501:757)
  "View Details This Week's Tasks→"  → ProjectProgress
  "View Details This Month's Tasks→" → ProjectProgress

DASHBOARD QUICK-NAV BUTTONS (from Figma prototype reactions):
  "👥 Workload"  → WorkloadMembers     (483:470)
  "📊 Priority"  → PriorityAnalysis    (521:636)
  "🔥 Burndown"  → BurndownChart       (465:604)
  "📋 Reports"   → BuildReport         (533:1101)

DASHBOARD OTHER:
  "View More"                      → WorkloadMembers
  "View Details→" (Team Activity)  → DetailMember
  Tap any team member row          → DetailMember

BURNDOWN CHART (Frame 4):
  Back button → navigation.goBack()

WORKLOAD FLOW:
  WorkloadMembers → DetailMember (tap member row)
  DetailMember → MemberComparison (tap compare button)
  MemberComparison → back

ANALYTICS SCREENS (each has back button):
  HeatMap → back
  ProjectProgress → back
  TaskStatus → back
  PriorityAnalysis → back
  OverdueTask → back
  Completion → back
  AvgTime → back
  CycleTime → back

REPORT FLOW:
  BuildReport → ReportPreview (tap generate)
  ReportPreview → ExportOptions (tap export)
  ExportOptions → back
```

### 6. NavBar Helper

Since NavBar repeats in every screen, define this navigation handler pattern. Each screen should use it:

```javascript
const handleNavPress = (tab, navigation) => {
  const navMap = {
    'Home': 'DashboardToday',
    'Tasks': 'TaskStatus',
    'PROJECT': 'ProjectProgress',
    'Insights': 'BurndownChart',
    'Settings': 'AlertSettings',
  };
  if (navMap[tab]) navigation.navigate(navMap[tab]);
};
```

## Output

After setup, the folder structure should be:
```
my-app/
  App.js                    (updated)
  screens/
    em-bau/
      colors.js
      AppNavigator.js
```
