export function saveUUIDToCookie(value) {
  document.cookie = `auth=${value}`;
}

export function saveUserToCookie(value) {
  document.cookie = `user=${value}`;
}
