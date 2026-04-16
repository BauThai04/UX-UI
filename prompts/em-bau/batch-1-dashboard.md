# BATCH 1 — Dashboard (3 screens) — UPDATED

> Read and follow ALL rules in `prompts/00-master-prompt.md` before starting.
> Read `prompts/em-bau/batch-0-setup.md` for project setup, navigation map, and colors.
> **IMPORTANT**: ALL commands must run from `my-app/` directory. `package.json` is at `my-app/package.json`, NOT at the repo root.

## Figma Page

- Page: "Em BauTb" — ID: `49:246`
- `navigate_to_page(pageId="49:246")`

## Screens to Generate

| # | Figma Frame | Frame ID | Output File |
|---|---|---|---|
| 1 | Frame 0 DashBoard_Today'Task | `455:3954` | `screens/em-bau/DashboardToday.js` |
| 2 | Frame 1 DashBoard _WeekTask | `400:6180` | `screens/em-bau/DashboardWeek.js` |
| 3 | Frame 2 DashBoard _ThisMonth'sTask | `459:465` | `screens/em-bau/DashboardMonth.js` |

## For Each Screen — Mandatory Steps

1. **Read**: `get_node(nodeId="<frame_id>")` — read the FULL node tree
2. **Extract EVERY node**: type, name, bounds, fills, strokes, cornerRadius, padding, effects, characters, fontSize, fontFamily, fontWeight, letterSpacing, lineHeight
3. **Header**: Read the header node of THIS frame. Do NOT copy from another screen.
4. **Tab buttons**: The ACTIVE tab differs per screen (read fills to determine which is active)
5. **All text**: Use `characters` exactly — no rewording
6. **All colors**: Read `fills` per node. If a color is not in colors.js, add it.
7. **Import check**: EVERY component used in JSX MUST have a matching import (TouchableOpacity, ScrollView, etc.)
8. **Build**: Generate React Native component with StyleSheet.create
9. **Verify**: `get_screenshot(nodeIds=["<frame_id>"])` — compare with code

## Exact Layout Structure (top → bottom)

Each dashboard screen has this EXACT order of elements. Read each node from Figma — do NOT skip any.

```
┌─────────────────────────────────────┐
│ 1. Header - TopAppBar               │  ← Avatar + "Insights" + Button
│    (390x72, y:0)                    │
│ 2. Tab buttons (4 pills)            │  ← Today / This Week / This Month / Custom
│    (y:105, cornerRadius: 9999)      │
│ 3. Metric Cards Grid (2x2)          │  ← 4 cards, 342x255
│    (y:150)                          │
│ 4. "Details ..." CTA button         │  ← purple full-width button
│ 5. "Task Completion Trend" heading   │
│    + "View Details→" link            │
│ 6. Section - Line Chart Card         │  ← chart with axis labels
│ 7. Quick-Nav Buttons (2 rows)        │  ← 4 buttons + arrows
│ 8. "View More" text                  │
│ 9. Team Activity section             │  ← heading + "View Details→"
│ 10. Team Members list (Container)    │  ← 3 member rows
│ 11. NavBar                           │  ← bottom navigation
└─────────────────────────────────────┘
```

> ## ⛔ NO BACKGROUND RECTANGLE — CRITICAL
> The `Rectangle 1` / `Rectangle 2` node (#e1e0ff, 390x384) still EXISTS in the Figma node tree but it has been VISUALLY REMOVED from the design. You MUST **SKIP/IGNORE** this node entirely.
> - Do NOT render it as a View
> - Do NOT use its fill color as any background
> - Do NOT use `position: 'absolute'` to place it behind content
> - The ONLY background is the SafeAreaView's `backgroundColor: '#f9f9f9'`
> - If you see a node named `Rectangle 1`, `Rectangle 2`, or any RECTANGLE/VECTOR at (390x384) → **SKIP IT**

## Detailed Element Specs (from Figma data)

### Header — `Header - TopAppBar Execution`
- Background: `#f8fafccc` (semi-transparent)
- padding: top 16, bottom 16, left 24, right 24
- Left: Avatar (40x40, border stroke `#4a47d233`, cornerRadius 9999)
- Left: "Insights" text — **Plus Jakarta Sans**, Bold 700, 18px, color `#7c3aed`
- Right: Button (40x40, cornerRadius 9999)

### Tab Buttons — 4 pill buttons (cornerRadius: 9999) — MUST USE FLEX
- **Active tab**: fills `#4648d4`, text color `#ffffff`, Inter Medium 500, 14px
- **Inactive tabs**: fills `#7b6f6f33` (semi-transparent), text color `#1a1c1c`, Inter Medium 500, 14px
- Labels: `"Today"`, `"This Week"`, `"This Month"`, `"Custom"`
- **SIZING — USE FLEX, NOT HARDCODED WIDTH**:
  ```jsx
  <View style={{ flexDirection: 'row', marginHorizontal: 12, gap: 8 }}>
    <TouchableOpacity style={{ flex: 1, paddingVertical: 4, alignItems: 'center', borderRadius: 9999, backgroundColor: isActive ? '#4648d4' : 'rgba(123,111,111,0.2)' }}>
      <Text style={{ color: isActive ? '#fff' : '#1a1c1c', fontSize: 14, fontWeight: '500' }}>Today</Text>
    </TouchableOpacity>
    {/* repeat for each tab */}
  </View>
  ```
  - Use `flex: 1` on each button so they share width equally
  - Do NOT hardcode `width: 85` — this causes text truncation on small screens
  - `gap: 8` between buttons
- Active tab per screen:
  - DashboardToday → "Today" active
  - DashboardWeek → "This Week" active
  - DashboardMonth → "This Month" active

### "Details ..." CTA Button (purple full-width)
- Frame 0: `"Details today's tasks →"`
- Frame 1: `"Details this week's tasks →"`
- Frame 2: `"Details this month's tasks →"`
- Read exact text, fills, cornerRadius, padding from Figma node
- This is a prominent purple button, NOT a text link

### "Task Completion Trend" + "View Details→"
- Left: "Task Completion Trend" heading
- Right: "View Details→" link — color `#2c2abc`, Inter Semi Bold 600, 14px

### Quick-Nav Buttons (2 rows of 2)
These are navigation shortcut buttons between the chart and Team Activity:

**Row 1:**
| Button | Emoji | Label |
|---|---|---|
| Left | 👥 | "Workload" |
| Right | 📊 | "Priority" |

**Row 2:**
| Button | Emoji | Label |
|---|---|---|
| Left | 🔥 | "Burndown" |
| Right | 📋 | "Reports" |

All buttons share:
- cornerRadius: 18
- fills: `#e1e0ff`
- emoji color: `#4648d4` (fontSize 12)
- label: Inter, fontWeight 400-500, fontSize 12, color `#4648d4`
- padding: left 14, right 14
- **RESPONSIVE sizing**: Do NOT hardcode width. Use `paddingHorizontal: 14` and let width adapt to content. Use `flexDirection: 'row', justifyContent: 'space-between'` for each row.

**Arrows**: VECTOR nodes between buttons (Arrow 1-12) — decorative connectors. Use a simple View with `borderTopWidth: 1, borderColor: '#4648d4'` or skip if purely decorative in Figma.

### "View More" text
- characters: `"View More"`
- color `#1a1c1c`, Inter Bold 700, 14px

### Team Activity section
- "Team Activity" heading: Inter Bold 700, 18px, color `#1a1c1c`, letterSpacing -0.45
- "View Details→" link: Inter Semi Bold 600, 14px, color `#2c2abc`
- Below: Container (352x248) with 3 team member rows
- Read each member's name, description, and avatar from Figma

### Colors to add to colors.js
```javascript
// New colors found in this batch:
link: '#2c2abc',           // "View Details" links
headerTitle: '#7c3aed',   // "Insights" header text
tabInactive: '#7b6f6f33', // inactive tab button bg (with alpha → rgba(123, 111, 111, 0.2))
avatarBorder: '#4a47d233', // avatar border stroke (with alpha → rgba(74, 71, 210, 0.2))
headerBg: '#f8fafccc',    // header background (with alpha → rgba(248, 250, 252, 0.8))
```

## Prototype Navigation

```javascript
// ============================================
// ALL navigation below is from FIGMA PROTOTYPE
// REACTIONS — verified via get_reactions()
// ============================================

// Tab buttons
onPress "Today"      → navigation.navigate('DashboardToday')
onPress "This Week"  → navigation.navigate('DashboardWeek')
onPress "This Month" → navigation.navigate('DashboardMonth')
onPress "Custom"     → navigation.navigate('CustomMode')

// Metric Cards (each card is tappable)
onPress "Total Tasks" card   → navigation.navigate('ProjectProgress')   // 501:757
onPress "Completed" card     → navigation.navigate('TaskStatus')        // 520:464
onPress "In Progress" card   → navigation.navigate('Completion')        // 529:473
onPress "Overdue" card       → navigation.navigate('OverdueTask')       // 525:831

// "View Details Today's Tasks→" / "...Week's..." / "...Month's..."
onPress → navigation.navigate('ProjectProgress')  // 501:757

// Quick-Nav Buttons
onPress "👥 Workload"  → navigation.navigate('WorkloadMembers')    // 483:470
onPress "📊 Priority"  → navigation.navigate('PriorityAnalysis')   // 521:636
onPress "🔥 Burndown"  → navigation.navigate('BurndownChart')      // 465:604
onPress "📋 Reports"   → navigation.navigate('BuildReport')        // 533:1101

// "View More" text (no Figma reaction — keep as navigate)
onPress → navigation.navigate('WorkloadMembers')

// Team Activity "View Details→" (no Figma reaction — user requested)
onPress → navigation.navigate('DetailMember')

// Tap any team member row (no Figma reaction — user requested)
onPress member row → navigation.navigate('DetailMember')

// Bottom NavBar
Home     → navigation.navigate('DashboardToday')
Tasks    → navigation.navigate('TaskStatus')
PROJECT  → navigation.navigate('ProjectProgress')
Insights → navigation.navigate('BurndownChart')
Settings → navigation.navigate('AlertSettings')
```

NOTE: Screens from later batches don't exist yet. The navigate calls are correct — React Navigation will just warn in dev until those screens are registered.

## Specific Attention Points

- **NO background rectangle**: The old purple `#e1e0ff` rectangle has been removed. Do NOT render it. Use a simple `SafeAreaView` with the app's default background:
  ```jsx
  <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
    <ScrollView>
      {/* Header */}
      {/* Tab buttons */}
      {/* Metric Cards */}
      {/* CTA button */}
      {/* Chart */}
      {/* Quick-Nav Buttons */}
      {/* Team Activity */}
    </ScrollView>
    {/* NavBar — OUTSIDE ScrollView, fixed at bottom */}
    <View>{/* NavBar content */}</View>
  </SafeAreaView>
  ```
- **Responsive buttons**: Do NOT hardcode button widths. Use padding + flexbox to let buttons adapt to content and screen size.
- **Metric Cards**: Each card may have a colored accent indicator — read fills per card from Figma
- **Line Chart Card**: Contains VECTOR nodes for chart lines → use `react-native-svg` or placeholder View with comment
- **Alpha colors**: Several colors have alpha (33, cc suffix). Convert to rgba():
  - `#7b6f6f33` → `rgba(123, 111, 111, 0.2)`
  - `#4a47d233` → `rgba(74, 71, 210, 0.2)`
  - `#f8fafccc` → `rgba(248, 250, 252, 0.8)`
- **Import check**: Verify TouchableOpacity, ScrollView, SafeAreaView are ALL imported

## After This Batch

1. Update `colors.js` with new colors found
2. Update `AppNavigator.js`: import DashboardToday, DashboardWeek, DashboardMonth
3. Test: `cd my-app && npx expo start` → verify:
   - All 3 screens render correctly
   - Tab switching works (Today ↔ This Week ↔ This Month)
   - NO purple background rectangle visible
   - Buttons are responsive (adapt to different screen widths)
   - Quick-nav buttons are tappable
   - NavBar is fixed at bottom
