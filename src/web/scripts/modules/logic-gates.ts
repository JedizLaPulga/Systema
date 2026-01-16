// This file contains the logic for visualizing logic gates, allowing users to interact with and understand their functions.

interface LogicGate {
    type: string;
    inputs: boolean[];
    output: boolean;
    calculateOutput(): void;
}

class ANDGate implements LogicGate {
    type = 'AND';
    inputs: boolean[] = [false, false];
    output = false;

    calculateOutput(): void {
        this.output = this.inputs[0] && this.inputs[1];
    }
}

class ORGate implements LogicGate {
    type = 'OR';
    inputs: boolean[] = [false, false];
    output = false;

    calculateOutput(): void {
        this.output = this.inputs[0] || this.inputs[1];
    }
}

class NOTGate implements LogicGate {
    type = 'NOT';
    inputs: boolean[] = [false];
    output = false;

    calculateOutput(): void {
        this.output = !this.inputs[0];
    }
}

class LogicGateVisualizer {
    gates: LogicGate[] = [];

    addGate(gate: LogicGate): void {
        this.gates.push(gate);
    }

    visualize(): void {
        this.gates.forEach(gate => {
            gate.calculateOutput();
            console.log(`Gate Type: ${gate.type}, Inputs: ${gate.inputs.join(', ')}, Output: ${gate.output}`);
        });
    }
}

// Example usage
const visualizer = new LogicGateVisualizer();
const andGate = new ANDGate();
andGate.inputs = [true, false];
visualizer.addGate(andGate);

const orGate = new ORGate();
orGate.inputs = [true, true];
visualizer.addGate(orGate);

const notGate = new NOTGate();
notGate.inputs = [false];
visualizer.addGate(notGate);

visualizer.visualize();