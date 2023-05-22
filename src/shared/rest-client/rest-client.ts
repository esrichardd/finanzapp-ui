import { PostRequestOptions, RequestOptions } from './types/rest-client'

export function get(url: string, options: RequestOptions = {}) {
    return doRequest(url, {
        ...options,
        method: 'GET',
    })
}

export function post(url: string, options: PostRequestOptions = {}) {
    return doRequest(url, {
        ...options,
        method: 'POST',
        body: JSON.stringify(options.body),
    })
}

async function doRequest(url: string, { params, ...options }: RequestOptions) {
    const requestUrl = generateUrl(url, params)
    const requestOptions = mergeConfig(options)
    return fetch(requestUrl, requestOptions).then((response) => {
        if (response.ok) {
            if (response.headers?.get('content-type') === 'text/xml; charset=utf-8') {
                return response.text()
            }
            return response.json()
        }

        const error = new Error(`HTTP status code: ${response.status} | ${response}`)
        throw error
    })
}

const buildBasePath = () => {
    const baseDomain = process.env['SERVICE_DOMAIN'] || ''
    const port = process.env[`APP_PORT`] || 3000

    if ((baseDomain || '') === '') {
        return `http://localhost:${port}`
    }

    return `http://${baseDomain}:${port}`
}

function mergeConfig(options: RequestInit) {
    const config: RequestInit = { headers: {} }
    return {
        ...config,
        ...options,
        headers: {
            ...config.headers,
            ...options.headers,
        },
    }
}

function generateUrl(target: string, params: object | undefined) {
    const queryParams = getParams(params)
    const baseUrl = buildBasePath()
    return `${baseUrl}${target}${queryParams}`
}

function getParams(params: object | undefined) {
    if (!params) return ''

    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            searchParams.append(key, value)
        }
    })

    return `?${searchParams.toString()}`
}
