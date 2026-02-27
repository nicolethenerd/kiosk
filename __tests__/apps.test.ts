import { kioskApps } from "@/lib/apps";

describe("kioskApps config", () => {
  it("has at least 6 apps", () => {
    expect(kioskApps.length).toBeGreaterThanOrEqual(6);
  });

  it("every app has required fields", () => {
    kioskApps.forEach((app) => {
      expect(app.id).toBeTruthy();
      expect(app.name).toBeTruthy();
      expect(app.description).toBeTruthy();
      expect(app.icon).toBeTruthy();
      expect(app.href).toBeTruthy();
      expect(app.color).toBeTruthy();
      expect(app.textColor).toBeTruthy();
    });
  });

  it("every app href starts with /", () => {
    kioskApps.forEach((app) => {
      expect(app.href).toMatch(/^\//);
    });
  });

  it("app IDs are unique", () => {
    const ids = kioskApps.map((app) => app.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it("includes Recipes app", () => {
    const recipes = kioskApps.find((a) => a.id === "recipes");
    expect(recipes).toBeDefined();
    expect(recipes?.href).toBe("/recipes");
  });

  it("includes Calendar app", () => {
    const calendar = kioskApps.find((a) => a.id === "calendar");
    expect(calendar).toBeDefined();
    expect(calendar?.href).toBe("/calendar");
  });
});
