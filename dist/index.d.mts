type AddParams = {
    a: number;
    b: number;
};

declare const add: ({ a, b }: AddParams) => number;

export { type AddParams, add };
