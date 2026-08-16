/** Prefix a site path with Astro's configured `base` (e.g. `/portfolio-practice/`). */
export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL || "/";
  if (!path || path === "/") return base;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base.replace(/\/$/, "")}${normalized}`;
}
