const BASE_URL = "/"
const BASE_API_URL = "/api"


export const buildLink = (value: string): string => {
    return BASE_URL + value
}

export const buildApiLink = (value: string): string => {
    return BASE_API_URL + value
}