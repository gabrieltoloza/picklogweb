export interface ResponseToken {
    msg:    string;
    status: boolean;
    result: TokenResult[];
}


export interface TokenResult {
    api_token:     string;
    api_expire_in: number;
}