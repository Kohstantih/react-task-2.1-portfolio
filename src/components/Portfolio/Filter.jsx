export function Filter(props) {
    const {name, onClick} = props;
    let classList = 'category';
    if (props.active) classList += ' category-active'
    return (
         <li className={classList} data-id={name} onClick={onClick}>{name}</li>
    )       
}