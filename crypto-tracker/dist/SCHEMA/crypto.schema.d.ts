export declare class Delta {
    hour: number;
    day: number;
    week: number;
    month: number;
    quarter: number;
    year: number;
}
export declare class Crypto {
    code: string;
    rate: number;
    volume: number;
    cap: number;
    delta: Delta;
}
export declare const cryptoSchema: import("mongoose").Schema<Crypto, import("mongoose").Model<Crypto, any, any, any, import("mongoose").Document<unknown, any, Crypto> & Crypto & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Crypto, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Crypto>> & import("mongoose").FlatRecord<Crypto> & {
    _id: import("mongoose").Types.ObjectId;
}>;
