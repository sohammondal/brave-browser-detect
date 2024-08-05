export function isBrave(): boolean {
  try {
    const isBraveBrowser =
      navigator.brave && typeof navigator.brave.isBrave === "function";
    if (isBraveBrowser) {
      return true;
    }

    const userAgent = navigator.userAgent;
    if (userAgent.includes("Brave") || userAgent.includes("brave")) {
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}
