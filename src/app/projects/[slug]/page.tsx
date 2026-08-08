import { ProjectPageView } from "@/components/ProjectPageView";
import { PROJECTS } from "@/lib/projects";
import { getProjectPageBySlug } from "@/lib/projectPages";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getProjectPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <ProjectPageView page={page} />;
}
