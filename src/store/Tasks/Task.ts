export interface Task {
    readonly id: string;
    title: string;
    description?: string;
    stage: string;
}