// Central site configuration. `isTodo` is used to mark optional links that are
// not yet available — those render as disabled rather than broken links.

export const SITE_URL = "https://arthursmithportfolio.up.railway.app";

export function isTodo(value?: string): boolean {
  return Boolean(value && value.startsWith("TODO_"));
}
