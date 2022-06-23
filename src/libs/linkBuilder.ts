const BASE_URL = "/"
const BASE_API_URL = import.meta.env.VITE_FRONTEND_SERVICE_URI


export const buildLink = (value: string): string => {
    return BASE_URL + value
}

export const buildApiLink = (value: string): string => {
    return BASE_API_URL + value
}