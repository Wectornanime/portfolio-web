import { Tooltip } from "@heroui/react";

import { Section } from "../components/section";

import { SkillApiResponseType } from "@/types/api";

interface SkillsSectionProps {
  content: SkillApiResponseType[];
}

export default function SkillsSection({ content }: SkillsSectionProps) {
  return (
    <Section>
      <h3 className="text-xl mb-3 pl-6">Skills</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {content.map((skill) => (
          <Tooltip
            key={skill.id}
            showArrow
            color="foreground"
            content={skill.title}
            radius="sm"
            size="sm"
          >
            <i className={`${skill.iconUrl} text-2xl sm:text-6xl`} />
          </Tooltip>
        ))}
      </div>
    </Section>
  );
}
