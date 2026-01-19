import { app, BrowserWindow } from 'electron';
import { createServer } from './server';

const PORT = 3000; // Default port for development
let mainWindow: BrowserWindow | null = null;

const createWindow = async () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: '', // Add preload script if needed
        },
    });

    // logic to determine if we are in dev mode or production
    // For simplicity, we can check if the app is packaged
    if (!app.isPackaged) {
        // Development mode: load Vite dev server
        // Assuming Vite runs on port 3000
        try {
            await mainWindow.loadURL(`http://localhost:${PORT}`);
            mainWindow.webContents.openDevTools();
        } catch (e) {
            console.error('Failed to load dev server, falling back to static server', e);
            startAndLoadServer();
        }
    } else {
        // Production mode: start express server and load it
        startAndLoadServer();
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

const startAndLoadServer = async () => {
    try {
        const server = await createServer();
        // Listen on a random available port
        const listener = server.listen(0, () => {
            const address = listener.address();
            if (address && typeof address !== 'string') {
                const port = address.port;
                console.log(`Internal server running on port ${port}`);
                mainWindow?.loadURL(`http://localhost:${port}`);
            }
        });
    } catch (error) {
        console.error('Error starting internal server:', error);
    }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});