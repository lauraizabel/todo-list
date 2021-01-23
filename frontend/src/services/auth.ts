const key = "auth";

export interface AuthDataType {
  token: string;
  message: string;
  user: {
    username: string;
  };
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem(key);
}

export function getAuthData(): AuthDataType | null | any {
  const auth = localStorage.getItem(key);
  return auth ? auth : null;
}

export function saveAuthData(user: AuthDataType): void {
  localStorage.setItem(key, `Bearer ${user.token}`);
}

export function removeAuthData(): void {
  localStorage.removeItem(key);
}
