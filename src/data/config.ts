// Central placeholders. Replace the TODO_* values with real data as it becomes
// available — no other file should need to change.

export const TODO_FLIGHT_APP_URL = "TODO_FLIGHT_APP_URL";
export const TODO_LINKEDIN_URL = "TODO_LINKEDIN_URL";
export const TODO_RESUME_URL = "TODO_RESUME_URL";
export const SITE_URL = "TODO_SITE_URL";

export function isTodo(value?: string): boolean {
  return Boolean(value && value.startsWith("TODO_"));
}
