// export interface ICovidApi {
//     error: boolean;
//     statusCode: number;
//     message: string;
//     data: coviddata;
// }

// interface coviddata {
//     lastChecked: Date;
//     covid19Stats: covid19Stats[];
// }
// interface covid19Stats {
    
//         city?: any,
//         province: string,
//         country: string,
//         lastUpdate: Date,
//         keyId: string,
//         confirmed: number,
//         deaths: number,
//         recovered: number
//     }
export interface ICovidApi {
    key_values?: any;
    total_values: total_values;
    state_wise: object[];
}

interface total_values {
    active: number;
    confirmed: number;
    deaths: number;
    deltaconfirmed: number;
    deltadeaths: number;
    deltarecovered: number;
    lastupdatedtime: Date;
    migratedother: number;
    recovered: number;
    state: string;
    statecode: string;
    statenotes: string;
}
// interface state_wise {
    
//         city?: any,
//         province: string,
//         country: string,
//         lastUpdate: Date,
//         keyId: string,
//         confirmed: number,
//         deaths: number,
//         recovered: number
//     }






