import { Button, Image, ScrollShadow } from "@heroui/react";

import { Section } from "../components/section";

import { ProjectApiResponseType } from "@/types/api";

interface ProjectsSectionProps {
  content: ProjectApiResponseType[];
}

export default function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <Section>
      <h3 className="text-xl mb-3 pl-6">Projetos</h3>
      <ScrollShadow
        hideScrollBar
        className="flex gap-2 w-full"
        orientation="horizontal"
      >
        {content.map((project) => (
          <div key={project.id} className="fit rounded-md bg-default">
            <div>
              <Image
                alt={project.title}
                className="object-cover rounded-t-sm"
                height={120}
                radius="none"
                src={project.imageUrl}
                width={260}
              />
            </div>
            <div className="px-2">
              <h4 className="font-bold text-large line-clamp-1">
                {project.title}
              </h4>
              <p className="text-tiny text-wrap h-[100px] w-[220px] line-clamp-6">
                {project.text}
              </p>
            </div>
            <div className="flex justify-around py-2">
              {project.links.map((link) => (
                <Button
                  key={link.id}
                  as={"a"}
                  className="text-tiny tracking-wide uppercase text-white bg-black/40"
                  color="default"
                  href={link.link}
                  radius="sm"
                  size="sm"
                  target="_blank"
                  variant="flat"
                >
                  {link.title}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </ScrollShadow>
    </Section>
  );
}
