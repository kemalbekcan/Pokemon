import React, { Fragment } from "react";
import SkillBar from "react-skillbars";

interface IProps {
  statPoke: { stat: { name: string }; base_stat: number };
}

const Skill: React.FunctionComponent<IProps> = ({ statPoke }) => {
  const skills = [{ type: `${statPoke.stat.name}`, level: statPoke.base_stat }];
  const colors = {
    bar: "#d9a404",
    title: {
      text: "#fff",
      background: "#ef5350"
    },
  };
  return (
    <Fragment>
      <SkillBar skills={skills} colors={colors} animationDuration={3000}  />
    </Fragment>
  );
};

export default Skill;
