# Admin Content Management Guide

## Accessing the Admin Panel

**URL:** `http://localhost:3000/admin`

No authentication required - anyone can access and edit content.

## How It Works

### 1. **View All Content**
- The admin panel loads all content from `public/content.json`
- Content is displayed in a table showing:
  - Page name
  - Section name
  - Content key
  - Current value
  - Edit/Delete actions

### 2. **Filter Content**
- Filter by **Page** (home, dashboard, features, study-material, etc.)
- Filter by **Section** (hero, header, footer, features_intro, etc.)
- Combine filters to find specific content quickly

### 3. **Edit Content**
1. Click **"Edit"** button on any content row
2. The form will populate with current values
3. Modify the **Content Value** field
4. Page, Section, and Text Key fields are locked during editing
5. Click **"Update"** to save changes

### 4. **Add New Content**
1. Select a **Page** from dropdown
2. Select or enter a **Section**
3. Enter a **Text Key** (e.g., "heading", "description", "button_text")
4. Enter the **Content Value**
5. Click **"Create"** to add new content

### 5. **Delete Content**
1. Click **"Delete"** button on any content row
2. Confirm the deletion when prompted
3. Content will be removed immediately

## Content Structure

Content is organized in a nested hierarchy:

```
{
  "page_name": {
    "section_name": {
      "text_key": "value"
    }
  }
}
```

**Example:**
```
home.hero.heading = "Your Roadmap to Fluency"
home.hero.subheading = "Master English with confidence"
dashboard.header.greeting = "Welcome to Dashboard"
```

## Available Pages

- home
- dashboard
- features
- study-material
- offline-study
- one-to-one-lessons
- practice-material
- progress-tracking
- reward-system
- study-tools
- support-system
- video-lessons
- voice-recognition
- login
- membership
- level-guide
- footer

## Pages That Use This Content

Currently, the **home page** is set up to use dynamic content from the JSON file. To make other pages dynamic:

1. Import the `useContent` hook in the page component:
   ```javascript
   import { useContent, getPageContent } from "@/src/hooks/useContent";
   ```

2. Use the hook to load content:
   ```javascript
   const { content, loading } = useContent();
   const pageContent = getPageContent(content, "page_name");
   ```

3. Display content in your components:
   ```javascript
   <h1>{pageContent.section?.text_key || "Default Text"}</h1>
   ```

## File Locations

- **Admin Component:** `src/components/AdminTextManagement.js`
- **Content JSON:** `public/content.json`
- **Save API:** `app/api/save-content/route.js`
- **Content Hook:** `src/hooks/useContent.js`
- **Admin Page:** `app/admin/page.js`

## Features

✅ No authentication required
✅ Real-time editing
✅ Filter and search capabilities
✅ Add/Edit/Delete operations
✅ Organized page-section-key structure
✅ Automatic file saving
✅ Clean, user-friendly interface

## Note

- All changes are saved directly to `public/content.json`
- Changes are reflected immediately across all pages using the content hook
- The file is version-controlled in git, so you can track changes

---

**Ready to manage your content?** Head to `/admin` and start editing!
