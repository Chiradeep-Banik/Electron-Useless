const { app, BrowserWindow } = require('electron');

const newWindowCreate = (url)=>{
    const window = new BrowserWindow({
        width: 1366,
        height: 768,
        center: true,
        webPreferences: {
            preload: __dirname + '/speedTest.js'
        }
    });
    if(url === undefined){
        window.loadFile(`${__dirname}/index.html`);
    }else{
        window.loadURL(url);
    }
};


app.whenReady()
    .then(()=>{
        console.log("-----The ready event has been emitted by the app");
        newWindowCreate('https://www.fast.com');
    })
    .catch(err=>{
        console.log(err);
    });