# BATCH 7 — Reports & Settings: Build Report, Preview, Export, Alert (4 screens)

> Read and follow ALL rules in `prompts/00-master-prompt.md` before starting.
> Read `prompts/em-bau/batch-0-setup.md` for navigation map and colors.
> **IMPORTANT**: ALL commands must run from `my-app/` directory. `package.json` is at `my-app/package.json`, NOT at the repo root.

## Prerequisites — Already Generated (Batch 1–6)

- `screens/em-bau/DashboardToday.js`
- `screens/em-bau/DashboardWeek.js`
- `screens/em-bau/DashboardMonth.js`
- `screens/em-bau/CustomMode.js`
- `screens/em-bau/BurndownChart.js`
- `screens/em-bau/WorkloadMembers.js`
- `screens/em-bau/DetailMember.js`
- `screens/em-bau/MemberComparison.js`
- `screens/em-bau/HeatMap.js`
- `screens/em-bau/ProjectProgress.js`
- `screens/em-bau/TaskStatus.js`
- `screens/em-bau/PriorityAnalysis.js`
- `screens/em-bau/OverdueTask.js`
- `screens/em-bau/Completion.js`
- `screens/em-bau/AvgTime.js`
- `screens/em-bau/CycleTime.js`

## Figma Page

- Page: "Em BauTb" — ID: `49:246`
- `navigate_to_page(pageId="49:246")`

## Screens to Generate

| # | Figma Frame | Frame ID | Output File |
|---|---|---|---|
| 1 | Frame 16 : Build Rp | `533:1101` | `screens/em-bau/BuildReport.js` |
| 2 | MAN 18: REPORT PREVIEW | `534:488` | `screens/em-bau/ReportPreview.js` |
| 3 | MAN 19: EXPORT OPTIONS | `536:866` | `screens/em-bau/ExportOptions.js` |
| 4 | MAN 20: ALERT SETTINGS | `537:670` | `screens/em-bau/AlertSettings.js` |

> Note: There are 2 frames named "MAN 19: EXPORT OPTIONS" (IDs: `536:866` and `537:464`). Use `536:866` as the primary. Read `537:464` only if you need a variant/alternate state.

## For Each Screen — Mandatory Steps

1. **Read**: `get_node(nodeId="<frame_id>")` — read the FULL node tree
2. **Extract EVERY node**: type, name, bounds, fills, strokes, cornerRadius, padding, effects, characters, fontSize, fontFamily, fontWeight, letterSpacing, lineHeight
3. **Header**: Read THIS frame's header — each is unique
4. **All text**: Use `characters` exactly
5. **All colors**: Read `fills` per node
6. **Build**: Generate component with StyleSheet.create
7. **Verify**: `get_screenshot(nodeIds=["<frame_id>"])`

## Screen-Specific Notes

### BuildReport (533:1101)
- Header: "TopAppBar" with 3 children
- Main has 6 children — the most complex main area in this batch
- Likely has form controls for report configuration (date range, metrics selection, etc.)
- "Generate" or similar action button → navigates to ReportPreview

### ReportPreview (534:488)
- Structure: "Main - Mobile Frame" with 3 children (no separate NavBar frame → might be fullscreen)
- This is a preview/read-only screen showing the generated report
- Has an export/share action button → navigates to ExportOptions

### ExportOptions (536:866)
- **OVERLAY / BOTTOM SHEET pattern**:
  - "Background Layer (Simulated Report Preview Screen 16)" — this is a dimmed/blurred background showing the previous screen underneath
  - "Bottom Sheet Wrapper" (390x895) with 2 children — the actual bottom sheet UI
- Implementation:
  ```jsx
  <View style={{ flex: 1 }}>
    {/* Background - dimmed */}
    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
      {/* Read actual background content from Figma */}
    </View>
    {/* Bottom Sheet - absolute positioned */}
    <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, ... }}>
      {/* Export options content */}
    </View>
  </View>
  ```
- Read the bottom sheet's exact height, cornerRadius (top-left, top-right), background color from Figma

### AlertSettings (537:670)
- Structure: "Mobile Canvas (390x844px)" with 3 children + "BottomNavBar (From JSON)" with 5 children
- The NavBar here is named differently: "BottomNavBar (From JSON)" with 5 items instead of the usual NavBar with 11 items
- **Read this NavBar separately** — do NOT copy the NavBar from other screens. It may have different items.
- This is the screen reached from NavBar "Settings" tab

## Prototype Navigation

```javascript
// BuildReport
Back button → navigation.goBack()
"Generate" / action button → navigation.navigate('ReportPreview')

// ReportPreview
Back button → navigation.goBack()
Export / Share button → navigation.navigate('ExportOptions')

// ExportOptions
Close / X button → navigation.goBack()
Tap background overlay → navigation.goBack()

// AlertSettings
Back button → navigation.goBack()

// Bottom NavBar (BuildReport, AlertSettings)
Home     → navigation.navigate('DashboardToday')
Tasks    → navigation.navigate('TaskStatus')
PROJECT  → navigation.navigate('ProjectProgress')
Insights → navigation.navigate('BurndownChart')
Settings → navigation.navigate('AlertSettings')  // already here for AlertSettings
```

## After This Batch — FINAL

### 1. Update `AppNavigator.js`
- Import BuildReport, ReportPreview, ExportOptions, AlertSettings
- Uncomment ALL remaining Stack.Screen registrations
- **ALL 20 screens should now be registered**

### 2. Final Navigation Verification

Test the COMPLETE prototype flow:

```
✅ Dashboard Today → Tab switch → Dashboard Week → Dashboard Month
✅ Dashboard → Custom Mode (header button)
✅ Dashboard → "View Details" → TaskStatus
✅ Dashboard → "View More" → WorkloadMembers → DetailMember → MemberComparison
✅ NavBar Home → DashboardToday
✅ NavBar Tasks → TaskStatus
✅ NavBar PROJECT → ProjectProgress
✅ NavBar Insights → BurndownChart
✅ NavBar Settings → AlertSettings
✅ BuildReport → ReportPreview → ExportOptions → back
✅ All back buttons return correctly
✅ HeatMap, PriorityAnalysis, OverdueTask, Completion, AvgTime, CycleTime — accessible and back works
```

### 3. Generate Expo QR Code for Debug

Run the following to start Expo and get the QR code:

```bash
cd my-app
npx expo start
```

This will display:
- A QR code in the terminal
- A URL like `exp://192.168.x.x:8081`

To scan:
- **Android**: Open Expo Go app → Scan QR Code
- **iOS**: Open Camera app → Scan QR Code → Opens in Expo Go

If running on web:
```bash
npx expo start --web
```

### 4. Final File Structure

```
my-app/
  App.js
  screens/
    DashboardScreen.js          # Original (keep as-is)
    em-bau/
      colors.js
      AppNavigator.js
      DashboardToday.js         # Batch 1
      DashboardWeek.js          # Batch 1
      DashboardMonth.js         # Batch 1
      CustomMode.js             # Batch 2
      BurndownChart.js          # Batch 2
      WorkloadMembers.js        # Batch 3
      DetailMember.js           # Batch 3
      MemberComparison.js       # Batch 3
      HeatMap.js                # Batch 4
      ProjectProgress.js        # Batch 4
      TaskStatus.js             # Batch 4
      PriorityAnalysis.js       # Batch 5
      OverdueTask.js            # Batch 5
      Completion.js             # Batch 5
      AvgTime.js                # Batch 6
      CycleTime.js              # Batch 6
      BuildReport.js            # Batch 7
      ReportPreview.js          # Batch 7
      ExportOptions.js          # Batch 7
      AlertSettings.js          # Batch 7
```

Total: **20 screens + 1 navigator + 1 colors file = 22 files**
