export function getUserDetails() {
  let user = JSON.parse(localStorage.getItem('User'));
  return user;
}
