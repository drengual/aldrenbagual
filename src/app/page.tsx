import Certificates from "@/components/Certificates";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRightIcon,
  FileDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const TED_BIRTH_YEAR = 2000;
const LIMIT = 4; // max show 2

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src="/dren.jpg"
          alt="Photo of Ted"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl">hi dren here. 👋</h1>
          <p className="mt-2 font-medium">
            {/* Update my age */}
            {new Date().getFullYear() - TED_BIRTH_YEAR}
            yo full stack developer from the Philippines
          </p>
          <p className="mt-8 max-w-sm">
            Engineer in progress, builder by instinct — I bring structure to
            ideas.
          </p>

          {/* <div className="mt-8 flex items-end gap-1">
            <p className="font-semibold">
              For any Q&A, raise a ticket with Ted Support
            </p>
            <ArrowDownRight className="hidden size-5 animate-bounce sm:block" />
            <ArrowDown className="block size-5 animate-bounce sm:hidden" />
          </div>
          <p className="mt-1 text-xs font-light">
            For escalations, please find my
            <Link
              href="https://www.instagram.com/gomugomu.cat"
              target="_blank"
              className="link font-semibold"
              title="meow"
            >
              {" "}
              Ted Lead{" "}
            </Link>
            instead.
          </p> */}
          <section className="mt-8 flex items-center gap-8">
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5 to-black" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <Certificates />

      {/* <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">recent posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section> */}

      <article className="mt-8 flex flex-col gap-8 pb-16">
        <h1 className="title">contact me.</h1>

        <ContactForm />
      </article>
    </article>
  );
}
