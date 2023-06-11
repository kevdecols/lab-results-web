import { Common } from "./common";


export interface User extends Common {
    identification: string;
    identificationType: string;
    name: string;
    lastName: string;
    email: string;
    type: string;
    isAdmin?: boolean;
    phone: string;
    address: string;
    sex: string;
}
