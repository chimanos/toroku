interface Service {
    services: Array<ServiceData>;
}

interface ServiceData {
    title: string;
    elements: Array<ServiceElement>;
}

interface ServiceElement {
    section: string;
    type: string;
    value: Array<string>;
    mandatory: boolean;
}
