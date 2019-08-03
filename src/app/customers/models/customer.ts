import { IGender } from 'src/app/genders/models/gender';

export interface ICustomer {
    id: number;
    dateOfBirth: Date;
    firstName: string;
    lastName: string;
    gender: IGender;
    primaryEmail: string;
    secondaryEmail: string;
    primaryPhoneNumber: string;
    secondaryPhoneNumber: string;
    notes: string;
}