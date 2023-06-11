import { AuthField } from "../enum/auth-field.enum";

export interface Login {
    [AuthField.IDENTIFICATION]: string;
    [AuthField.IDENTIFICATION_TYPE]: string;
    [AuthField.PASSWORD]: string;
}
