import { isBrave } from ".";

describe("isBrave", () => {
  afterEach(() => {
    // reset navigator.brave
    Object.defineProperty(navigator, "brave", {
      value: undefined,
      configurable: true,
    });

    // reset navigator.userAgent
    Object.defineProperty(navigator, "userAgent", {
      value: "Mozilla/5.0 Opera",
      configurable: true,
    });
  });

  it("should detect Brave browser by navigator.brave", () => {
    Object.defineProperty(navigator, "brave", {
      value: { isBrave: () => true },
      configurable: true,
    });
    expect(isBrave()).toBe(true);
  });

  it("should detect Brave browser by userAgent", () => {
    Object.defineProperty(navigator, "userAgent", {
      value: "Mozilla/5.0 Brave",
      configurable: true,
    });
    expect(isBrave()).toBe(true);
  });

  it("should fail to detect Brave Browser", () => {
    expect(isBrave()).toBe(false);
  });
});
