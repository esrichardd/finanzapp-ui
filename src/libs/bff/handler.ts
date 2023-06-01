import { NextResponse } from 'next/server'
import { restApi } from '../rest-client'
import { logger } from '../logger'

type APIHandlerParams = {
    params: {
        method: 'GET' | 'POST' | 'PUT'
        model: string
        queryParams?: Record<string, string>
    }
}
const context = 'REST API'
const buildURL = (model: string, queryParams?: Record<string, string>) => {
    const url = new URL(`${process.env.BASE_BFF_URL}/${model}`)
    if (queryParams) {
        Object.keys(queryParams).forEach((key) => {
            url.searchParams.append(key, queryParams[key])
        })
    }
    return url.toString()
}

const handleSuccess = (data: any) => {
    logger.info(`success`, context)
    return new NextResponse(data, {
        status: 200,
    })
}

const handleError = (error: Error) => {
    logger.error(error.message, context)
    return new NextResponse(error.message, { status: 404 })
}

export const handler = async (request: Request, { params }: APIHandlerParams) => {
    const { model, queryParams, method } = params

    try {
        const url = buildURL(model, queryParams)
        const methodObj = {
            GET: async () => {
                const data = await restApi.get(url)
                return handleSuccess(data)
            },
            POST: async () => {
                const body = await request.json()
                const data = await restApi.post(url, body)
                return handleSuccess(data)
            },
            PUT: async () => {
                const body = await request.json()
                const data = await restApi.put(url, body)
                return handleSuccess(data)
            },
        }

        const apiMethod = methodObj[method]
        if (apiMethod) {
            return await apiMethod()
        } else {
            throw new Error(`Invalid method: ${method}`)
        }
    } catch (error) {
        return handleError(error as Error)
    }
}
