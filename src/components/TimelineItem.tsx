import { Experience } from "@/lib/schemas";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Badge } from "./ui/Badge";
import Icon from "./Icon";
import Image from "next/image";

interface Props {
  experience: Experience;
}

export default function TimelineItem({ experience }: Props) {
  const {
    name,
    href,
    title,
    logo,
    start,
    end,
    description,
    links,
    skill_lists,
  } = experience;

  return (
    <li className="relative ml-10 py-4">
      {href ? (
        <Link
          href={href}
          target="_blank"
          className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white"
        >
          <Avatar className="size-12 border">
            <AvatarImage
              src={logo}
              alt={name}
              className="bg-background object-contain"
            />
            <AvatarFallback>{name?.[0] ?? "?"}</AvatarFallback>
          </Avatar>
        </Link>
      ) : (
        <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
          <Avatar className="size-12 border">
            <AvatarImage
              src={logo}
              alt={name}
              className="bg-background object-contain"
            />
            <AvatarFallback>{name?.[0] ?? "?"}</AvatarFallback>
          </Avatar>
        </div>
      )}

      <div className="flex flex-1 flex-col justify-start gap-1">
        {start && (
          <time className="text-xs text-muted-foreground">
            <span>{start}</span>
            <span>{!end ? end : " - "}</span>
            {!end ? " " : <span>{end ? end : "Present"}</span>}
          </time>
        )}
        <h2 className="font-semibold leading-none">{name}</h2>
        {title && <p className="text-sm text-muted-foreground">{title}</p>}
        {description && (
          <ul className="ml-4 list-outside list-disc">
            {description.map((desc, i) => (
              <li key={i} className="prose pr-8 text-sm dark:prose-invert">
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx} target="_blank">
              <Badge key={idx} title={link.name} className="flex gap-2">
                <Icon name={link.icon} aria-hidden="true" className="size-3" />
                {link.name}
              </Badge>
            </Link>
          ))}
        </div>
      )}
      {skill_lists && skill_lists.length > 0 && (
        <ul className="ml-4 mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
          {skill_lists.map((skill, i) => (
            <li key={i} className="flex items-center gap-2">
              <Image
                src={skill.icon}
                width={"12"}
                height={"12"}
                alt={skill.name}
                className="h-5 w-5"
              />
              <span className="text-sm">{skill.name}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
