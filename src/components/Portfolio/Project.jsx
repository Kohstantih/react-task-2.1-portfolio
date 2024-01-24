export function Project(props) {
    const { src } = props;
    return (
        <li className="project-item"><img className="project-img" src={src} alt="Изображение проекта"/></li>
    )
}