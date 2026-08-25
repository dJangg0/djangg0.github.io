import { ExternalLink, GitBranch } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";

const projects = [
	{
		title: "Project One",
		description:
			"A full-stack web application that helps teams collaborate more effectively with real-time updates and a beautiful interface.",
		tags: ["Next.js", "TypeScript", "PostgreSQL", "tRPC"],
		github: "https://github.com",
		demo: "https://example.com",
	},
	{
		title: "Project Two",
		description:
			"An open-source library that simplifies complex data visualization with a focus on accessibility and performance.",
		tags: ["React", "D3.js", "Tailwind CSS"],
		github: "https://github.com",
		demo: "https://example.com",
	},
	{
		title: "Project Three",
		description:
			"A mobile-first platform that helps users track their habits and build better routines through gamification.",
		tags: ["React Native", "Node.js", "MongoDB"],
		github: "https://github.com",
		demo: "https://example.com",
	},
];

export function Projects() {
	return (
		<section className="py-20" id="projects">
			<div className="container mx-auto flex flex-col gap-8">
				<div className="flex flex-col gap-2">
					<h2 className="font-bold font-heading text-3xl tracking-tight sm:text-4xl">
						Featured Projects
					</h2>
					<p className="text-muted-foreground">
						Some things I&apos;ve built recently.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<Card
							className="flex flex-col transition-colors hover:border-primary/50"
							key={project.title}
						>
							<CardHeader>
								<CardTitle className="font-heading text-xl">
									{project.title}
								</CardTitle>
								<CardDescription className="leading-relaxed">
									{project.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<Badge key={tag} variant="secondary">
										{tag}
									</Badge>
								))}
							</CardContent>
							<CardFooter className="mt-auto gap-2">
								<Button
									nativeButton={false}
									render={
										<a href={project.github} rel="noreferrer" target="_blank" />
									}
									size="sm"
									variant="ghost"
								>
									<GitBranch className="size-4" />
									Code
								</Button>
								<Button
									nativeButton={false}
									render={
										<a href={project.demo} rel="noreferrer" target="_blank" />
									}
									size="sm"
									variant="ghost"
								>
									<ExternalLink className="size-4" />
									Demo
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
