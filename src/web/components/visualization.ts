// src/web/components/visualization.ts
// Main visualization controller for all layers

export function initializeVisualization(): void {
    const container = document.getElementById('visualization-container');
    if (!container) return;

    // Show welcome screen initially
    container.innerHTML = `
        <div class="welcome-screen">
            <div class="welcome-content">
                <h2>🖥️ Welcome to Systema</h2>
                <p>
                    Discover how computers work from the ground up! 
                    Start your journey through the layers of computing.
                </p>
                <div class="layer-cards">
                    <div class="layer-card" data-layer="1">
                        <span class="layer-icon">⚡</span>
                        <h3>Transistors</h3>
                        <p>The tiny switches that power everything</p>
                    </div>
                    <div class="layer-card" data-layer="2">
                        <span class="layer-icon">🔲</span>
                        <h3>Logic Gates</h3>
                        <p>AND, OR, NOT - the building blocks</p>
                    </div>
                    <div class="layer-card" data-layer="3">
                        <span class="layer-icon">🧠</span>
                        <h3>CPU</h3>
                        <p>The brain that executes instructions</p>
                    </div>
                    <div class="layer-card" data-layer="4">
                        <span class="layer-icon">💾</span>
                        <h3>Memory</h3>
                        <p>Where data lives and breathes</p>
                    </div>
                    <div class="layer-card" data-layer="5">
                        <span class="layer-icon">🖥️</span>
                        <h3>Operating System</h3>
                        <p>The software that manages it all</p>
                    </div>
                    <div class="layer-card" data-layer="6">
                        <span class="layer-icon">🌐</span>
                        <h3>Networking</h3>
                        <p>Connecting computers together</p>
                    </div>
                    <div class="layer-card" data-layer="7">
                        <span class="layer-icon">☁️</span>
                        <h3>Cloud</h3>
                        <p>Computing at massive scale</p>
                    </div>
                </div>
                <p class="start-hint">👆 Click on a layer above or use the navigation buttons to begin!</p>
            </div>
        </div>
    `;

    // Add click handlers for layer cards
    const layerCards = container.querySelectorAll('.layer-card');
    const moduleMap: { [key: string]: string } = {
        '1': 'transistors',
        '2': 'logicGates',
        '3': 'cpu',
        '4': 'memory',
        '5': 'operatingSystem',
        '6': 'networking',
        '7': 'cloud'
    };

    layerCards.forEach(card => {
        card.addEventListener('click', () => {
            const layer = (card as HTMLElement).dataset.layer;
            if (layer && moduleMap[layer]) {
                const button = document.querySelector(`[data-module="${moduleMap[layer]}"]`) as HTMLButtonElement;
                button?.click();
            }
        });
    });
}

export function clearVisualization(): void {
    const container = document.getElementById('visualization-container');
    if (container) {
        container.innerHTML = '';
    }
}