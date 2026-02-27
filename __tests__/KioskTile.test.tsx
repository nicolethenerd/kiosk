import { render, screen } from "@testing-library/react";
import KioskTile from "@/components/KioskTile";
import type { KioskApp } from "@/lib/apps";

// Mock next/link
jest.mock("next/link", () => {
  const MockLink = ({
    href,
    children,
    className,
    "aria-label": ariaLabel,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
    "aria-label"?: string;
  }) => (
    <a href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

const mockApp: KioskApp = {
  id: "recipes",
  name: "Recipes",
  description: "Browse and manage family recipes",
  icon: "🍽️",
  href: "/recipes",
  color: "bg-orange-500",
  textColor: "text-orange-50",
};

describe("KioskTile", () => {
  it("renders the app name", () => {
    render(<KioskTile app={mockApp} />);
    expect(screen.getByText("Recipes")).toBeInTheDocument();
  });

  it("renders the app description", () => {
    render(<KioskTile app={mockApp} />);
    expect(
      screen.getByText("Browse and manage family recipes")
    ).toBeInTheDocument();
  });

  it("renders the app icon", () => {
    render(<KioskTile app={mockApp} />);
    expect(screen.getByText("🍽️")).toBeInTheDocument();
  });

  it("links to the correct href", () => {
    render(<KioskTile app={mockApp} />);
    const link = screen.getByRole("link", { name: "Recipes" });
    expect(link).toHaveAttribute("href", "/recipes");
  });

  it("applies color classes", () => {
    render(<KioskTile app={mockApp} />);
    const link = screen.getByRole("link", { name: "Recipes" });
    expect(link.className).toContain("bg-orange-500");
    expect(link.className).toContain("text-orange-50");
  });

  it("has an aria-label matching the app name", () => {
    render(<KioskTile app={mockApp} />);
    expect(screen.getByRole("link", { name: "Recipes" })).toBeInTheDocument();
  });
});
