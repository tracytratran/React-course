import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const tracy = {
  photoName: "/TracyTran.jpeg",
  name: "Tracy Tran",
  intro:
    "I'm Tracy, a budding Software Developer with a passion for problem-solving. I'm eager to learn, both solution-oriented and detail-oriented, and dedicated to my craft. While my knowledge in front-end development is limited, I'm committed to expanding my skills and creating user-friendly applications.",
  // skillList: [
  //   { name: "JavaScript", color: "#fff933", emoji: "💪" },
  //   { name: "HTML + CSS", color: "#ff7733", emoji: "💪" },
  //   { name: "Ionic + Angular", color: "#ff4233", emoji: "👶" },
  //   { name: "React", color: "#33d7ff", emoji: "💪" },
  // ],
};

const skills = [
  {
    skill: "HTML+CSS",
    level: "beginner",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "beginner",
    color: "#EFD81D",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList name="JavaScript" />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src={tracy.photoName} alt={tracy.name} />;
}

function Intro() {
  return (
    <div>
      <h1>{tracy.name}</h1>
      <p>{tracy.intro}</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      {/* {tracy.skillList.map((skill) => (
        <Skill skillObject={skill} key={skill.name} />
      ))} */}
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {/* <span>{`${
        level === "beginner"
          ? "👶"
          : level === "intermediate"
          ? "👍"
          : level === "advanced"
          ? "💪"
          : ""
      }`}</span> */}
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
