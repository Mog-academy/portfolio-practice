/** Prefix a site path with Astro's configured `base` (e.g. `/portfolio-practice/`). */
export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL || "/";
  if (!path || path === "/") return base;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  let url = `${base.replace(/\/$/, "")}${normalized}`;
  const isFile = /\.[a-zA-Z0-9]+$/.test(url.split("?")[0] ?? "");
  if (!isFile && !url.endsWith("/")) url += "/";
  return url;
}
