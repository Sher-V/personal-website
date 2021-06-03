import React from "react";

interface Props {
  position: string;
  company: string;
  description: string;
}

const WorkExperienceCard: React.FC<Props> = ({
  position,
  company,
  description,
}) => (
  <div>
    <div className={"text-black font-medium text-secondary"}>{position}</div>
    <div className={"text-black font-medium text-md mt-10"}>{company}</div>
    <div className={"text-secondary font-secondary"}>{description}</div>
  </div>
);

export default WorkExperienceCard;
