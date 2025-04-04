function MyProjects(props) {
    return (
        <div id="my-projects" className="hidden card">
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.alt} />
            <p>{props.description}</p>
        </div>
    )
}

export default MyProjects