import { Card, CardFooter } from "@heroui/card";
import { Button, Image, ScrollShadow, Tooltip } from "@heroui/react";
import { OpenInNewRounded as OpenInNewRoundedIcon } from "@mui/icons-material";

export default function IndexPage() {
  return (
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

      <section className="flex flex-col full">
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
      </section>

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

      <section className="flex flex-col full">
        <h3 className="text-xl mb-3 pl-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[...Array(21)].map((_, key) => (
            <Tooltip
              key={key}
              showArrow
              color="foreground"
              content="Amazon Web Service"
              size="sm"
            >
              <i className="devicon-amazonwebservices-plain-wordmark text-6xl" />
            </Tooltip>
          ))}
        </div>
      </section>
      <section className="flex flex-col full">
        <h3 className="text-xl mb-3 pl-6">Certificados</h3>
      </section>
    </main>
  );
}
