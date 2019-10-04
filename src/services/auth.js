export const TOKEN_KEY = "am-mpsp";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => {
  const st = localStorage.getItem(TOKEN_KEY);
  if (st) {
    return (JSON.parse(st).t);
  } else {
    return null
  }
};
export const login = (data) => {
  return localStorage.setItem(TOKEN_KEY, JSON.stringify({ t: data.token, i: data.user_id }));
};
export const getUserId = () => {
  const st = localStorage.getItem(TOKEN_KEY);
  if (st) {
    return (JSON.parse(st).i);
  } else {
    return null
  }
}
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};