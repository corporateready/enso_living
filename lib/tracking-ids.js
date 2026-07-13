const TRACKING_ID_WAIT_TIMEOUT_MS = 1200;
const TRACKING_ID_POLL_INTERVAL_MS = 50;

function getBrowserWindow() {
  return typeof window === "undefined" ? null : window;
}

function readLocalStorageValue(key) {
  const browserWindow = getBrowserWindow();
  if (!browserWindow?.localStorage) return "";

  try {
    return browserWindow.localStorage.getItem(key) || "";
  } catch {
    return "";
  }
}

function readPostHogValue(methodName, ...args) {
  const browserWindow = getBrowserWindow();
  const posthog = browserWindow?.posthog;

  if (!posthog || Array.isArray(posthog) || posthog.__loaded !== true) return "";

  const method = posthog[methodName];

  if (typeof method !== "function") return "";

  try {
    const value = method.apply(posthog, args);
    return typeof value === "string" ? value : "";
  } catch {
    return "";
  }
}

function firstValue(...values) {
  return values.find((value) => typeof value === "string" && value.length > 0) || "";
}

export function readTrackingIds() {
  return {
    pageview_event_id: firstValue(
      readLocalStorageValue("pageview_event_id"),
      readPostHogValue("get_property", "pageview_event_id"),
      readPostHogValue("getPageViewId"),
    ),
    external_id: firstValue(
      readLocalStorageValue("external_id"),
      readPostHogValue("get_property", "external_id"),
      readPostHogValue("get_distinct_id"),
    ),
  };
}

export function waitForTrackingIds({
  timeout = TRACKING_ID_WAIT_TIMEOUT_MS,
  interval = TRACKING_ID_POLL_INTERVAL_MS,
} = {}) {
  if (!getBrowserWindow()) {
    return Promise.resolve(readTrackingIds());
  }

  const startedAt = Date.now();

  return new Promise((resolve) => {
    const tick = () => {
      const ids = readTrackingIds();
      const hasRequiredIds = Boolean(ids.pageview_event_id && ids.external_id);
      const timedOut = Date.now() - startedAt >= timeout;

      if (hasRequiredIds || timedOut) {
        resolve(ids);
        return;
      }

      window.setTimeout(tick, interval);
    };

    tick();
  });
}
