import express, { Application } from 'express';
import path from 'path';

export const createServer = (): Application => {
    const app = express();

    // Serve static files from the web directory
    app.use(express.static(path.join(__dirname, '../web')));

    // Handle root requests
    app.get('/', (_req, res) => {
        res.sendFile(path.join(__dirname, '../web/index.html'));
    });

    return app;
};