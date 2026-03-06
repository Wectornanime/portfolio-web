import { Button, Image, ScrollShadow } from "@heroui/react";

import { Section } from "../components/section";

export default function ProjectsSection() {
  return (
    <Section>
      <h3 className="text-xl mb-3 pl-6">Projetos</h3>
      <ScrollShadow
        hideScrollBar
        className="flex gap-2 w-full"
        orientation="horizontal"
      >
        {[...Array(20)].map((_, index) => (
          <div key={index} className="fit rounded-md bg-default">
            <div>
              <Image
                alt="Woman listing to music"
                className="object-cover rounded-t-sm"
                height={120}
                radius="none"
                src="https://heroui.com/images/hero-card.jpeg"
                width={260}
              />
            </div>
            <div className="px-2">
              <h4 className="font-bold text-large">Projeto 1</h4>
              <p className="text-tiny text-wrap h-[100px] w-[220px] line-clamp-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia illum eligendi aut! Explicabo illum fuga excepturi ab
                possimus, quas accusantium quam, nam perspiciatis itaque culpa
                voluptatibus, tempora dolorem facilis accusamus.
              </p>
            </div>
            <div className="flex justify-around py-2">
              <Button
                className="text-tiny tracking-wide uppercase text-white bg-black/40"
                color="default"
                radius="sm"
                size="sm"
                variant="flat"
              >
                Github
              </Button>
              <Button
                className="text-tiny tracking-wide uppercase text-white bg-black/40"
                color="default"
                radius="sm"
                size="sm"
                variant="flat"
              >
                site
              </Button>
            </div>
          </div>
        ))}
      </ScrollShadow>
    </Section>
  );
}
