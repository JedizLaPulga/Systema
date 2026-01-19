// This file provides an overview of cloud computing, illustrating its components and functionalities.

export class CloudModule {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.renderCloudOverview();
        this.setupInteractions();
    }

    renderCloudOverview() {
        const cloudContainer = document.getElementById('cloud-container');
        if (!cloudContainer) return;
        cloudContainer.innerHTML = `
            <h2>Cloud Computing Overview</h2>
            <p>Cloud computing allows for on-demand access to a shared pool of configurable computing resources.</p>
            <div class="cloud-components">
                <div class="component" id="saas">
                    <h3>Software as a Service (SaaS)</h3>
                    <p>Access software applications over the internet.</p>
                </div>
                <div class="component" id="paas">
                    <h3>Platform as a Service (PaaS)</h3>
                    <p>Provide a platform allowing customers to develop, run, and manage applications.</p>
                </div>
                <div class="component" id="iaas">
                    <h3>Infrastructure as a Service (IaaS)</h3>
                    <p>Virtualized computing resources over the internet.</p>
                </div>
            </div>
        `;
    }

    setupInteractions() {
        const components = document.querySelectorAll('.component');
        components.forEach(component => {
            component.addEventListener('click', () => {
                this.showComponentDetails(component.id);
            });
        });
    }

    showComponentDetails(componentId: string) {
        const detailsContainer = document.getElementById('details-container');
        if (!detailsContainer) return;
        let details = '';

        switch (componentId) {
            case 'saas':
                details = 'SaaS provides software applications over the internet, eliminating the need for installations.';
                break;
            case 'paas':
                details = 'PaaS offers a platform for developers to build applications without worrying about the underlying infrastructure.';
                break;
            case 'iaas':
                details = 'IaaS provides virtualized computing resources, allowing users to rent servers and storage.';
                break;
            default:
                details = 'Select a component to see more details.';
        }

        detailsContainer.innerHTML = `<p>${details}</p>`;
    }
}

export const loadCloud = (): void => {
    new CloudModule();
};