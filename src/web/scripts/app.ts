// src/web/scripts/app.ts

import { initializeVisualization } from '../components/visualization';
import { loadTransistors } from './modules/transistors';
import { loadLogicGates } from './modules/logic-gates';
import { loadCPU } from './modules/cpu';
import { loadMemory } from './modules/memory';
import { loadOperatingSystem } from './modules/operating-system';
import { loadNetworking } from './modules/networking';
import { loadCloud } from './modules/cloud';

document.addEventListener('DOMContentLoaded', () => {
    initializeVisualization();

    const modules = {
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
            const moduleName = button.dataset.module;
            if (modules[moduleName]) {
                modules[moduleName]();
            }
        });
    });
});