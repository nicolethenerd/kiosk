export interface KioskApp {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  color: string;
  textColor: string;
}

export const kioskApps: KioskApp[] = [
  {
    id: "recipes",
    name: "Recipes",
    description: "Browse and manage family recipes",
    icon: "🍽️",
    href: "/recipes",
    color: "bg-orange-500",
    textColor: "text-orange-50",
  },
  {
    id: "calendar",
    name: "Calendar",
    description: "Shared household calendar",
    icon: "📅",
    href: "/calendar",
    color: "bg-blue-500",
    textColor: "text-blue-50",
  },
  {
    id: "shopping",
    name: "Shopping List",
    description: "Grocery & shopping list manager",
    icon: "🛒",
    href: "/shopping",
    color: "bg-green-500",
    textColor: "text-green-50",
  },
  {
    id: "chores",
    name: "Chores & Tasks",
    description: "Household task tracker",
    icon: "✅",
    href: "/chores",
    color: "bg-purple-500",
    textColor: "text-purple-50",
  },
  {
    id: "medications",
    name: "Medications",
    description: "Medication reminders",
    icon: "💊",
    href: "/medications",
    color: "bg-red-500",
    textColor: "text-red-50",
  },
  {
    id: "contacts",
    name: "Contacts",
    description: "Important family contacts",
    icon: "📞",
    href: "/contacts",
    color: "bg-teal-500",
    textColor: "text-teal-50",
  },
];
