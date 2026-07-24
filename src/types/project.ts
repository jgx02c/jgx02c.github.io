export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    madeWith: string[];
    demo: boolean;
    demoLink: string;
    code: boolean;
    codeLink: string;
    live: boolean;
    liveLink: string;
    projectType?: string;
    companyName?: string;
}
