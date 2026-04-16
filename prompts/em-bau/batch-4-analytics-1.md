# BATCH 4 — Analytics Part 1: HeatMap, Project Progress, Task Status (3 screens)

> Read and follow ALL rules in `prompts/00-master-prompt.md` before starting.
> Read `prompts/em-bau/batch-0-setup.md` for navigation map and colors.
> **IMPORTANT**: ALL commands must run from `my-app/` directory. `package.json` is at `my-app/package.json`, NOT at the repo root.

## Prerequisites — Already Generated (Batch 1 + 2 + 3)

- `screens/em-bau/DashboardToday.js`
- `screens/em-bau/DashboardWeek.js`
- `screens/em-bau/DashboardMonth.js`
- `screens/em-bau/CustomMode.js`
- `screens/em-bau/BurndownChart.js`
- `screens/em-bau/WorkloadMembers.js`
- `screens/em-bau/DetailMember.js`
- `screens/em-bau/MemberComparison.js`

## Figma Page

- Page: "Em BauTb" — ID: `49:246`
- `navigate_to_page(pageId="49:246")`

## Screens to Generate

| # | Figma Frame | Frame ID | Output File |
|---|---|---|---|
| 1 | Frame 8 HeatMap | `498:464` | `screens/em-bau/HeatMap.js` |
| 2 | Frame 9 Project Progress | `501:757` | `screens/em-bau/ProjectProgress.js` |
| 3 | Frame 10: task status | `520:464` | `screens/em-bau/TaskStatus.js` |

## For Each Screen — Mandatory Steps

1. **Read**: `get_node(nodeId="<frame_id>")` — read the FULL node tree
2. **Extract EVERY node**: type, name, bounds, fills, strokes, cornerRadius, padding, effects, characters, fontSize, fontFamily, fontWeight, letterSpacing, lineHeight
3. **Header**: Read THIS frame's header — each is unique
4. **All text**: Use `characters` exactly
5. **All colors**: Read `fills` per node
6. **Build**: Generate component with StyleSheet.create
7. **Verify**: `get_screenshot(nodeIds=["<frame_id>"])`

## Screen-Specific Notes

### HeatMap (498:464)
- Header: "Top Navigation Anchor" — may have tab/anchor navigation style
- Main content: A heatmap grid visualization
- The heatmap cells likely use RECTANGLE nodes with different fill colors → read EACH cell's fill color exactly
- Do NOT generate random colors — read from Figma

### ProjectProgress (501:757)
- Header: "TopAppBar (Shared Component Logic)" — read its actual content, not its name
- "Content Canvas" with 2 children → likely progress bars or milestone cards
- This is the screen reached from NavBar "PROJECT" tab

### TaskStatus (520:464)
- Header: "TopAppBar" with 3 children
- Main content with 4 children — likely task lists grouped by status
- Has a GROUP node (Group 6, 232x52) — remember: GROUP has no auto-layout, position children with relative/absolute layout
- This is the screen reached from NavBar "Tasks" tab and Dashboard "View Details" links

## Prototype Navigation

```javascript
// All 3 screens
Back button → navigation.goBack()

// Bottom NavBar (all 3 screens)
Home     → navigation.navigate('DashboardToday')
Tasks    → navigation.navigate('TaskStatus')      // already here for TaskStatus
PROJECT  → navigation.navigate('ProjectProgress')  // already here for ProjectProgress
Insights → navigation.navigate('BurndownChart')
Settings → navigation.navigate('AlertSettings')
```

## Connect to Previous Screens

Now that TaskStatus and ProjectProgress exist, verify these connections work:
- Dashboard "View Details ..." links → TaskStatus ✓
- NavBar "Tasks" → TaskStatus ✓
- NavBar "PROJECT" → ProjectProgress ✓

## After This Batch

Update `AppNavigator.js`:
- Import HeatMap, ProjectProgress, TaskStatus
- Uncomment their Stack.Screen registrations
- Verify: NavBar "Tasks" → TaskStatus, NavBar "PROJECT" → ProjectProgress
- Verify: Dashboard "View Details" → TaskStatus
- Verify: Back button works on all 3 screens
