import { Card, CardFooter } from "@heroui/card";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  Tooltip,
  useDisclosure,
} from "@heroui/react";
import { OpenInNewRounded as OpenInNewRoundedIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";

import ProjectsSection from "./sections/projects";

import getUserInfo from "@/services/getUserInfo.service";
import { ApiResponse } from "@/types/api";
import Loading from "@/components/loading";
import SkillsSection from "./sections/skills";

export default function IndexPage() {
  const [userInfo, setUserInfo] = useState<ApiResponse | undefined>(undefined);

  const getData = async () => {
    const data = await getUserInfo();

    setUserInfo(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return userInfo ? (
    <>
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

        <section className="full flex flex-col relative">
          <h3 className="text-xl pl-6">Alguns Links</h3>
          <div className="flex flex-wrap gap-2 justify-center mt-2 full">
            <Button
              as="a"
              className="bg-default-300 text-default-600 transition-transform hover:-translate-y-2 text-large gap-5 items-center"
              href="https://google.com"
              radius="sm"
              target="_blank"
            >
              <p className="tracking-wide uppercase">Github</p>
              <OpenInNewRoundedIcon fontSize="inherit" />
            </Button>
            <Button
              as="a"
              className="bg-default-300 text-default-600 transition-transform hover:-translate-y-2 text-large gap-5 items-center"
              href="https://google.com"
              radius="sm"
              target="_blank"
            >
              <p className="tracking-wide uppercase">LinkedIn</p>
              <OpenInNewRoundedIcon fontSize="inherit" />
            </Button>
          </div>
        </section>

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

        <section className="flex flex-col full">
          <h3 className="text-xl mb-3 pl-6">Certificados</h3>
          <div className="group flex flex-wrap justify-center gap-4">
            {[...Array(11)].map((_, key) => (
              <Card
                key={key}
                className="border-none cursor-pointer hover:scale-110"
                radius="sm"
              >
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={140}
                  radius="sm"
                  src="https://heroui.com/images/hero-card.jpeg"
                  width={210}
                  onClickCapture={onOpen}
                />
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <ModalBody className="p-6">
              <Card>
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  radius="sm"
                  src="https://heroui.com/images/hero-card.jpeg"
                  width={"100%"}
                />
                <CardFooter className="absolute justify-center bottom-0 z-10 overflow-hidden">
                  <Button
                    as="a"
                    className="text-small text-white bg-black/40"
                    color="default"
                    href="https://google.com"
                    radius="sm"
                    size="sm"
                    target="_blank"
                    variant="flat"
                  >
                    <p className="tracking-wide uppercase">Validar código</p>
                    <OpenInNewRoundedIcon fontSize="inherit" />
                  </Button>
                </CardFooter>
              </Card>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  ) : (
    <Loading />
  );
}
