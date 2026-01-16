// src/web/scripts/modules/transistors.ts
// Layer 1: Transistors - The fundamental building blocks of all digital electronics

interface TransistorState {
    gate: boolean;
    source: boolean;
    drain: boolean;
}

class InteractiveTransistor {
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
                <div class="transistor-channel ${this.isConducting() ? 'conducting' : ''}">
                    <div class="electron-flow"></div>
                </div>
            </div>
            <div class="transistor-state">
                State: <span class="state-text">${this.isConducting() ? 'ON (Conducting)' : 'OFF (Blocking)'}</span>
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

    private isConducting(): boolean {
        return this.type === 'NMOS' ? this.state.gate : !this.state.gate;
    }

    private updateVisualization(): void {
        if (!this.element) return;

        const gateIndicator = this.element.querySelector('.terminal.gate .terminal-indicator');
        const channel = this.element.querySelector('.transistor-channel');
        const stateText = this.element.querySelector('.state-text');

        gateIndicator?.classList.toggle('active', this.state.gate);
        channel?.classList.toggle('conducting', this.isConducting());
        
        if (stateText) {
            stateText.textContent = this.isConducting() ? 'ON (Conducting)' : 'OFF (Blocking)';
        }
    }
}

// Main Transistor Layer Page
export function loadTransistors(): void {
    const container = document.getElementById('visualization-container');
    if (!container) return;

    container.innerHTML = `
        <div class="layer transistor-layer">
            <!-- Hero Section -->
            <section class="layer-hero">
                <div class="hero-content">
                    <span class="layer-number">Layer 1</span>
                    <h1>⚡ Transistors</h1>
                    <p class="hero-subtitle">The microscopic switches that power the digital world</p>
                </div>
            </section>

            <!-- Introduction -->
            <section class="layer-section">
                <h2>What is a Transistor?</h2>
                <div class="content-grid">
                    <div class="text-content">
                        <p>
                            A <strong>transistor</strong> is a tiny electronic switch made from semiconductor material. 
                            It's the most fundamental building block of all modern electronics - from your smartphone 
                            to massive data centers.
                        </p>
                        <p>
                            Think of a transistor like a light switch, but instead of your finger flipping it, 
                            an electrical signal controls whether it's ON or OFF. This simple on/off mechanism 
                            is the foundation of all digital computing.
                        </p>
                        <div class="key-point">
                            <strong>💡 Key Insight:</strong> Every computation your computer performs - 
                            from displaying this text to running complex AI - ultimately comes down to 
                            billions of transistors switching on and off.
                        </div>
                    </div>
                    <div class="visual-content">
                        <div class="info-card">
                            <h4>Quick Facts</h4>
                            <ul>
                                <li>📏 Size: ~5-7 nanometers (modern CPUs)</li>
                                <li>⚡ Speed: Billions of switches per second</li>
                                <li>🔢 Count: ~100+ billion in latest chips</li>
                                <li>📅 Invented: 1947 at Bell Labs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- How It Works -->
            <section class="layer-section alt-bg">
                <h2>How Transistors Work</h2>
                <div class="content-grid">
                    <div class="text-content">
                        <p>A transistor has three terminals:</p>
                        <div class="terminal-explanation">
                            <div class="terminal-item">
                                <span class="terminal-badge gate-badge">G</span>
                                <div>
                                    <strong>Gate</strong> - The control terminal. Applying voltage here 
                                    controls whether the transistor conducts electricity.
                                </div>
                            </div>
                            <div class="terminal-item">
                                <span class="terminal-badge source-badge">S</span>
                                <div>
                                    <strong>Source</strong> - Where electrons come from (the input).
                                </div>
                            </div>
                            <div class="terminal-item">
                                <span class="terminal-badge drain-badge">D</span>
                                <div>
                                    <strong>Drain</strong> - Where electrons flow to (the output).
                                </div>
                            </div>
                        </div>
                        <p>
                            When voltage is applied to the Gate, it creates an electric field that 
                            either allows or blocks the flow of electrons between Source and Drain.
                        </p>
                    </div>
                    <div class="visual-content">
                        <div class="diagram-container">
                            <svg viewBox="0 0 200 150" class="transistor-diagram">
                                <!-- Source -->
                                <rect x="10" y="60" width="40" height="30" fill="#3b82f6" rx="4"/>
                                <text x="30" y="80" text-anchor="middle" fill="white" font-size="12">Source</text>
                                
                                <!-- Channel -->
                                <rect x="60" y="65" width="80" height="20" fill="#94a3b8" rx="2"/>
                                <text x="100" y="79" text-anchor="middle" fill="#1e293b" font-size="10">Channel</text>
                                
                                <!-- Drain -->
                                <rect x="150" y="60" width="40" height="30" fill="#3b82f6" rx="4"/>
                                <text x="170" y="80" text-anchor="middle" fill="white" font-size="12">Drain</text>
                                
                                <!-- Gate -->
                                <rect x="75" y="20" width="50" height="25" fill="#f59e0b" rx="4"/>
                                <text x="100" y="37" text-anchor="middle" fill="white" font-size="12">Gate</text>
                                
                                <!-- Gate connection -->
                                <line x1="100" y1="45" x2="100" y2="65" stroke="#f59e0b" stroke-width="3"/>
                                
                                <!-- Arrows -->
                                <path d="M50 75 L60 75" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow)"/>
                                <path d="M140 75 L150 75" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow)"/>
                                
                                <defs>
                                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                        <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6"/>
                                    </marker>
                                </defs>
                                
                                <!-- Labels -->
                                <text x="100" y="110" text-anchor="middle" fill="#64748b" font-size="10">
                                    Voltage at Gate controls electron flow
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Types of Transistors -->
            <section class="layer-section">
                <h2>Types of Transistors</h2>
                <p class="section-intro">
                    Modern digital circuits primarily use two types of transistors that work together:
                </p>
                
                <div class="transistor-types-grid">
                    <div class="type-card nmos-card">
                        <h3>NMOS (N-type)</h3>
                        <div class="type-behavior">
                            <div class="behavior-row">
                                <span class="signal high">Gate = HIGH (1)</span>
                                <span class="arrow">→</span>
                                <span class="result on">Conducts ✓</span>
                            </div>
                            <div class="behavior-row">
                                <span class="signal low">Gate = LOW (0)</span>
                                <span class="arrow">→</span>
                                <span class="result off">Blocks ✗</span>
                            </div>
                        </div>
                        <p class="type-desc">
                            NMOS transistors conduct when a positive voltage (logic 1) is applied to the gate.
                            They're good at "pulling down" - connecting output to ground (0).
                        </p>
                    </div>
                    
                    <div class="type-card pmos-card">
                        <h3>PMOS (P-type)</h3>
                        <div class="type-behavior">
                            <div class="behavior-row">
                                <span class="signal low">Gate = LOW (0)</span>
                                <span class="arrow">→</span>
                                <span class="result on">Conducts ✓</span>
                            </div>
                            <div class="behavior-row">
                                <span class="signal high">Gate = HIGH (1)</span>
                                <span class="arrow">→</span>
                                <span class="result off">Blocks ✗</span>
                            </div>
                        </div>
                        <p class="type-desc">
                            PMOS transistors conduct when the gate is LOW (logic 0) - opposite of NMOS!
                            They're good at "pulling up" - connecting output to power (1).
                        </p>
                    </div>
                </div>

                <div class="cmos-explanation">
                    <h4>🔗 CMOS: The Best of Both Worlds</h4>
                    <p>
                        Modern chips use <strong>CMOS</strong> (Complementary MOS) technology, which combines 
                        NMOS and PMOS transistors together. This pairing is incredibly efficient because:
                    </p>
                    <ul>
                        <li>One transistor is always OFF while the other is ON</li>
                        <li>Almost no power is wasted when not switching</li>
                        <li>Enables billions of transistors without overheating</li>
                    </ul>
                </div>
            </section>

            <!-- Interactive Demo -->
            <section class="layer-section alt-bg">
                <h2>🎮 Interactive Demo</h2>
                <p class="section-intro">
                    Click on the <strong>Gate (G)</strong> terminal to toggle it between HIGH and LOW. 
                    Watch how NMOS and PMOS transistors respond differently!
                </p>
                
                <div class="demo-container">
                    <div class="transistor-container" id="transistor-demo-area">
                        <!-- Interactive transistors rendered here -->
                    </div>
                    
                    <div class="demo-instructions">
                        <p><strong>Try this:</strong></p>
                        <ol>
                            <li>Click the Gate on the NMOS transistor - it turns ON</li>
                            <li>Click the Gate on the PMOS transistor - it turns OFF</li>
                            <li>Notice they behave opposite to each other!</li>
                        </ol>
                    </div>
                </div>
            </section>

            <!-- History -->
            <section class="layer-section">
                <h2>📜 A Brief History</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-year">1947</div>
                        <div class="timeline-content">
                            <h4>The Invention</h4>
                            <p>
                                John Bardeen, Walter Brattain, and William Shockley at Bell Labs 
                                invented the first transistor. They later won the Nobel Prize in Physics.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">1954</div>
                        <div class="timeline-content">
                            <h4>Silicon Transistors</h4>
                            <p>
                                Texas Instruments produced the first silicon transistor, 
                                which became the industry standard.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">1971</div>
                        <div class="timeline-content">
                            <h4>First Microprocessor</h4>
                            <p>
                                Intel 4004, the first commercial CPU, contained 2,300 transistors.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">2024</div>
                        <div class="timeline-content">
                            <h4>Modern Era</h4>
                            <p>
                                Apple M4 chip contains over 28 billion transistors, 
                                each just a few nanometers wide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Moore's Law -->
            <section class="layer-section alt-bg">
                <h2>📈 Moore's Law</h2>
                <div class="content-grid">
                    <div class="text-content">
                        <p>
                            In 1965, Gordon Moore observed that the number of transistors on a chip 
                            <strong>doubles approximately every two years</strong>. This prediction, 
                            known as Moore's Law, has held remarkably true for decades.
                        </p>
                        <div class="moores-law-chart">
                            <div class="chart-bar" style="--height: 10%">
                                <span class="bar-label">1971</span>
                                <span class="bar-value">2.3K</span>
                            </div>
                            <div class="chart-bar" style="--height: 20%">
                                <span class="bar-label">1985</span>
                                <span class="bar-value">275K</span>
                            </div>
                            <div class="chart-bar" style="--height: 35%">
                                <span class="bar-label">1999</span>
                                <span class="bar-value">9.5M</span>
                            </div>
                            <div class="chart-bar" style="--height: 55%">
                                <span class="bar-label">2010</span>
                                <span class="bar-value">1.17B</span>
                            </div>
                            <div class="chart-bar" style="--height: 75%">
                                <span class="bar-label">2020</span>
                                <span class="bar-value">16B</span>
                            </div>
                            <div class="chart-bar" style="--height: 100%">
                                <span class="bar-label">2024</span>
                                <span class="bar-value">100B+</span>
                            </div>
                        </div>
                    </div>
                    <div class="visual-content">
                        <div class="info-card highlight-card">
                            <h4>The Challenge Ahead</h4>
                            <p>
                                We're approaching physical limits! Transistors are now so small 
                                (just a few atoms wide) that quantum effects become a problem.
                            </p>
                            <p>
                                Engineers are exploring new approaches:
                            </p>
                            <ul>
                                <li>3D stacking of transistors</li>
                                <li>New materials (graphene, carbon nanotubes)</li>
                                <li>Quantum computing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Real World Applications -->
            <section class="layer-section">
                <h2>🌍 Real-World Applications</h2>
                <div class="applications-grid">
                    <div class="app-card">
                        <span class="app-icon">📱</span>
                        <h4>Smartphones</h4>
                        <p>Your phone's processor has ~15 billion transistors performing trillions of operations per second.</p>
                    </div>
                    <div class="app-card">
                        <span class="app-icon">💻</span>
                        <h4>Computers</h4>
                        <p>Desktop CPUs and GPUs combine for 50+ billion transistors handling everything from spreadsheets to gaming.</p>
                    </div>
                    <div class="app-card">
                        <span class="app-icon">🚗</span>
                        <h4>Cars</h4>
                        <p>Modern vehicles have hundreds of microcontrollers managing engine, safety, and entertainment systems.</p>
                    </div>
                    <div class="app-card">
                        <span class="app-icon">🏥</span>
                        <h4>Medical Devices</h4>
                        <p>From pacemakers to MRI machines, transistors enable life-saving medical technology.</p>
                    </div>
                    <div class="app-card">
                        <span class="app-icon">🛰️</span>
                        <h4>Space Exploration</h4>
                        <p>Spacecraft rely on radiation-hardened transistors to survive the harsh conditions of space.</p>
                    </div>
                    <div class="app-card">
                        <span class="app-icon">🤖</span>
                        <h4>AI & Machine Learning</h4>
                        <p>AI chips like GPUs contain billions of transistors optimized for parallel computation.</p>
                    </div>
                </div>
            </section>

            <!-- Summary -->
            <section class="layer-section summary-section">
                <h2>🎯 Key Takeaways</h2>
                <div class="takeaways-list">
                    <div class="takeaway-item">
                        <span class="takeaway-number">1</span>
                        <p>Transistors are tiny switches that can be ON (conducting) or OFF (blocking)</p>
                    </div>
                    <div class="takeaway-item">
                        <span class="takeaway-number">2</span>
                        <p>NMOS conducts when Gate is HIGH; PMOS conducts when Gate is LOW</p>
                    </div>
                    <div class="takeaway-item">
                        <span class="takeaway-number">3</span>
                        <p>CMOS combines both types for efficient, low-power circuits</p>
                    </div>
                    <div class="takeaway-item">
                        <span class="takeaway-number">4</span>
                        <p>Modern chips contain billions of transistors, each just nanometers wide</p>
                    </div>
                </div>
                
                <div class="next-layer-preview">
                    <h3>Coming Up Next: Logic Gates</h3>
                    <p>
                        Now that you understand how individual transistors work, let's see how they 
                        combine to create <strong>logic gates</strong> - the circuits that perform 
                        actual computations like AND, OR, and NOT operations.
                    </p>
                </div>
            </section>

            <!-- Navigation -->
            <div class="layer-navigation">
                <button class="nav-button home" onclick="window.location.reload()">
                    🏠 Home
                </button>
                <button class="nav-button next" data-next="logicGates">
                    Next: Logic Gates →
                </button>
            </div>
        </div>
    `;

    // Render interactive transistors
    const demoArea = document.getElementById('transistor-demo-area');
    if (demoArea) {
        const nmos = new InteractiveTransistor('NMOS', 'nmos-demo');
        nmos.render(demoArea);

        const pmos = new InteractiveTransistor('PMOS', 'pmos-demo');
        pmos.render(demoArea);
    }

    // Add navigation event listener
    const nextButton = document.querySelector('.nav-button.next');
    nextButton?.addEventListener('click', () => {
        const logicGatesBtn = document.querySelector('[data-module="logicGates"]') as HTMLButtonElement;
        logicGatesBtn?.click();
    });
}

export { InteractiveTransistor };
