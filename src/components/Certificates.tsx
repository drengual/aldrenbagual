import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import Timeline from "./Timeline";
import certificateData from "@/data/certificates.json";

import { certificatesSchema } from "@/lib/schemas";

interface Props {
  limit?: number;
}

export default function Experience({ limit }: Props) {
  let certificates = certificatesSchema.parse(certificateData).certificates;
  if (limit) {
    certificates = certificates.slice(0, limit);
  }

  return (
    <section className="flex flex-col gap-8">
      <header className="flex justify-between">
        <h2 className="title text-3xl">Certifications</h2>
      </header>
      <Timeline experience={certificates} />
    </section>
  );
}
