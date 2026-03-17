import { Card, CardFooter } from "@heroui/card";
import { Button, Image } from "@heroui/react";
import { useEffect, useState } from "react";

import ProjectsSection from "./sections/projects";
import SkillsSection from "./sections/skills";
import CertificatesSection from "./sections/certificates";

import getUserInfo from "@/services/getUserInfo.service";
import { ApiResponse } from "@/types/api";
import Loading from "@/components/loading";
import SomeLinksSection from "./sections/SomeLinks";

export default function IndexPage() {
  const [userInfo, setUserInfo] = useState<ApiResponse | undefined>(undefined);

  const getData = async () => {
    const data = await getUserInfo();

    setUserInfo(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return userInfo ? (
    <main className="flex flex-col gap-8 px-8">
      <section className="flex justify-around items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl">
            <span>
              Hello. <br />
              {"Sou "}
            </span>
            Wectornanime
          </h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>

        <div className="shrink-0">
          <Image
            alt="Woman listing to music"
            className="object-cover h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]"
            src="https://heroui.com/images/hero-card.jpeg"
          />
        </div>
      </section>

      <SomeLinksSection content={userInfo.links} />

      <ProjectsSection content={userInfo.projects} />

      <section className="flex flex-col full">
        <h3 className="text-xl mb-3 pl-6">Sobre mim</h3>
        <div className="flex flex-col items-center sm:flex-row gap-5">
          <Card className="shrink-0 fit">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src="https://heroui.com/images/hero-card.jpeg"
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            excepturi aliquam debitis at maiores minima numquam molestias quod
            dignissimos dolore tempore obcaecati quos consectetur, eaque rem
            nulla atque, doloremque explicabo! Quas fugit illo placeat
            cupiditate obcaecati veniam dolorem, tempora ullam inventore
            pariatur neque totam cum accusantium maxime vitae, qui deleniti
            quos. Quod itaque doloribus eos voluptatibus, vero earum veniam
            labore? Autem beatae sequi deserunt. Tempora vero ut dolores
            quisquam libero, sunt minus, est rerum sit voluptatem quas sint
            dignissimos obcaecati eos aliquid. Harum aspernatur totam unde,
            corrupti consectetur velit pariatur?
          </p>
        </div>
      </section>

      <SkillsSection content={userInfo.skills} />

      <CertificatesSection content={userInfo.certificates} />
    </main>
  ) : (
    <Loading />
  );
}
