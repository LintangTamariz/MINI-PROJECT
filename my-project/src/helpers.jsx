import { AUTH_TOKEN } from "./constant";
    
export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};
export const getUser = () => {
  const storedUser = localStorage.getItem('username');
  return storedUser ? JSON.parse(storedUser) : null;
};

export const setToken = (token) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const setUser = (user) => {
  return localStorage.setItem('user', JSON.stringify(user));
}

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};