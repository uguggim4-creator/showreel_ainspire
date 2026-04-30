import { works } from "@/data/works";
import { notFound } from "next/navigation";
import WorkDetailClient from "./WorkDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return works.map((w) => ({ id: w.id }));
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);
  if (!work) notFound();

  const currentIndex = works.findIndex((w) => w.id === id);
  const nextWork = works[(currentIndex + 1) % works.length];

  return <WorkDetailClient work={work} nextWork={nextWork} />;
}
