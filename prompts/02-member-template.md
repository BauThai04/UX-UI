# PROMPT TEMPLATE — Gen screens for: [MEMBER_NAME]

> Paste the content of `00-master-prompt.md` above this line, or reference it.

## Assignment

You are generating code for **[MEMBER_NAME]**'s screens.

**Figma Page**: "[PAGE_NAME]" — Page ID: `[PAGE_ID]`

## Step-by-step

### 1. Navigate to page

```
navigate_to_page(pageId="[PAGE_ID]")
```

### 2. Discover all frames

```
get_design_context(depth=2, detail="compact", dedupe_components=true)
```

List every top-level FRAME in the page. These are the screens to generate.

### 3. For each frame, generate a screen file

Save to: `screens/[MEMBER_FOLDER]/[ScreenName].js`

For each frame:

```
1. get_node(nodeId="<frame_id>") → read FULL node tree with all children
2. For every TEXT node: read `characters` (exact text), `fontSize`, `fontWeight`, `fontFamily`, `fills` (text color)
3. For every FRAME/RECTANGLE: read `fills`, `strokes`, `cornerRadius`, `padding`, `effects`, `width`, `height`
4. For every auto-layout FRAME: read `layoutMode`, `itemSpacing`, `paddingLeft/Right/Top/Bottom`
5. Generate React Native component matching the Figma hierarchy exactly
6. Use get_screenshot() to visually verify
7. Cross-check element count: code must have same number of Views/Texts as Figma nodes
```

### 4. Code style

Each screen is a **single self-contained file** — Header, content, and NavBar are all in the same file. Follow the same structure as `screens/DashboardScreen.js`:

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
- Do NOT create separate NavBar.js or Header.js files
- Icons: use emoji placeholders (🏠, 📊, ⚙️, etc.)
- **Header is unique per screen** — do NOT copy header from another screen. Read each screen's header node from Figma and replicate exactly (title, icons, back button, action buttons may all differ).

### 5. Verification checklist (per screen)

- [ ] Text content is character-for-character identical to Figma
- [ ] Colors match Figma fills — use tokens or extracted hex
- [ ] Dimensions (width, height) match Figma bounds
- [ ] cornerRadius is exact (not rounded to nearest 4/8)
- [ ] Padding is from auto-layout, not guessed
- [ ] No elements added that aren't in Figma
- [ ] No elements removed that are in Figma
- [ ] Shadows/effects from Figma `effects` are replicated
- [ ] Font sizes and weights match Figma text styles

---

## Team Member Reference

| Member | Page Name | Page ID | Folder |
|---|---|---|---|
| Hong Huy | Hong huy | `109:1524` | `screens/hong-huy/` |
| Hoan | Hoan | `55:246` | `screens/hoan/` |
| Em Bau | Em BauTb | `49:246` | `screens/em-bau/` |
| Tuan | Tuan | `35:246` | `screens/tuan/` |
| TheAnh | TheAnh1 | `226:3066` | `screens/the-anh/` |
