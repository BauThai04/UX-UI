# BATCH 2 — Custom Mode + Burndown Chart (2 screens)

> Read and follow ALL rules in `prompts/00-master-prompt.md` before starting.
> Read `prompts/em-bau/batch-0-setup.md` for navigation map and colors.
> **IMPORTANT**: ALL commands must run from `my-app/` directory. `package.json` is at `my-app/package.json`, NOT at the repo root.

## Prerequisites — Already Generated

These screens already exist from Batch 1:
- `screens/em-bau/DashboardToday.js`
- `screens/em-bau/DashboardWeek.js`
- `screens/em-bau/DashboardMonth.js`

## Figma Page

- Page: "Em BauTb" — ID: `49:246`
- `navigate_to_page(pageId="49:246")`

## Screens to Generate

| # | Figma Frame | Frame ID | Output File |
|---|---|---|---|
| 1 | Frame 3 Custom Mode | `468:752` | `screens/em-bau/CustomMode.js` |
| 2 | Frame 4 Burndown Chart Full View | `465:604` | `screens/em-bau/BurndownChart.js` |

## For Each Screen — Mandatory Steps

1. **Read**: `get_node(nodeId="<frame_id>")` — read the FULL node tree
2. **Extract EVERY node**: type, name, bounds, fills, strokes, cornerRadius, padding, effects, characters, fontSize, fontFamily, fontWeight, letterSpacing, lineHeight
3. **Header**: Read THIS frame's header. Each is unique.
4. **All text**: Use `characters` exactly
5. **All colors**: Read `fills` per node
6. **Build**: Generate component with StyleSheet.create
7. **Verify**: `get_screenshot(nodeIds=["<frame_id>"])`

## Screen-Specific Notes

### Custom Mode (468:752)
- Has Header with Back button + Title + "Generate" action button
- Main content has form/configuration controls
- Read each form element's exact labels, sizes, colors
- Back button → `navigation.goBack()`
- "Generate" button → `navigation.navigate('BurndownChart')`

### Burndown Chart Full View (465:604)
- **This is the most complex screen** — it has:
  - Header with "Burndown — MT PROJECT" title
  - KPI Bento Grid (3 metric cards with accent bars)
  - Main Chart Section with SVG VECTOR lines (burndown chart)
  - Insights Summary (2 insight cards with left border strokes)
- **Chart handling**: The "Burndown Chart Visual" contains VECTOR nodes for chart lines. Use `react-native-svg`:
  ```jsx
  import Svg, { Line, Circle, Rect } from 'react-native-svg';
  ```
  Read each VECTOR's bounds and stroke color. Create approximate line positions.
- **Metric cards**: RECTANGLE width=4 at x=0 → absolute-positioned accent bar
- **Mixed text** in Insights: node `465:742` has `fills: "mixed"`, `fontFamily: "mixed"` → use nested `<Text>` for styled ranges
- **Plus Jakarta Sans**: The large numbers ("14", "8.2", "Oct 24") use `PlusJakartaSans_700Bold`

## Prototype Navigation

```javascript
// Custom Mode
Back button → navigation.goBack()
"Generate" button → navigation.navigate('BurndownChart')

// Burndown Chart
Back button (if present) → navigation.goBack()

// Bottom NavBar (both screens)
Home     → navigation.navigate('DashboardToday')
Tasks    → navigation.navigate('TaskStatus')
PROJECT  → navigation.navigate('ProjectProgress')
Insights → navigation.navigate('BurndownChart')  // already here for Burndown
Settings → navigation.navigate('AlertSettings')
```

## After This Batch

Update `AppNavigator.js`:
- Import CustomMode, BurndownChart
- Uncomment their Stack.Screen registrations
- Verify navigation: Dashboard → Custom Mode → Burndown Chart works
- Verify: Dashboard tab "Daily/Weekly/Monthly" still switches correctly
- Verify: Bottom NavBar "Insights" → BurndownChart
