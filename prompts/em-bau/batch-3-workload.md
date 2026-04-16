# BATCH 3 — Workload & Members (3 screens)

> Read and follow ALL rules in `prompts/00-master-prompt.md` before starting.
> Read `prompts/em-bau/batch-0-setup.md` for navigation map and colors.
> **IMPORTANT**: ALL commands must run from `my-app/` directory. `package.json` is at `my-app/package.json`, NOT at the repo root.

## Prerequisites — Already Generated (Batch 1 + 2)

- `screens/em-bau/DashboardToday.js`
- `screens/em-bau/DashboardWeek.js`
- `screens/em-bau/DashboardMonth.js`
- `screens/em-bau/CustomMode.js`
- `screens/em-bau/BurndownChart.js`

## Figma Page

- Page: "Em BauTb" — ID: `49:246`
- `navigate_to_page(pageId="49:246")`

## Screens to Generate

| # | Figma Frame | Frame ID | Output File |
|---|---|---|---|
| 1 | Frame 5 WorkLoad_Members | `483:470` | `screens/em-bau/WorkloadMembers.js` |
| 2 | Frame 6 Detail Member | `489:692` | `screens/em-bau/DetailMember.js` |
| 3 | Frame 7 Member_Comparison | `492:1000` | `screens/em-bau/MemberComparison.js` |

## For Each Screen — Mandatory Steps

1. **Read**: `get_node(nodeId="<frame_id>")` — read the FULL node tree
2. **Extract EVERY node**: type, name, bounds, fills, strokes, cornerRadius, padding, effects, characters, fontSize, fontFamily, fontWeight, letterSpacing, lineHeight
3. **Header**: Read THIS frame's header — each is unique
4. **All text**: Use `characters` exactly
5. **All colors**: Read `fills` per node
6. **Build**: Generate component with StyleSheet.create
7. **Verify**: `get_screenshot(nodeIds=["<frame_id>"])`

## Screen-Specific Notes

### WorkloadMembers (483:470)
- Has Header with title + possible filter/sort action
- Main content is a list of team members with workload indicators
- Each member row is tappable → navigates to DetailMember
- Read each member row's exact layout: avatar placeholder, name, role, workload bar

### DetailMember (489:692)
- Header with Back button + member name
- Detailed stats for one team member
- May contain charts/graphs (check for VECTOR nodes)
- Has compare button or link → navigates to MemberComparison
- Back button → `navigation.goBack()`

### MemberComparison (492:1000)
- Header with Back button + "Compare" or similar title
- Side-by-side or list comparison of members
- Has selection/toggle controls
- Back button → `navigation.goBack()`

## Prototype Navigation

```javascript
// WorkloadMembers
Member row tap → navigation.navigate('DetailMember')
Back button → navigation.goBack()

// DetailMember
Compare button → navigation.navigate('MemberComparison')
Back button → navigation.goBack()

// MemberComparison
Back button → navigation.goBack()

// Bottom NavBar (all 3 screens)
Home     → navigation.navigate('DashboardToday')
Tasks    → navigation.navigate('TaskStatus')
PROJECT  → navigation.navigate('ProjectProgress')
Insights → navigation.navigate('BurndownChart')
Settings → navigation.navigate('AlertSettings')
```

## Connect to Previous Screens

In `DashboardToday.js`, `DashboardWeek.js`, `DashboardMonth.js`:
- The "View More" text in Team Activity section → `navigation.navigate('WorkloadMembers')`
- If this link is not yet connected, update it now.

## After This Batch

Update `AppNavigator.js`:
- Import WorkloadMembers, DetailMember, MemberComparison
- Uncomment their Stack.Screen registrations
- Verify: Dashboard "View More" → WorkloadMembers → tap member → DetailMember → Compare → MemberComparison
- Verify: Back button returns correctly through the stack
