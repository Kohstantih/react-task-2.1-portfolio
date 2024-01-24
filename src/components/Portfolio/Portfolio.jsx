import React from "react";
import { Toolbar } from "./Toolbar";
import { ProjectList } from "./ProjectList";

export class Portfolio extends React.Component{
    constructor(props) {
        super(props);
        this.filters = props.filters;
        this.projects = props.projects;

        this.state = {selected: 'All'};

        this.onSelectFilter = this.onSelectFilter.bind(this);
    }

    onSelectFilter(event) {
        this.setState({selected: event.target.dataset.id});
    }
    
    filterProject() {
        if(this.state.selected === 'All') return this.projects;

        return this.projects.filter((p) =>  p.category === this.state.selected);
    }

    render() {
        return (
            <>
                <Toolbar 
                    filters={this.filters}
                    selected={this.state.selected}
                    onSelectFilter={this.onSelectFilter}
                />
                <ProjectList projects={this.filterProject()}/>
            </>
        )
    }
        
}