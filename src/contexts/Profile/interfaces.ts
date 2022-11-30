import {
    Dispatch,
    SetStateAction,
} from "react";

interface Address {
    id: string;
    complement?: string;
    city: string;
    country: string;
    state: string;
    zipCode: string;
    street: string;
    number: string;
}

interface ProfileContextType {
    address: Address[] | null;
    setAddress: Dispatch<SetStateAction<Address[] | null>>;
}


export type {  ProfileContextType, Address }
