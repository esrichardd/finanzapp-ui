export class ResponseHandler {
    private static instance: ResponseHandler | null = null

    private constructor() {}

    public static getInstance(): ResponseHandler {
        if (!ResponseHandler.instance) {
            ResponseHandler.instance = new ResponseHandler()
        }
        return ResponseHandler.instance
    }

    public async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
        const responseData: T = await response.json()
        return responseData
    }

    public handleError(error: Error): never {
        throw new Error('An error occurred in the request')
    }
}
