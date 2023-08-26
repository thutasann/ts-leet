"use strict";
let changingValue = 'hello';
function positionText(pos) { }
positionText({ above: 'leftAbove' });
// --------------
function positionNumber(pos) {
    return 20;
}
positionNumber(1);
// --------------
let obj = { name: 'John' };
if (2 + 3 === 5) {
    obj.name = 'Gus';
}
// --------------
const req = { url: 'https://example.com', method: 'GET' };
handleRequest(req.url, req.method);
function handleRequest(url, method) { }
