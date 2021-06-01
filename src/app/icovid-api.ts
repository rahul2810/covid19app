export interface ICovidApi {
    "error": boolean,
    "statusCode": number,
    "message": string,
    "data": coviddata
}

interface coviddata {
    "lastChecked": string,
    "covid19Stats": covid19Stats[]
}
interface covid19Stats {
    
        "city": string,
        "province": string,
        "country": string,
        "lastUpdate": string,
        "keyId": string,
        "confirmed": number,
        "deaths": number,
        "recovered": number
    }
