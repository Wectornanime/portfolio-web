import { Card, CardFooter } from "@heroui/card";
import { Button, Image } from "@heroui/react";

export default function IndexPage() {
  return (
    <main className="flex flex-col items-center gap-2">
      <section className="flex flex-col items-center sm:flex-row gap-5 px-8">
        <Card className="shrink-0 fit">
          <Image
            alt="Woman listing to music"
            className="object-cover"
            height={200}
            src="https://heroui.com/images/hero-card.jpeg"
            width={200}
          />

          <CardFooter className="absolute justify-center bottom-0 z-10 overflow-hidden ">
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
          dignissimos dolore tempore obcaecati quos consectetur, eaque rem nulla
          atque, doloremque explicabo! Quas fugit illo placeat cupiditate
          obcaecati veniam dolorem, tempora ullam inventore pariatur neque totam
          cum accusantium maxime vitae, qui deleniti quos. Quod itaque doloribus
          eos voluptatibus, vero earum veniam labore? Autem beatae sequi
          deserunt. Tempora vero ut dolores quisquam libero, sunt minus, est
          rerum sit voluptatem quas sint dignissimos obcaecati eos aliquid.
          Harum aspernatur totam unde, corrupti consectetur velit pariatur?
        </p>
      </section>
    </main>
  );
}
