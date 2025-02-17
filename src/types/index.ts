export type FormData = {
    name: string;
    age: number;
    country: 'HKD' | 'USD' | 'AUD';
    package: 'standard' | 'safe' | 'super-safe';
    premium_total: number;
};