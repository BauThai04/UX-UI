# PROMPT — Gen screens for: Em Bau

> Paste the content of `00-master-prompt.md` above this line, or reference it.

## Assignment

You are generating code for **Em Bau**'s screens.

**Figma Page**: "Em BauTb" — Page ID: `49:246`

## Step-by-step

### 1. Navigate to page

```
navigate_to_page(pageId="49:246")
```

### 2. Get all frames in this page

```
get_design_context(depth=2, detail="compact", dedupe_components=true)
```

### 3. Screens to generate (in order)

| Priority | Frame Name | Output File |
|---|---|---|
| 1 | Frame 0 DashBoard_Today'Task | `screens/em-bau/DashboardToday.js` |
| 2 | Frame 1 DashBoard_WeekTask | `screens/em-bau/DashboardWeek.js` |
| 3 | Frame 2 DashBoard_ThisMonth'sTask | `screens/em-bau/DashboardMonth.js` |
| 4 | Frame 3 Custom Mode | `screens/em-bau/CustomMode.js` |
| 5 | Frame 4 Burndown Chart Full View | `screens/em-bau/BurndownChart.js` |
| 6 | Frame 5 WorkLoad_Members | `screens/em-bau/WorkloadMembers.js` |
| 7 | Frame 6 Detail Member | `screens/em-bau/DetailMember.js` |
| 8 | Frame 7 Member_Comparison | `screens/em-bau/MemberComparison.js` |
| 9 | Frame 8 HeatMap | `screens/em-bau/HeatMap.js` |
| 10 | Frame 9 Project Progress | `screens/em-bau/ProjectProgress.js` |
| 11 | Frame 10: task status | `screens/em-bau/TaskStatus.js` |
| 12 | Frame 11 Priority Analysis | `screens/em-bau/PriorityAnalysis.js` |
| 13 | BodyOverDue | `screens/em-bau/OverdueTask.js` |
| 14 | Frame 13 Completion | `screens/em-bau/Completion.js` |
| 15 | Frame 14: AVGTIME | `screens/em-bau/AvgTime.js` |
| 16 | Frame 15: Cycle Time | `screens/em-bau/CycleTime.js` |
| 17 | Frame 16: Build Rp | `screens/em-bau/BuildReport.js` |
| 18 | MAN 18: REPORT PREVIEW | `screens/em-bau/ReportPreview.js` |
| 19 | MAN 19: EXPORT OPTIONS | `screens/em-bau/ExportOptions.js` |
| 20 | MAN 20: ALERT SETTINGS | `screens/em-bau/AlertSettings.js` |

### 4. For each screen

For each frame in the table above, do this:

```
1. get_node(nodeId="<frame_id>")  → read FULL node tree
2. For every TEXT node: extract `characters`, `fontSize`, `fontWeight`, `fills`
3. For every FRAME/RECTANGLE: extract `fills`, `cornerRadius`, `padding`, `effects`
4. Generate the React Native component with EXACT values
5. get_screenshot() → visually verify the Figma frame
6. Cross-check: Does the code have the same number of elements as the design?
7. Save file to the correct path
```

### 5. Code style

Each screen is a **single self-contained file** — Header, content, and NavBar are all in the same file. Follow the same code structure as the existing `screens/DashboardScreen.js`:

```javascript
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function ScreenName() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header — READ FROM FIGMA, different per screen */}
      {/* Main Content */}
      {/* Bottom NavBar */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ ... });
```

- Fonts: **Inter** + **Plus Jakarta Sans** — read exact `fontFamily`, `fontSize`, `fontWeight` from EACH Figma TEXT node. Do NOT assume all text is Inter.
- Do NOT create separate NavBar.js or Header.js
- Icons: use emoji placeholders (🏠, 📊, ⚙️, etc.) like DashboardScreen.js
- **Header is unique per screen** — do NOT copy header from DashboardScreen.js or any other screen. Read each screen's header node from Figma and replicate exactly (title, icons, back button, action buttons may all differ).

### 6. Verification checklist (for each screen)

- [ ] All text matches Figma exactly (no typos, no translation, no rewording)
- [ ] All colors are from design tokens or extracted hex — no hardcoded guesses
- [ ] cornerRadius matches Figma (e.g., 24 not 20, 16 not 12)
- [ ] Padding/margin values are from Figma auto-layout, not estimated
- [ ] No extra UI elements added that don't exist in Figma
- [ ] No Figma elements skipped or omitted
- [ ] Shadow/effects replicated if present in Figma node's `effects` array
