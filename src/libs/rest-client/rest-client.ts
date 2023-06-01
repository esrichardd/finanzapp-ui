import { ResponseHandler } from './handler-response'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface RequestOptions extends RequestInit {
    method?: HttpMethod
    headers?: HeadersInit
}

class RestAPI {
    private static instance: RestAPI | null = null
    private baseURL: string
    private responseHandler: ResponseHandler

    private constructor(baseURL?: string) {
        this.baseURL = baseURL ?? '/api'
        this.responseHandler = ResponseHandler.getInstance()
    }

    public static getInstance(): RestAPI {
        if (!RestAPI.instance) {
            RestAPI.instance = new RestAPI()
        }
        return RestAPI.instance
    }

    private buildRequestOptions(method: HttpMethod, options?: RequestOptions): RequestOptions {
        const requestOptions: RequestOptions = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            ...options,
        }

        return requestOptions
    }

    public async get<T>(url: string, options?: RequestOptions): Promise<T> {
        const requestOptions: RequestOptions = this.buildRequestOptions('GET', options)

        try {
            const response = await fetch(`${this.baseURL}${url}`, requestOptions)
            return this.responseHandler.handleResponse<T>(response)
        } catch (error) {
            return this.responseHandler.handleError(error as Error)
        }
    }

    public async post<T>(url: string, data?: any, options?: RequestOptions): Promise<T> {
        const requestOptions: RequestOptions = this.buildRequestOptions('POST', {
            body: JSON.stringify(data),
            ...options,
        })

        try {
            const response = await fetch(`${this.baseURL}${url}`, requestOptions)
            return this.responseHandler.handleResponse<T>(response)
        } catch (error) {
            return this.responseHandler.handleError(error as Error)
        }
    }

    public async put<T>(url: string, data?: any, options?: RequestOptions): Promise<T> {
        const requestOptions: RequestOptions = this.buildRequestOptions('PUT', {
            body: JSON.stringify(data),
            ...options,
        })

        try {
            const response = await fetch(`${this.baseURL}${url}`, requestOptions)
            return this.responseHandler.handleResponse<T>(response)
        } catch (error) {
            return this.responseHandler.handleError(error as Error)
        }
    }
}

export const restApi = RestAPI.getInstance()
export default restApi
