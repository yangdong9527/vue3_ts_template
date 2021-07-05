import Cookies from 'js-cookie'

export function getToken(): string | undefined {
  return Cookies.get('token')
}

export function setToken(token: string, rememberMe: boolean): void {
  if (rememberMe) {
    Cookies.set('token', token, { expires: 1 })
  } else {
    Cookies.set('token', token)
  }
}

export function removeToken(): void {
  Cookies.remove('token')
}
