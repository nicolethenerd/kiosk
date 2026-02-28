import { render, screen, act } from "@testing-library/react";
import Clock from "@/components/Clock";

describe("Clock", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2025-06-15T14:30:00"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders the time after mounting", () => {
    render(<Clock />);
    act(() => {
      jest.advanceTimersByTime(0);
    });
    // Time should be displayed in 12-hour format
    expect(screen.getByText(/2:30 PM/i)).toBeInTheDocument();
  });

  it("renders the full date after mounting", () => {
    render(<Clock />);
    act(() => {
      jest.advanceTimersByTime(0);
    });
    // Date should include day of week, month, day, year
    expect(screen.getByText(/Sunday, June 15, 2025/i)).toBeInTheDocument();
  });

  it("updates the time every second", () => {
    render(<Clock />);
    act(() => {
      jest.advanceTimersByTime(0);
    });
    expect(screen.getByText(/2:30 PM/i)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(60000);
    });
    // After 60 seconds, should show 2:31 PM
    expect(screen.getByText(/2:31 PM/i)).toBeInTheDocument();
  });

  it("has aria-live and aria-atomic attributes for accessibility", () => {
    render(<Clock />);
    const container = document.querySelector("[aria-live]");
    expect(container).toHaveAttribute("aria-live", "polite");
    expect(container).toHaveAttribute("aria-atomic", "true");
  });
});
