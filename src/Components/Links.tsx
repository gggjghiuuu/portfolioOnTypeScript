import type { ILinks } from "../data";
import "../App.css";

interface ILinksProps {
  links: ILinks;
}

export default function Links({ links }: ILinksProps) {
  return (
    <div className="links-section">
      <h2 className="links-title">Свяжитесь со мной</h2>
      <div className="links-container">
        {links.github && (
          <a
            href={links.github}
            className="links-item"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub">
            <span className="links-icon">⚔️</span>
            <span className="links-text">GitHub</span>
          </a>
        )}

        {links.telegram && (
          <a
            href={`https://t.me/${links.telegram.replace("@", "")}`}
            className="links-item"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram">
            <span className="links-icon">📜</span>
            <span className="links-text">Telegram</span>
          </a>
        )}

        {links.email && (
          <a
            href={`mailto:${links.email}`}
            className="links-item"
            title="Email">
            <span className="links-icon">🕯️</span>
            <span className="links-text">Почта</span>
          </a>
        )}

        {links.phone && (
          <a
            href={`tel:${links.phone.replace(/\s+/g, "")}`}
            className="links-item"
            title="Телефон">
            <span className="links-icon">🔮</span>
            <span className="links-text">Телефон</span>
          </a>
        )}
      </div>
    </div>
  );
}
