export function formatDateLocale(rawDate: string) {
  const date = new Date(rawDate);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
