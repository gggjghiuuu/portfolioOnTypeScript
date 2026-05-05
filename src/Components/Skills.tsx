interface ISkillsProps {
  skills: string[];
}
import "../App.css";
export default function Skills({ skills }: ISkillsProps) {
  if (skills.length === 0) {
    return (
      <div>
        <h2 className="skills-title">Мои навыки</h2>
        <div className="skills">
          <p className="skills-empty">⚔️ Навыки не пробудились...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="skills-title">Мои навыки</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
