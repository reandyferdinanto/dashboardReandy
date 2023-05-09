import React from "react";
import "./skill.css";
import CardSkill from "../../img/cardSkill.jpg";


const skills = [
  {
    id: 1,
    title: "Cost Engineer",
    subTitle: "cost Estimator",
    descSkill: "Cost Estimate Cost Control",
    level: "90%",
  },
  {
    id: 2,
    title: "Warehouse Management",
    subTitle: "Warehouse & Inventory",
    descSkill: "Warehouse management Inventory management",
    level: "95%",
  },
  {
    id: 3,
    title: "FrontEnd",
    subTitle: "Web Development",
    descSkill: "React.js HTML CSS ",
    level: "85%",
  },
  {
    id: 4,
    title: "BackEnd",
    subTitle: "Web Development",
    descSkill: "Node Express Fiber-GoLang SQL MongoDB",
    level: "80%",
  },
];

const Skill = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="wrapper">
        <div className="cols">
          {skills.map((skill) => (
            <div
              className="col"
              onTouchStart={() => this.classList.toggle("hover")}
              key={skill.id}
            >
              <div className="container">
                <div
                  className="front"
                  style={{
                    backgroundImage: `url(${CardSkill})`,
                  }}
                >
                  <div className="inner">
                    <p>{skill.title}</p>
                    <span>
                      {skill.subTitle}
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>{skill.descSkill}</p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
