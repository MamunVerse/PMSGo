import { Document } from 'mongoose';

export interface OTPInterface extends Document {
    email: string;
    otp: string;
    status: number;
    createdDate: Date;
}