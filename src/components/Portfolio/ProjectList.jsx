import { Project } from "./Project";

export function ProjectList(props) {
    const { projects } = props;
    
    const result = [];

    projects.forEach((p) => {
        result.push(<Project src={p.img}/>)
    });
    return (
        <ul className="project-list">{result}</ul>
    )
}