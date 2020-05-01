export default interface Projects {
    id: number;
    title: string;
    category: string;
    deploy_link: string;
    github_link: string;
    image: string;
    technologies: Array<string>;
}