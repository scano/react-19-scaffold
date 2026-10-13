export interface User {
  id: string
  username: string
  name: string
  email: string
}

export type LoginResult =
  | { ok: true }
  | { ok: false; message: string }
