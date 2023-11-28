import { URL } from "url";

export interface ApnaLinkAPIParams {
    apiKey: string;
    baseURL?: string;
}

export interface ShortenAPIResponse {
    success: boolean;
    data?: {
        long_url: string;
        short_link: string;
    },
    error?: string;
}

export default class ApnaLinkAPI {
    private apiKey: string;
    private baseURL: string;

    constructor(params: ApnaLinkAPIParams) {
        this.apiKey = params.apiKey;
        this.baseURL = params.baseURL || 'https://apna.link/api';
    }

    async shorten(long_url: URL | string): Promise<string> {
        let resp = await this.request('/shorten/', 'POST', { 'long_url': long_url.toString() }) as ShortenAPIResponse;
        if(resp.success) {
            return resp.data?.short_link as string;
        } else {
            throw new Error(resp.error);
        }
    }

    private async request(path: string, method: string, body?: any) {
        const res = await fetch(`${this.baseURL}${path}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'API-Key': this.apiKey
            },
            body: body ? JSON.stringify(body) : undefined
        });

        if (!res.ok) {
            throw new Error(await res.json());
        }
        return await res.json();
    }


}