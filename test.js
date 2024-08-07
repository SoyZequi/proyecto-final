// test.js
const fs = require('fs');

test('Verifica el contenido del h1', () => {
    const html = fs.readFileSync('index.html', 'utf8');
    const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
    const h1Text = h1Match ? h1Match[1] : null;
    expect(h1Text).toBe('Hola Mundo');
});
