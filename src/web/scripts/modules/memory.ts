// This file visualizes different types of memory and their roles in computing.

interface MemoryType {
    name: string;
    description: string;
    capacity: string;
    speed: string;
}

const memoryTypes: MemoryType[] = [
    {
        name: "RAM",
        description: "Random Access Memory, used for temporary data storage while a computer is running.",
        capacity: "4GB - 64GB",
        speed: "Fast"
    },
    {
        name: "ROM",
        description: "Read-Only Memory, used to store firmware and system software.",
        capacity: "1MB - 16GB",
        speed: "Moderate"
    },
    {
        name: "Cache",
        description: "A smaller, faster type of volatile memory that provides high-speed data access to the CPU.",
        capacity: "512KB - 32MB",
        speed: "Very Fast"
    },
    {
        name: "SSD",
        description: "Solid State Drive, a type of non-volatile storage that uses flash memory.",
        capacity: "120GB - 8TB",
        speed: "Fast"
    },
    {
        name: "HDD",
        description: "Hard Disk Drive, a traditional storage device that uses spinning disks to read/write data.",
        capacity: "500GB - 10TB",
        speed: "Slow"
    }
];

function visualizeMemory() {
    const container = document.getElementById('memory-visualization');
    if (!container) return;

    memoryTypes.forEach(memory => {
        const memoryElement = document.createElement('div');
        memoryElement.className = 'memory-type';
        memoryElement.innerHTML = `
            <h3>${memory.name}</h3>
            <p>${memory.description}</p>
            <p>Capacity: ${memory.capacity}</p>
            <p>Speed: ${memory.speed}</p>
        `;
        container.appendChild(memoryElement);
    });
}

document.addEventListener('DOMContentLoaded', visualizeMemory);