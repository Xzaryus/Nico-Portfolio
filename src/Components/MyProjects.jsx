function MyProjects(props) {
    return (
        <div id="my-projects" className="hidden card">
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.alt} />
            <p>{props.description}</p>
            <a id="project-link" href={props.link} target="_blank"><button id="project-button">Visit Here</button></a>
        </div>
    )
}

export default MyProjects