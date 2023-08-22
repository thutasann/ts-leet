let changingValue: 'hello' = 'hello';

// --------------

interface IExtraPos {
  above: 'leftAbove' | 'rightAbove';
}
function positionText(pos: 'left' | 'right' | 'center' | IExtraPos) {}
positionText({ above: 'leftAbove' });

// --------------

function positionNumber(pos: -1 | 0 | 1): 10 | 20 {
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
handleRequest(req.url, req.method as 'GET');
function handleRequest(url: string, method: 'GET' | 'POST') {}
