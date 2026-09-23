// Privacy-respecting, stub-first analytics.
// Fires a CustomEvent + dataLayer push. No external scripts, no cookies.
export type AnalyticsEvent =
  | "resume_download"
  | "github_click"
  | "linkedin_click"
  | "project_open"
  | "contact_click"
  | "recruiter_mode"
  | "case_study_open"
  | "terminal_used"
  | "palette_used";

export function track(event: AnalyticsEvent, detail?: string) {
  if (typeof window === "undefined") return;
  try {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event, detail, ts: Date.now() });
    window.dispatchEvent(new CustomEvent("portfolio-analytics", { detail: { event, detail } }));
  } catch {
    /* analytics must never break the page */
  }
}
