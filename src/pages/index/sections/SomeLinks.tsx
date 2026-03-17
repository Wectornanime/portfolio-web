import { Button } from "@heroui/react";
import { OpenInNewRounded as OpenInNewRoundedIcon } from "@mui/icons-material";

import { Section } from "../components/section";

import { ProfileLinkApiResponseType } from "@/types/api";

interface SomeLinksSectionProps {
  content: ProfileLinkApiResponseType[];
}

export default function SomeLinksSection({ content }: SomeLinksSectionProps) {
  return (
    <Section className="relative">
      <h3 className="text-xl pl-6">Alguns Links</h3>
      <div className="flex flex-wrap gap-2 justify-center mt-2 full">
        {content.map((link) => (
          <Button
            key={link.id}
            as="a"
            className="bg-default-300 text-default-600 transition-transform hover:-translate-y-2 text-large gap-5 items-center"
            href={link.link}
            radius="sm"
            target="_blank"
          >
            <p className="tracking-wide uppercase">{link.title}</p>
            <OpenInNewRoundedIcon fontSize="inherit" />
          </Button>
        ))}
      </div>
    </Section>
  );
}
