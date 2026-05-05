import "../App.css";
interface IHeroProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export default function Hero({ name, role, bio, avatar }: IHeroProps) {
  return (
    <div className="hero">
      <div className="hero__container">
        <img className="hero__image" src={avatar}></img>
      </div>
      <h1 className="hero__name">{name}</h1>
      <p className="hero__role">{role}</p>
      <p className="hero__bio">{bio}</p>
    </div>
  );
}
