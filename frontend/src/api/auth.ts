const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

interface AuthResponse {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
  };
}

interface ApiError {
  message: string;
}

async function handleResponse<T>(res: Response): Promise<T> {
  const data = await res.json();
  if (!res.ok) {
    throw new Error((data as ApiError).message || 'Something went wrong');
  }
  return data as T;
}

export const registerUser = async (email: string, password: string): Promise<AuthResponse> => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse<AuthResponse>(res);
};

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse<AuthResponse>(res);
};

export const getCurrentUser = async (token: string) => {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return handleResponse<{ user: { id: string; email: string } }>(res);
};