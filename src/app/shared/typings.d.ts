export * from './dynamic-components/typings'
export * from './notification/typings'

type SuccessCodes = 200 | 201 | 204 | 206
type ClientErrorCodes = 400 | 401 | 403 | 404 | 405 | 422
type ServerErrorCodes = 500 | 501 | 502 | 503

export interface ApiResponse {
    status: SuccessCodes | ClientErrorCodes | ServerErrorCodes
    data: any
}
