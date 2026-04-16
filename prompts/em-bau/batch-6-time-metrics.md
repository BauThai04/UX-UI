# BATCH 6 — Time Metrics: AVG Time + Cycle Time (2 screens)

> Read and follow ALL rules in `prompts/00-master-prompt.md` before starting.
> Read `prompts/em-bau/batch-0-setup.md` for navigation map and colors.
> **IMPORTANT**: ALL commands must run from `my-app/` directory. `package.json` is at `my-app/package.json`, NOT at the repo root.

## Prerequisites — Already Generated (Batch 1–5)

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

## Figma Page

- Page: "Em BauTb" — ID: `49:246`
- `navigate_to_page(pageId="49:246")`

## Screens to Generate

| # | Figma Frame | Frame ID | Output File |
|---|---|---|---|
| 1 | Frame 14: AVGTIME | `531:706` | `screens/em-bau/AvgTime.js` |
| 2 | Frame 15: Cycle Time | `533:981` | `screens/em-bau/CycleTime.js` |

## For Each Screen — Mandatory Steps

1. **Read**: `get_node(nodeId="<frame_id>")` — read the FULL node tree
2. **Extract EVERY node**: type, name, bounds, fills, strokes, cornerRadius, padding, effects, characters, fontSize, fontFamily, fontWeight, letterSpacing, lineHeight
3. **Header**: Read THIS frame's header — each is unique
4. **All text**: Use `characters` exactly
5. **All colors**: Read `fills` per node
6. **Build**: Generate component with StyleSheet.create
7. **Verify**: `get_screenshot(nodeIds=["<frame_id>"])`

## Screen-Specific Notes

### AvgTime (531:706)
- Structure: "Background+Shadow" (390x1063) + NavBar
- The "Background+Shadow" wrapper suggests this screen has shadow/elevation effects on the main content area
- Check `effects` array on this node — if it has drop shadows, replicate with React Native shadow styles:
  ```javascript
  shadowColor: '#000',
  shadowOffset: { width: X, height: Y },
  shadowOpacity: O,
  shadowRadius: R,
  elevation: E, // Android
  ```
- Has 2 children inside Background+Shadow — likely a header area + time metrics content

### CycleTime (533:981)
- Same structure as AvgTime: "Background+Shadow" (390x1063) + NavBar
- Has 3 children inside Background+Shadow (one more than AvgTime)
- These 2 screens likely have similar layout patterns — but do NOT copy styles between them. Read each node independently.

## Prototype Navigation

```javascript
// Both screens
Back button → navigation.goBack()

// Bottom NavBar (both screens)
Home     → navigation.navigate('DashboardToday')
Tasks    → navigation.navigate('TaskStatus')
PROJECT  → navigation.navigate('ProjectProgress')
Insights → navigation.navigate('BurndownChart')
Settings → navigation.navigate('AlertSettings')
```

## After This Batch

Update `AppNavigator.js`:
- Import AvgTime, CycleTime
- Uncomment their Stack.Screen registrations
- Total screens working: 16/20
- Verify: both screens render correctly and back button works
