const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "/api";

type ApiError = { message?: string };

export async function api<T>(path: string, options: RequestInit = {}, token?: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error((data as ApiError).message || "Unable to complete this request.");
  return data as T;
}

export type ContactMessage = {
  _id: string;
  name: string;
  email: string;
  type: string;
  message: string;
  status: "new" | "read" | "archived";
  createdAt: string;
};
