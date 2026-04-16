# BATCH 5 — Analytics Part 2: Priority, Overdue, Completion (3 screens)

> Read and follow ALL rules in `prompts/00-master-prompt.md` before starting.
> Read `prompts/em-bau/batch-0-setup.md` for navigation map and colors.
> **IMPORTANT**: ALL commands must run from `my-app/` directory. `package.json` is at `my-app/package.json`, NOT at the repo root.

## Prerequisites — Already Generated (Batch 1–4)

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

## Figma Page

- Page: "Em BauTb" — ID: `49:246`
- `navigate_to_page(pageId="49:246")`

## Screens to Generate

| # | Figma Frame | Frame ID | Output File |
|---|---|---|---|
| 1 | Frame 11 Priority Analysis | `521:636` | `screens/em-bau/PriorityAnalysis.js` |
| 2 | BodyOverDue | `525:831` | `screens/em-bau/OverdueTask.js` |
| 3 | Frame 13 Completion | `529:473` | `screens/em-bau/Completion.js` |

## For Each Screen — Mandatory Steps

1. **Read**: `get_node(nodeId="<frame_id>")` — read the FULL node tree
2. **Extract EVERY node**: type, name, bounds, fills, strokes, cornerRadius, padding, effects, characters, fontSize, fontFamily, fontWeight, letterSpacing, lineHeight
3. **Header**: Read THIS frame's header — each is unique
4. **All text**: Use `characters` exactly
5. **All colors**: Read `fills` per node
6. **Build**: Generate component with StyleSheet.create
7. **Verify**: `get_screenshot(nodeIds=["<frame_id>"])`

## Screen-Specific Notes

### PriorityAnalysis (521:636)
- Header with 2 children (simpler header)
- Main has 3 children — likely priority breakdown cards/charts
- Height is 1158.5 → fractional! Keep exact in styles
- Probably has colored priority indicators (Critical, High, Medium, Low) — read exact fill color for each

### OverdueTask (525:831)
- Different structure: has 1 child "Mobile Canvas (390x844)" which contains 3 children
- This is a nested frame pattern — read the inner "Mobile Canvas" for actual content
- Likely has a list of overdue tasks with red/warning indicators

### Completion (529:473)
- Main has 5 children — the most content-rich in this batch
- Header is "Top App Bar" with 1 child
- May contain completion percentage charts, progress rings

## Prototype Navigation

```javascript
// All 3 screens
Back button → navigation.goBack()

// Bottom NavBar (all 3 screens)
Home     → navigation.navigate('DashboardToday')
Tasks    → navigation.navigate('TaskStatus')
PROJECT  → navigation.navigate('ProjectProgress')
Insights → navigation.navigate('BurndownChart')
Settings → navigation.navigate('AlertSettings')
```

## After This Batch

Update `AppNavigator.js`:
- Import PriorityAnalysis, OverdueTask, Completion
- Uncomment their Stack.Screen registrations
- Total screens working: 14/20
- Verify: all 14 screens navigate correctly via NavBar and back buttons
