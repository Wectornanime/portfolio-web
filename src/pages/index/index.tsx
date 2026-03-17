import { Image } from "@heroui/react";
import { useEffect, useState } from "react";

import ProjectsSection from "./sections/projects";
import SkillsSection from "./sections/skills";
import CertificatesSection from "./sections/certificates";
import SomeLinksSection from "./sections/someLinks";
import AboutMe from "./sections/aboutMe";

import getUserInfo from "@/services/getUserInfo.service";
import { ApiResponse } from "@/types/api";
import Loading from "@/components/loading";

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
            {userInfo.name}
          </h1>
          <h2>{userInfo.subtitle}</h2>
        </div>

        <div className="shrink-0">
          <Image
            alt={`${userInfo.name} ${userInfo.lastName}`}
            className="object-cover h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]"
            src={userInfo.imageUrl}
          />
        </div>
      </section>

      <SomeLinksSection content={userInfo.links} />

      <ProjectsSection content={userInfo.projects} />

      <AboutMe content={userInfo} />

      <SkillsSection content={userInfo.skills} />

      <CertificatesSection content={userInfo.certificates} />
    </main>
  ) : (
    <Loading />
  );
}
