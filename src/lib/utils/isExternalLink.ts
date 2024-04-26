export function isExternalLink(link: string): boolean {
  return /^(http(s)?:\/\/)/i.test(link);
}
