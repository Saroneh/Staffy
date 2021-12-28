export interface Artifact {
    id: number;
    name: string;
    description: string;
    level?: number;
    pictureUrl: string;
    type: string;
    status: string;
    deadline?: Date;
}