# Weekly Meal Plan Tile

## Overview

A kiosk tile that displays the weekly meal plan for Nicole and her two children (ages 2.5 and 6). The tile shows a full week (Monday–Sunday) with breakfast, lunch, and dinner for each day.

## Data

Meal data is stored in `data/weekly-meal-plan.json`, keyed by lowercase day name. Each day has three fields:

- `breakfast` – morning meal
- `lunch` – midday meal
- `dinner` – evening meal

Example entry:

```json
{
  "monday": {
    "breakfast": "Oatmeal with banana",
    "lunch": "Peanut butter & jelly wrap",
    "dinner": "Pasta with marinara"
  }
}
```

## Display

- Rows: days of the week (Monday through Sunday)
- Columns: Breakfast, Lunch, Dinner
- Today's row is visually highlighted so the current day's meals stand out at a glance
- The tile is titled "Weekly Meal Plan"

## Purpose

Helps Nicole and her two children (ages 2.5 and 6) quickly see what meals are planned for the week. Meals should be family-friendly and appropriate for young children.
