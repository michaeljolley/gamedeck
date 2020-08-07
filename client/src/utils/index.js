export const apiUrl = process.env.VUE_APP_GAMEDECK_API_URL;

export function isInRole(roles, role) {
  return roles.indexOf(role) > -1
}