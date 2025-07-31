import { Schema } from 'mongoose';
export declare const CartSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: string;
    items: import("mongoose").Types.DocumentArray<{
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }> & {
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }>;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: string;
    items: import("mongoose").Types.DocumentArray<{
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }> & {
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }>;
}>, {}> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: string;
    items: import("mongoose").Types.DocumentArray<{
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }> & {
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }>;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
