import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 gap-2">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/Wectornanime"
          title="Wectornanime's github"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">Wectornanime</p>
        </Link>
        <Divider orientation="vertical" />
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://heroui.com"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Using</span>
          <p className="text-primary">HeroUI</p>
        </Link>
      </footer>
    </div>
  );
}
