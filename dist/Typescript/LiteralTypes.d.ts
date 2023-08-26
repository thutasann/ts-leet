declare let changingValue: 'hello';
interface IExtraPos {
    above: 'leftAbove' | 'rightAbove';
}
declare function positionText(pos: 'left' | 'right' | 'center' | IExtraPos): void;
declare function positionNumber(pos: -1 | 0 | 1): 10 | 20;
declare let obj: {
    name: string;
};
declare const req: {
    url: string;
    method: string;
};
declare function handleRequest(url: string, method: 'GET' | 'POST'): void;
