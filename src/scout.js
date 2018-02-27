const bodyContainer = document.createElement('div');
bodyContainer.id = 'foo';
document.body.appendChild(bodyContainer);

const brain = document.createElement('iframe');
brain.id = 'iframe-app';
document.body.appendChild(brain);
brain.style.display = 'none';

const appScript = document.createElement('script');
appScript.type = 'text/javascript';
appScript.charset = 'utf-8';
appScript.src = '/main.js';
brain.contentWindow.document.open('text/html', 'replace');
brain.contentWindow.document.write('\n    <!doctype html>\n    <head></head>\n    <body>\n    </body>\n    </html>');
brain.contentWindow.document.close();
brain.contentWindow.document.head.appendChild(appScript);
