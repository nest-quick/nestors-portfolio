import "../styles/components/SkillCard.css"

interface SkillCardProps{
    title: string;
    description: string;
    image: React.ReactNode;
}

const SkillCard = ({title, description, image}: SkillCardProps) => {
    return(
        <div className="skill-card">
            <div className="skill-content">
                <div>{image}</div>
                <h3>{title}</h3>
                <p className="skill-description">{description}</p>
            </div>
        </div>
    )
};

export default SkillCard;