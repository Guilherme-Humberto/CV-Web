// Configuração de autenticação de usuários
const STORAGE_KEY = ""

export const isAuthenticated = () => true
export const login = (token) => localStorage.setItem(STORAGE_KEY, token)
export const logout = (token) => localStorage.removeItem(STORAGE_KEY, token)
export { STORAGE_KEY }