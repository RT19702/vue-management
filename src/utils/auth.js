const Token = 'token'

export function setToken(token) {
    sessionStorage.setItem(Token, token)
}

export function getToken() {
    return sessionStorage.getItem(Token)
}

export function removeToken() {
    sessionStorage.clear()
}