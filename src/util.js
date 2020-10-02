export function cutString(str, len = 50) {
  if (str.length <= len) {
    return str;
  }

  return str.substr(0, len - 2) + '...';
}