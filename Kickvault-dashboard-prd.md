# **Product Requirements Document: KickVault Dashboard**

## **Overview**

The KickVault Dashboard is a shoe collection management and analytics interface that serves as the second demo artifact for the IxDF Master Class on AI and Design Systems. Unlike KickVault (which has no design system), the dashboard has an established, partially implemented design system. The deliberate gaps in that system — missing components, one-off patterns, undocumented components, and inconsistent token usage — serve as the material the design system agent identifies and addresses during the demo.

## **Purpose Within the Masterclass**

This dashboard is used in the demo that focuses on the design system agent's ability to analyze an existing system, identify gaps, and extend it intelligently. The narrative arc is:

* The audience sees a product that already has a design system — closer to their real-world situation than KickVault  
* The agent scans the dashboard and identifies where the system is incomplete or inconsistently applied  
* The agent proposes additions and fixes: new components to add to the library, one-off patterns to systematize, undocumented components to document, and token drift to resolve  
* The audience sees how an agent functions as an ongoing governance tool, not just a one-time setup

---

## **Product Description**

KickVault Dashboard is the management and analytics layer of the KickVault shoe tracking product. It is used by a power user — someone who wants visibility into their collection, care schedules, wear patterns, and inventory. It has a sidebar navigation, a main content area, and a header. It feels like a real internal product or prosumer SaaS tool.

---

## **Pages and Content**

### **Page 1: Overview Dashboard (index.html)**

The main landing view after login. Shows a high-level summary of the collection.

**Content sections:**

* Header with page title, date, and a notifications icon button  
* A row of four stat cards: Total Shoes, Due for Cleaning, Most Worn This Month, Collection Value  
* A Recent Activity feed showing the last five actions (shoe added, cleaning logged, etc.)  
* A Shoe Condition Overview chart or visual breakdown (good / fair / needs attention)  
* A Quick Actions section with three to four common task buttons

**Design system gaps on this page:**

* The stat cards use a one-off layout pattern not captured as a component in the system  
* The Quick Actions buttons use a button variant (icon \+ label, full width) that does not exist in the component library  
* The condition breakdown uses a color-coded indicator that applies token colors inconsistently — one status color is hardcoded rather than referencing the semantic token

---

### **Page 2: Collection (collection.html)**

A full inventory view of all shoes in the collection with filtering and sorting.

**Content sections:**

* Filter bar with dropdowns for brand, condition, and category, plus a search input  
* A toggle between grid view and list view (both views present but only one needs to be fully built)  
* Grid view: shoe cards showing image, name, brand, condition badge, and last worn date  
* List view: a table with the same data in row format  
* Pagination at the bottom

**Design system gaps on this page:**

* The filter bar is a one-off pattern — functionally it is a toolbar component but it has not been added to the system  
* The list view table exists nowhere else in the product and is not in the component library  
* The condition badge on cards uses the correct token colors but a different size and padding than the badge component defined in the system — a drift from the existing spec  
* The grid/list toggle is a segmented control pattern that exists on another page with different styling — two implementations of the same pattern, neither documented

---

### **Page 3: Shoe Detail (detail.html)**

A detailed view of a single shoe with full history and care information.

**Content sections:**

* A hero section with a large shoe image, name, brand, and key stats inline  
* A tabbed content area with three tabs: Overview, Care History, and Notes  
* Overview tab: specs (color, size, purchase date, purchase price), wear count, condition rating  
* Care History tab: a timeline of cleaning and maintenance events  
* Notes tab: a simple text area for personal notes  
* A sidebar panel with care recommendations and next scheduled cleaning

**Design system gaps on this page:**

* The tab component is built but not documented in the design system — it exists in code but has no spec, no variant list, no usage guidance  
* The care timeline is a one-off pattern — a vertical timeline component that would be useful elsewhere but has not been added to the library  
* The sidebar panel uses a card-like container with different padding and border treatment than the card component in the system — token values are close but not exact, suggesting manual entry rather than token reference  
* The condition rating uses a star-like or dot-based rating display that is not in the component library

---

### **Page 4: Care Schedule (schedule.html)**

A calendar or list view of upcoming and overdue care tasks across the collection.

**Content sections:**

* A month view calendar showing care due dates  
* A list of overdue items highlighted at the top  
* Each schedule item shows shoe name, care type, and due date with a mark-complete action  
* A button to add a manual care reminder

**Design system gaps on this page:**

* The calendar is a complex one-off component with no equivalent in the system — the most significant missing component on the site  
* The overdue items use an alert-style banner that applies warning token colors but uses different padding and border-radius than the alert component defined elsewhere in the system  
* The mark-complete action uses an icon button with a tooltip — the tooltip pattern exists in the system but the icon button variant used here does not match the documented spec

---

### **Page 5: Settings (settings.html)**

User preferences and collection configuration.

**Content sections:**

* A settings layout with a left-side category list and right-side content area  
* Categories: Profile, Notifications, Display Preferences, Data and Export  
* Each category has a form with relevant inputs, toggles, and save actions  
* A danger zone section at the bottom of the page for destructive actions

**Design system gaps on this page:**

* The settings layout (two-column with category nav) is a page-level pattern not captured anywhere in the system  
* The toggle/switch component is used here but has a different size than the one documented in the system — a second undocumented variant  
* The danger zone section uses a red-bordered container pattern that applies error tokens correctly but is not a documented component  
* Form section headings use a divider \+ label pattern that appears on multiple pages but has never been added to the system as a component

---

## **The Established Design System**

The dashboard ships with a partial but real design system. This is what makes it different from KickVault — it has genuine systematization, just with specific gaps.

### **What Exists and Is Correct**

**Tokens:**

* A complete color token system: neutrals, primary, semantic (success, warning, error, info), surface aliases, text aliases, border aliases  
* A spacing scale based on an 8pt grid  
* A typography scale with defined sizes, weights, and line heights  
* Border radius tokens with consistent values  
* Shadow tokens for elevation levels

**Documented Components:**

* Button (primary, secondary, tertiary, destructive — all states)  
* Input (text, select, textarea — all states)  
* Badge/status indicator (size and color variants)  
* Card (default, outlined, interactive variants)  
* Alert/banner (success, warning, error, info variants)  
* Modal  
* Tooltip  
* Avatar  
* Navigation sidebar

**What the system does NOT have (the gaps):**

* Stat card component  
* Filter bar / toolbar component  
* Table component  
* Segmented control / view toggle component  
* Tabs component (built but undocumented)  
* Timeline component  
* Calendar component  
* Settings layout pattern  
* Form section divider pattern  
* Rating display component  
* Icon button variants beyond what is documented

---

## **Design System Gap Summary**

The following table maps each gap to its type and which page surfaces it. This is what the design system agent should be able to identify.

| Gap | Type | Page |
| ----- | ----- | ----- |
| Stat card | Missing component | Overview |
| Full-width icon+label button variant | Missing component | Overview |
| Hardcoded condition color | Inconsistent token usage | Overview |
| Filter bar / toolbar | One-off pattern | Collection |
| Table | Missing component | Collection |
| Condition badge size drift | Inconsistent token usage | Collection |
| Segmented control (two implementations) | One-off pattern | Collection, Detail |
| Tab component (undocumented) | Component built but not documented | Detail |
| Care timeline | One-off pattern | Detail |
| Sidebar panel token drift | Inconsistent token usage | Detail |
| Rating display | Missing component | Detail |
| Calendar | Missing component | Schedule |
| Alert banner padding drift | Inconsistent token usage | Schedule |
| Undocumented icon button variant | Component built but not documented | Schedule |
| Settings layout pattern | One-off pattern | Settings |
| Toggle size variant (undocumented) | Component built but not documented | Settings |
| Danger zone container | One-off pattern | Settings |
| Form section divider pattern | One-off pattern | Settings, Detail |

---

## **Technical Requirements**

* Built with plain HTML and CSS — no frameworks required  
* Shared stylesheet establishing the design system tokens and documented components  
* Page-specific stylesheets where one-off patterns and gaps live  
* No CSS custom property for gaps — hardcoded or inconsistent values are intentional  
* JavaScript minimal — enough to make the sidebar navigation and tab switching functional, nothing more  
* Sidebar navigation links between all five pages  
* Should be viewable by opening HTML files directly in a browser

---

## **Success Criteria**

The dashboard is successful if:

1. It looks and feels like a real, professional product at first glance — the design system presence should be obvious  
2. The existing design system is genuinely good — tokens are used correctly where they should be, documented components are implemented consistently  
3. The gaps are subtle enough that a human reviewer might miss several of them in a casual review  
4. The design system agent reliably surfaces all 18 gaps categorized correctly by type  
5. The agent's proposed additions and fixes are clearly demonstrated as valuable — the before and after tells a compelling governance story  
6. The demo can be completed within a 15-20 minute window

