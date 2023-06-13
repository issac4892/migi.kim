import {ProjectStatus} from "../enum/ProjectEnum";

export class Project {
    title!: string;
    description!: string;
    link?: string;
    status!: ProjectStatus;
    date!: string;
}

const projects: Project[] = [
    {
        title: 'Algorix',
        description: 'Algorix Corporation, Fullstack Developer',
        status: ProjectStatus.IN_PROGRESS,
        date: '2022.12 ~',
        link: 'https://algorix.io'
    },
    {
        title: 'WeDoClass',
        description: 'Algorix Corporation, Fullstack Developer',
        date: '2022.11 ~',
        status: ProjectStatus.IN_PROGRESS,
    },
    {
        title: 'Komworld Ticket Bot',
        description: 'Komworld, Bot Developer',
        date: '2022.07',
        status: ProjectStatus.DONE
    },
    {
        title: 'Ask',
        description: 'Mingeon Kim & Yejoon Kim, Backend Developer',
        date: '2021.12 ~ 2022.02',
        status: ProjectStatus.DONE
    }
];

export default projects
