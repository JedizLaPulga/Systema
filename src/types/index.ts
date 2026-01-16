// This file exports types and interfaces used throughout the application, ensuring type safety.

export interface Transistor {
    id: string;
    type: 'NPN' | 'PNP';
    base: number;
    collector: number;
    emitter: number;
}

export interface LogicGate {
    id: string;
    type: 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR';
    inputs: boolean[];
    output: boolean;
}

export interface CPU {
    id: string;
    cores: number;
    clockSpeed: number; // in GHz
    architecture: string;
}

export interface Memory {
    id: string;
    type: 'RAM' | 'ROM' | 'Cache';
    size: number; // in MB
}

export interface OperatingSystem {
    id: string;
    name: string;
    version: string;
    kernelType: 'Monolithic' | 'Microkernel';
}

export interface Network {
    id: string;
    type: 'LAN' | 'WAN' | 'MAN';
    bandwidth: number; // in Mbps
}

export interface CloudService {
    id: string;
    provider: string;
    serviceType: 'IaaS' | 'PaaS' | 'SaaS';
    region: string;
}