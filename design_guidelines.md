# Design Guidelines: Pronote Data Dashboard

## Design Approach
**Selected Approach:** Design System - Material Design  
**Justification:** Utility-focused education tool requiring clear data presentation, tables, forms, and calendar views. Material Design provides robust patterns for data-dense interfaces with excellent form and table components.

**Key Principles:**
- Data clarity over visual flair
- Fast information scanning
- Mobile-first for student accessibility
- Professional, trustworthy interface for academic data

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 220 85% 55% (Educational blue - trust and professionalism)
- Primary Variant: 220 85% 45%
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Surface Variant: 220 15% 95%
- Text Primary: 220 15% 15%
- Text Secondary: 220 10% 45%
- Success: 142 70% 45% (good grades)
- Warning: 38 95% 55% (average grades)
- Error: 0 70% 50% (poor grades)
- Border: 220 15% 85%

**Dark Mode:**
- Primary: 220 85% 65%
- Background: 220 15% 8%
- Surface: 220 15% 12%
- Surface Variant: 220 15% 16%
- Text Primary: 220 10% 95%
- Text Secondary: 220 10% 70%
- Border: 220 15% 22%

### B. Typography
- **Primary Font:** Inter (via Google Fonts CDN)
- **Headers:** font-semibold (H1: text-3xl, H2: text-2xl, H3: text-xl)
- **Body:** font-normal text-base
- **Data/Numbers:** font-medium (emphasize grades and averages)
- **Labels:** font-medium text-sm uppercase tracking-wide

### C. Layout System
**Spacing Primitives:** Tailwind units of 2, 4, 6, and 8 (p-4, m-6, gap-8, etc.)
- Card padding: p-6
- Section spacing: py-8 md:py-12
- Component gaps: gap-4 to gap-6
- Grid gutters: gap-4

### D. Component Library

**Authentication:**
- Centered login card (max-w-md) with elevated shadow
- Input fields with floating labels, border focus states
- Primary button full-width for login action

**Dashboard Layout:**
- Top navigation bar (sticky) with logout, refresh actions
- Sidebar navigation (collapsible on mobile) with icons: Dashboard, Notes, Emploi du Temps, Moyennes
- Main content area: max-w-7xl mx-auto with responsive padding

**Data Tables (Grades):**
- Clean bordered tables with alternating row colors (even rows slightly darker)
- Header row with font-semibold and darker background
- Columns: Matière, Note, Coefficient, Date
- Color-coded grades: green (≥14), orange (10-13.99), red (<10)
- Sortable column headers with arrow indicators
- Mobile: Convert to card layout with stacked information

**Calendar View (Emploi du Temps):**
- Weekly grid layout: days as columns, time slots as rows
- Course blocks: colored by subject with rounded corners (rounded-lg)
- Display: Subject name, room, teacher (text-sm)
- Time labels on left axis
- Current day/time highlighted
- Mobile: Day selector tabs with single-day view

**Statistics Cards (Moyennes):**
- Grid of cards (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Each card: subject name, average grade (large text-4xl font-bold), trend indicator
- Overall average card prominently displayed (larger, accent color)
- Progress bars showing performance relative to class average

**Navigation:**
- Horizontal tabs for main sections with underline indicator
- Breadcrumb navigation for nested views
- Material icons via CDN for all navigation icons

### E. Interactions & States
**Minimal Animations:**
- Smooth transitions on hover (transition-colors duration-200)
- Subtle scale on card hover (hover:scale-[1.02])
- Loading states: skeleton screens for data tables
- Form validation: inline error messages with error color

**No Hero Section** - Launch directly into dashboard or login screen

**Responsive Breakpoints:**
- Mobile: Single column, stacked cards, collapsible navigation
- Tablet (md:): Two-column layouts for stats, sidebar visible
- Desktop (lg:): Full multi-column dashboards, expanded tables

## Special Considerations

**French Language Interface:**
- All labels, buttons, messages in French
- Date formats: DD/MM/YYYY
- Decimal notation: comma separator (15,5 instead of 15.5)

**Data Privacy:**
- Subtle lock icons for secure sections
- Clear logout button always visible
- Session timeout warnings

**Mobile Optimization Critical:**
- Students primarily access on phones
- Touch-friendly targets (min 44px)
- Swipe gestures for calendar navigation
- Bottom navigation bar on mobile for key actions