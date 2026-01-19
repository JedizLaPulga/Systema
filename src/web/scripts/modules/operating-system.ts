// This file contains the implementation for the operating system module, explaining the functions of an operating system through interactive elements.

export class OperatingSystem {
    private osName: string;
    private version: string;
    private features: string[];

    constructor(osName: string, version: string, features: string[]) {
        this.osName = osName;
        this.version = version;
        this.features = features;
    }

    public displayInfo(): void {
        console.log(`Operating System: ${this.osName}`);
        console.log(`Version: ${this.version}`);
        console.log(`Features: ${this.features.join(', ')}`);
    }

    public interactiveFeatureDemo(): void {
        // Placeholder for interactive demo of OS features
        console.log(`Demonstrating features of ${this.osName}...`);
        this.features.forEach(feature => {
            console.log(`Feature: ${feature} - Interactive demo not implemented yet.`);
        });
    }
}

// Example usage wrapped in exported function
export const loadOperatingSystem = (): void => {
    const windowsOS = new OperatingSystem('Windows', '10', ['Multitasking', 'User Interface', 'Security']);
    windowsOS.displayInfo();
    windowsOS.interactiveFeatureDemo();
};