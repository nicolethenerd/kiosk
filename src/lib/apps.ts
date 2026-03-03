export interface KioskApp {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  textColor: string;
  panelBg: string;
  panelTitleColor: string;
  panelTextColor: string;
}

export const kioskApps: KioskApp[] = [
  {
    id: "recipes",
    name: "Recipes",
    description: "Browse and manage family recipes",
    icon: "🍽️",
    color: "bg-orange-500",
    textColor: "text-orange-50",
    panelBg: "bg-orange-950",
    panelTitleColor: "text-orange-100",
    panelTextColor: "text-orange-300",
  },
  {
    id: "calendar",
    name: "Calendar",
    description: "Shared household calendar",
    icon: "📅",
    color: "bg-blue-500",
    textColor: "text-blue-50",
    panelBg: "bg-blue-950",
    panelTitleColor: "text-blue-100",
    panelTextColor: "text-blue-300",
  },
  {
    id: "shopping",
    name: "Shopping List",
    description: "Grocery & shopping list manager",
    icon: "🛒",
    color: "bg-green-500",
    textColor: "text-green-50",
    panelBg: "bg-green-950",
    panelTitleColor: "text-green-100",
    panelTextColor: "text-green-300",
  },
  {
    id: "chores",
    name: "Chores & Tasks",
    description: "Household task tracker",
    icon: "✅",
    color: "bg-purple-500",
    textColor: "text-purple-50",
    panelBg: "bg-purple-950",
    panelTitleColor: "text-purple-100",
    panelTextColor: "text-purple-300",
  },
  {
    id: "medications",
    name: "Medications",
    description: "Medication reminders",
    icon: "💊",
    color: "bg-red-500",
    textColor: "text-red-50",
    panelBg: "bg-red-950",
    panelTitleColor: "text-red-100",
    panelTextColor: "text-red-300",
  },
  {
    id: "contacts",
    name: "Contacts",
    description: "Important family contacts",
    icon: "📞",
    color: "bg-teal-500",
    textColor: "text-teal-50",
    panelBg: "bg-teal-950",
    panelTitleColor: "text-teal-100",
    panelTextColor: "text-teal-300",
  },
];
