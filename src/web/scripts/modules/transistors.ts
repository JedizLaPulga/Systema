// src/web/scripts/modules/transistors.ts
// This module visualizes transistors - the fundamental building blocks of all digital electronics

interface TransistorState {
    gate: boolean;
    source: boolean;
    drain: boolean;
}

class Transistor {
    private element: HTMLElement | null = null;
    private state: TransistorState = { gate: false, source: false, drain: false };
    private type: 'NMOS' | 'PMOS';
    private id: string;

    constructor(type: 'NMOS' | 'PMOS', id: string) {
        this.type = type;
        this.id = id;
    }

    public render(container: HTMLElement): HTMLElement {
        this.element = document.createElement('div');
        this.element.className = `transistor transistor-${this.type.toLowerCase()}`;
        this.element.id = this.id;

        this.element.innerHTML = `
            <div class="transistor-body">
                <div class="transistor-label">${this.type}</div>
                <div class="transistor-terminals">
                    <div class="terminal gate" data-terminal="gate">
                        <span class="terminal-label">G</span>
                        <div class="terminal-indicator"></div>
                    </div>
                    <div class="terminal source" data-terminal="source">
                        <span class="terminal-label">S</span>
                        <div class="terminal-indicator"></div>
                    </div>
                    <div class="terminal drain" data-terminal="drain">
                        <span class="terminal-label">D</span>
                        <div class="terminal-indicator"></div>
                    </div>
                </div>
                <div class="transistor-channel ${this.isconducting() ? 'conducting' : ''}">
                    <div class="electron-flow"></div>
                </div>
            </div>
            <div class="transistor-state">
                State: <span class="state-text">${this.isconducting() ? 'ON (Conducting)' : 'OFF (Blocking)'}</span>
            </div>
        `;

        this.attachEventListeners();
        container.appendChild(this.element);
        return this.element;
    }

    private attachEventListeners(): void {
        if (!this.element) return;

        const gate = this.element.querySelector('.terminal.gate');
        gate?.addEventListener('click', () => this.toggleGate());
    }

    public toggleGate(): void {
        this.state.gate = !this.state.gate;
        this.updateVisualization();
    }

    public setGate(value: boolean): void {
        this.state.gate = value;
        this.updateVisualization();
    }

    private isconducting(): boolean {
        // NMOS conducts when gate is HIGH, PMOS conducts when gate is LOW
        return this.type === 'NMOS' ? this.state.gate : !this.state.gate;
    }

    private updateVisualization(): void {
        if (!this.element) return;

        const gateIndicator = this.element.querySelector('.terminal.gate .terminal-indicator');
        const channel = this.element.querySelector('.transistor-channel');
        const stateText = this.element.querySelector('.state-text');

        if (gateIndicator) {
            gateIndicator.classList.toggle('active', this.state.gate);
        }

        if (channel) {
            channel.classList.toggle('conducting', this.isconducting());
        }

        if (stateText) {
            stateText.textContent = this.isconducting() ? 'ON (Conducting)' : 'OFF (Blocking)';
        }
    }

    public getState(): TransistorState {
        return { ...this.state };
    }
}

// Transistor Layer Module
class TransistorLayer {
    private container: HTMLElement | null = null;
    private transistors: Transistor[] = [];

    public render(containerId: string): void {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.container.innerHTML = `
            <div class="layer transistor-layer">
                <div class="layer-header">
                    <h2>Layer 1: Transistors</h2>
                    <p class="layer-description">
                        Transistors are the fundamental building blocks of all digital electronics. 
                        They act as tiny switches that can be either ON (conducting) or OFF (blocking).
                    </p>
                </div>

                <div class="layer-content">
                    <div class="info-panel">
                        <h3>How Transistors Work</h3>
                        <ul>
                            <li><strong>NMOS:</strong> Conducts when Gate is HIGH (1)</li>
                            <li><strong>PMOS:</strong> Conducts when Gate is LOW (0)</li>
                            <li>Click on the <strong>Gate (G)</strong> terminal to toggle its state</li>
                        </ul>
                    </div>

                    <div class="transistor-demo">
                        <h3>Interactive Demo</h3>
                        <p>Click the Gate (G) terminal to see how transistors switch on and off:</p>
                        
                        <div class="transistor-container" id="transistor-demo-area">
                            <!-- Transistors will be rendered here -->
                        </div>
                    </div>

                    <div class="explanation-panel">
                        <h3>Why Transistors Matter</h3>
                        <p>
                            Modern processors contain <strong>billions</strong> of transistors. 
                            By combining NMOS and PMOS transistors, we can create logic gates 
                            that perform computations. This is the foundation of all digital computing.
                        </p>
                        <div class="fun-fact">
                            <strong>Fun Fact:</strong> A modern CPU like Apple's M2 contains 
                            approximately 20 billion transistors!
                        </div>
                    </div>
                </div>

                <div class="layer-navigation">
                    <button class="nav-button next" data-next="logic-gates">
                        Next: Logic Gates →
                    </button>
                </div>
            </div>
        `;

        this.createTransistorDemo();
    }

    private createTransistorDemo(): void {
        const demoArea = document.getElementById('transistor-demo-area');
        if (!demoArea) return;

        // Create NMOS transistor
        const nmos = new Transistor('NMOS', 'nmos-demo');
        this.transistors.push(nmos);
        nmos.render(demoArea);

        // Create PMOS transistor
        const pmos = new Transistor('PMOS', 'pmos-demo');
        this.transistors.push(pmos);
        pmos.render(demoArea);
    }
}

// Export the load function for the app
export function loadTransistors(): void {
    const layer = new TransistorLayer();
    layer.render('visualization-container');
}

export { Transistor, TransistorLayer };
