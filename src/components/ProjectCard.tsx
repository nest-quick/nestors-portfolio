import '../styles/components/ProjectCard.css'

interface ProjectCardProps{
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProjectCard = ({title, description, image, link}: ProjectCardProps) => {
    return(
        <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="d-flex">
                    <a href={link} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
                    View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;