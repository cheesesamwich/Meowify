 
const { app, BrowserWindow, components, session, Menu } = require('electron');
const fs = require('fs');

function loadExtensions() {
    return new Promise((resolve, reject) => {
        const extensionsPath = `${process.cwd()}/extensions`;
        fs.readdir(extensionsPath, async (err, items) => {
            if (err) {
                reject(err);
                return;
            }
            for (const item of items) {
                const extensionPath = `${extensionsPath}/${item}`;
                await session.defaultSession.loadExtension(extensionPath);
                console.log(`Successfully loaded extension: ${item}`);
            }
            resolve();
        });
    });
}

async function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true
        }
    });

    const template = [
        {
          label: 'Meowify',
          submenu: [
            {
              label: 'Reboot',
              click() {
                console.log("i havent figured out how to do this yet, sorry");
              }
            },
          ]
        }
      ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    const BrowserUserAgents =
    {
        darwin: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        linux: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        windows:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    };

    await loadExtensions();

    const BrowserUserAgent = BrowserUserAgents[process.platform] || BrowserUserAgents.windows;

    win.webContents.setUserAgent(BrowserUserAgent);

    win.loadURL('https://open.spotify.com/');
}
    app.whenReady().then(async () => 
        {
            await components.whenReady();
            console.log('components ready:', components.status());
            createWindow();

        });

    app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
    });

    app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
    });