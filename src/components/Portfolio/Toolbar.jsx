import { Filter } from "./Filter";

export function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props;
    const result = [];

    for (let i = 0; i < filters.length; i+=1) {
        if(filters[i] === selected) {
            result.push(<Filter active={true} name={filters[i]} onClick={onSelectFilter}/>)
        } else {
            result.push(<Filter active={false} name={filters[i]} onClick={onSelectFilter}/>)
        }
    }
    return(
        <ul className="categories-list">{result}</ul>
    )
}