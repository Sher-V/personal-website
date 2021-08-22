import React from "react";

interface Props {
  position: string;
  company: string;
  description: string[];
}

const WorkExperienceCard: React.FC<Props> = ({
  position,
  company,
  description,
}) => (
  <div>
    <div className={"text-black font-medium text-secondary"}>{position}</div>
    <div className={"text-black font-medium text-md mt-10"}>{company}</div>
    <div className={"text-secondary font-secondary"}>
      <ul className={"list-disc list-inside"}>
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default WorkExperienceCard;
