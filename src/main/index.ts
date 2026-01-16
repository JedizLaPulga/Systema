// src/main/index.ts

import { createServer } from './server';

const PORT = process.env.PORT || 3000;

const startApp = async () => {
    try {
        const server = await createServer();
        server.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting the application:', error);
    }
};

startApp();