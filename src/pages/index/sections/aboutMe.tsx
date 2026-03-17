import { Button, Card, CardFooter, Image } from "@heroui/react";

import { Section } from "../components/section";

import { ProfileApiResponseType } from "@/types/api";

interface AboutMeSectionProps {
  content: ProfileApiResponseType;
}

export default function AboutMe({ content }: AboutMeSectionProps) {
  return (
    <Section>
      <h3 className="text-xl mb-3 pl-6">Sobre mim</h3>
      <div className="flex flex-col items-center sm:flex-row gap-5">
        <Card className="shrink-0 fit">
          <Image
            alt={`${content.name} ${content.lastName}`}
            className="object-cover"
            height={200}
            src={content.imageUrl}
            width={200}
          />
          <CardFooter className="absolute justify-center bottom-0 z-10 overflow-hidden">
            <Button
              className="text-small text-white bg-black/40"
              color="default"
              radius="sm"
              size="sm"
              variant="flat"
            >
              Download CV
            </Button>
          </CardFooter>
        </Card>
        <p>{content.aboutMe}</p>
      </div>
    </Section>
  );
}
