import { CommonUtils } from './../common.utils'
import axios, { AxiosResponse } from 'axios'

export class HttpUtils {
    public static accessToken: any

    private static getBaseUrl(): string {
        return 'http://127.0.0.1:'
    }

    private static getPort(url: string) {
        const isAuth = ['/login', '/token', '/logout', '/signup'].some(key => key === url);
        return (isAuth ? 4000 : 5000);
    }

    private static getUrl(url: string) {
        return this.getBaseUrl() + this.getPort(url) + url;
    }

    public static getAccessToken() {
        return this.accessToken
    }

    public static setAccesToken(token: any) {
        this.accessToken = token
    }

    public static getRefreshToken() {
        return localStorage.getItem('refreshToken')
    }

    public static setRefreshToken(token: any) {
        localStorage.setItem('refreshToken', token)
    }

    public static async get(url: string, jwt = false, headers?: any) {
        this.checkAccessToken(jwt)
        try {
            return await axios.get(this.getUrl(url), this.getHeaders(jwt, headers))
        } catch (httpError) {
            await this.handleRefreshAccesToken(httpError)
            return await axios.post(this.getUrl(url), this.getHeaders(jwt, headers))
        }
    }

    public static async delete(url: string, jwt = false, headers?: any) {
        this.checkAccessToken(jwt)
        try {
            return await axios.delete(this.getUrl(url), this.getHeaders(jwt, headers))
        } catch (httpError) {
            await this.handleRefreshAccesToken(httpError)
            return await axios.delete(this.getUrl(url), this.getHeaders(jwt, headers))
        }
    }

    public static async put(
        url: string,
        data: any,
        jwt = false,
        headers?: any
    ) {
        this.checkAccessToken(jwt)
        try {
            return await axios.put(this.getUrl(url), data, this.getHeaders(jwt, headers))
        } catch (httpError) {
            await this.handleRefreshAccesToken(httpError)
            return await axios.put(this.getUrl(url), data, this.getHeaders(jwt, headers))
        }
    }

    public static async post(
        url: string,
        data: any,
        jwt = false,
        headers?: any
    ) {
        this.checkAccessToken(jwt)
        try {
            return await axios.post(this.getUrl(url), data, this.getHeaders(jwt, headers))
        } catch (httpError) {
            await this.handleRefreshAccesToken(httpError)
            return await axios.post(this.getUrl(url), data, this.getHeaders(jwt, headers))
        }
    }

    private static checkAccessToken(jwt: boolean) {
        if (jwt && CommonUtils.isUndefined(this.getAccessToken)) {
            throw new Error('need a access token')
        }
    }

    private static getHeaders(jwt: boolean, headers?: any) {
        const authHeader = jwt
            ? {
                  authorization: 'Bearer ' + this.getAccessToken(),
              }
            : {}
        headers = headers ? { ...headers, ...authHeader } : authHeader
        return { headers }
    }

    private static async handleRefreshAccesToken(httpError: any) {
        const error = httpError.response
        if (
            error &&
            error.status === 401 &&
            error.data.message &&
            error.data.message === 'TokenExpiredError'
        ) {
            const response = await axios.post(
                this.getUrl('/token'),
                { refreshToken: this.getRefreshToken() },
                { headers: { 'Content-Type': 'application/json' } }
            )
            this.setAccesToken(response.data.accessToken)
            return response
        } else {
            throw error
        }
    }
}
