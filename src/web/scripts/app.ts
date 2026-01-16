// src/web/scripts/app.ts

import { initializeVisualization } from '../components/visualization';
import { loadTransistors } from './modules/transistors';
import { loadLogicGates } from './modules/logic-gates';
import { loadCPU } from './modules/cpu';
import { loadMemory } from './modules/memory';
import { loadOperatingSystem } from './modules/operating-system';
import { loadNetworking } from './modules/networking';
import { loadCloud } from './modules/cloud';

type ModuleLoader = () => void;

interface ModuleMap {
    [key: string]: ModuleLoader;
}

document.addEventListener('DOMContentLoaded', () => {
    initializeVisualization();

    const modules: ModuleMap = {
        transistors: loadTransistors,
        logicGates: loadLogicGates,
        cpu: loadCPU,
        memory: loadMemory,
        operatingSystem: loadOperatingSystem,
        networking: loadNetworking,
        cloud: loadCloud,
    };

    const moduleButtons = document.querySelectorAll('.module-button');
    
    moduleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            moduleButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Load the module
            const moduleName = (button as HTMLElement).dataset.module;
            if (moduleName && modules[moduleName]) {
                modules[moduleName]();
            }
        });
    });
});