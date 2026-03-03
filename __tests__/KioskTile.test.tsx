import { render, screen, fireEvent } from "@testing-library/react";
import KioskTile from "@/components/KioskTile";
import type { KioskApp } from "@/lib/apps";

const mockApp: KioskApp = {
  id: "recipes",
  name: "Recipes",
  description: "Browse and manage family recipes",
  icon: "🍽️",
  color: "bg-orange-500",
  textColor: "text-orange-50",
  panelBg: "bg-orange-950",
  panelTitleColor: "text-orange-100",
  panelTextColor: "text-orange-300",
};

describe("KioskTile", () => {
  it("renders the app name", () => {
    render(<KioskTile app={mockApp} onClick={() => {}} />);
    expect(screen.getByText("Recipes")).toBeInTheDocument();
  });

  it("renders the app description", () => {
    render(<KioskTile app={mockApp} onClick={() => {}} />);
    expect(
      screen.getByText("Browse and manage family recipes")
    ).toBeInTheDocument();
  });

  it("renders the app icon", () => {
    render(<KioskTile app={mockApp} onClick={() => {}} />);
    expect(screen.getByText("🍽️")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<KioskTile app={mockApp} onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button", { name: "Recipes" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies color classes", () => {
    render(<KioskTile app={mockApp} onClick={() => {}} />);
    const button = screen.getByRole("button", { name: "Recipes" });
    expect(button.className).toContain("bg-orange-500");
    expect(button.className).toContain("text-orange-50");
  });

  it("has an aria-label matching the app name", () => {
    render(<KioskTile app={mockApp} onClick={() => {}} />);
    expect(screen.getByRole("button", { name: "Recipes" })).toBeInTheDocument();
  });
});
