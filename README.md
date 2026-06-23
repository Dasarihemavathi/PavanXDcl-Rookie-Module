# PavanX Pro DSA — Rookie Module
## Complete Project Documentation

A beginner-friendly React website for the PavanX Pro DSA Rookie warm-up sheet.
Built with **plain HTML, CSS, JavaScript and basic React ONLY** — no Tailwind, 
no Bootstrap, no Material UI. Every line of code is hand-written and simple.

---

## 📋 Quick Start (3 steps)

1. **Extract ZIP using 7-Zip** (download from 7-zip.org, not Windows built-in)
2. **Open terminal in the folder, run:**
   ```bash
   npm install
   npm run dev
   ```
3. **Click the link** that appears (usually http://localhost:5173)

Done! Website is live. Edit files in `src/` and browser auto-refreshes.

---

## 📚 Full Table of Contents

1. [What Is This Project?](#what-is-this-project)
2. [Design Philosophy](#design-philosophy)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Setup & Installation](#setup--installation)
6. [How to Use](#how-to-use)
7. [Key Features](#key-features)
8. [File Guide](#file-guide)
9. [How to Add Modules 2-7](#how-to-add-modules-2-7)
10. [Common Issues & Fixes](#common-issues--fixes)
11. [Interview Talking Points](#interview-talking-points)

---

## What Is This Project?

This is a **learning platform** for the PavanX Pro DSA Rookie warm-up sheet.

**Home page shows:**
- 8 module cards (Module 0 to Module 7)
- Each card: title, description, number of sessions
- Module 0 & 1: ACTIVE (clickable, with real YouTube/Notes links)
- Modules 2-7: LOCKED (coming soon)

**When you click an active module:**
- Detail page opens with a table
- Table shows every session in that module
- Each session has buttons: Class Recording, Notes, Practice
- Each session has importance badge (Extreme, Critical, High, Medium, Low, Core)

---

## Design Philosophy

Everything is **intentionally simple and hand-made**:

### Visual Design
- Dark theme (dark navy, light text)
- No gradients, no complex effects — just solid colors
- Cards with simple borders — no shadows
- **Plain text buttons** with borders ONLY — no filled backgrounds

### Code Design
- ONE CSS file for all styling
- Small, focused components — each does ONE job
- Plain JavaScript objects for data
- Basic React hooks only (useState)

### Why This Matters for Interviews
- "I built every style by hand, I understand each CSS rule"
- "I separated data from UI, changing content is easy"
- "Each component is small, modifiable, understandable"
- "Only essential React features, no heavy libraries"

---

## Technology Stack

| Component | Technology |
|-----------|------------|
| UI | React 18 |
| Build | Vite 5 |
| Styling | Plain CSS |
| Language | JavaScript (ES6+) |
| Package Mgr | npm |

---

## Project Structure

```
pavanx-rookie-module/
│
├── README.md                    ← This file
├── index.html                   ← Only HTML (one <div id="root">)
├── package.json                 ← Dependencies
├── vite.config.js               ← Vite config
│
└── src/                         ← All the code
    │
    ├── main.jsx                 ← Entry point
    ├── App.jsx                  ← Main component (decides what to show)
    ├── App.css                  ← ALL styles for entire website
    │
    ├── data/
    │   └── moduleData.js        ← All module + session + link data
    │
    └── components/              ← Reusable pieces
        ├── NavigationBar.jsx
        ├── HomeHeroSection.jsx
        ├── ProgressStatsBar.jsx
        ├── ModuleCard.jsx
        ├── ModuleCardGrid.jsx
        ├── ModuleDetailPage.jsx
        └── SessionTableRow.jsx
```

### Code Flow
1. Browser loads `index.html` → finds `<div id="root">`
2. `main.jsx` tells React to render `App` inside that div
3. `App.jsx` decides: "Is a module open?" → Shows home OR detail
4. Components render — each takes props, returns HTML-like JSX
5. `App.css` styles everything

---

## Setup & Installation

### Prerequisites
- Node.js installed (nodejs.org)
- Text editor (VS Code recommended)
- Terminal

### Step 1: Extract ZIP (Important!)
**Use 7-Zip, NOT Windows built-in "Extract All":**
1. Download 7-Zip: https://www.7-zip.org/
2. Right-click ZIP → 7-Zip → Extract Here
3. Folder `pavanx-rookie-module` appears

### Step 2: Open Terminal in Folder
- Windows: Shift + Right-click → "Open PowerShell window here"
- Mac/Linux: Open terminal, drag folder into it

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Start Development Server
```bash
npm run dev
```
You'll see:
```
  ➜  Local:   http://localhost:5173/
```

### Step 5: Open in Browser
Click that link or type into address bar.

### Step 6: Code & See Changes
Edit any file in `src/` → save → browser auto-refreshes. No restart needed.

### Stop the Server
Press `Ctrl + C` in terminal.

---

## How to Use

### Home Page
- Scroll through 8 module cards
- Module 0 & 1: Click to see sessions
- Modules 2-7: Grayed out (locked)

### Module Detail Page
- **Class Recording** → YouTube in new tab
- **Notes** → Google Docs in new tab
- **Practice buttons** → LeetCode/HackerRank/GeeksforGeeks
- **Importance badge** → How critical this topic is
- **← Back button** → Return to home

---

## Key Features

✅ Two-page design (Home + Module detail)
✅ Responsive (works on desktop and mobile)
✅ Real links for Module 0 & 1
✅ Clean buttons — text + border only
✅ Easy to extend — edit ONE data file to add modules
✅ No UI library dependencies
✅ Interview-ready code

---

## File Guide

**index.html** — Only HTML file. Contains empty `<div id="root">`. React fills it.

**main.jsx** — Starting point. Tells React to render App inside #root.

**App.jsx** — The "brain". Holds useState for: "Is a module open?". Renders home or detail page.

**App.css** — ALL styling. Uses CSS variables for colors. Easy to customize.

**moduleData.js** — Pure JavaScript data. No React code. Edit this to add content.

**components/** — Small pieces. Each does ONE job. Easy to understand and modify.

---

## How to Add Modules 2-7

### When You Have Links for a Module

**Edit ONLY this file:** `src/data/moduleData.js`

**Steps:**
1. Find module object (e.g., Module 2)
2. Change `isActive: false` → `isActive: true`
3. Fill `sessions: []` array with session objects

**Session object shape:**
```javascript
{
  id: "AL-01",
  content: "Topic name",
  resources: [
    { label: "Class Recording", type: "video", url: "https://..." },
    { label: "Notes", type: "notes", url: "https://..." }
  ],
  practice: [
    { label: "LeetCode Q", type: "leet", url: "https://..." }
  ],
  importance: "extreme"
}
```

**Save → Browser auto-refreshes → Module is active.**

No other files need changing.

---

## Common Issues & Fixes

**npm error EJSONPARSE**
- Cause: Windows built-in "Extract All" corrupted ZIP
- Fix: Use 7-Zip (see Setup Step 1)

**Buttons have background colors**
- Cause: Old version
- Fix: Download latest ZIP

**Text too small on detail page**
- Cause: Old version
- Fix: Download latest ZIP

**"Cannot find module" error**
- Cause: Didn't run `npm install`
- Fix: Run `npm install` in terminal

**Nothing happens when clicking module**
- Cause: Modules 2-7 are locked (isActive: false)
- Fix: Edit moduleData.js and activate them

---

## Interview Talking Points

✅ **"All styling is hand-written in one CSS file"**

✅ **"Data and UI are completely separate"**

✅ **"Only basic React — useState, props, .map()"**

✅ **"Adding modules takes 2 minutes — edit one data file only"**

✅ **"All links are real — Module 0 & 1 have YouTube/Notes/LeetCode"**

✅ **"Simple design on purpose — every line makes sense, no magic"**

---

## More Help

See **`PavanX_Rookie_Module_React_Guide.pdf`** for:
- Detailed section-by-section code explanation
- React concepts simplified
- Full code for every file
- Diagrams and examples

---

**Happy coding!** 🚀
