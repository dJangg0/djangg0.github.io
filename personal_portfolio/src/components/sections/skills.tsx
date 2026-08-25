import { Badge } from "~/components/ui/badge";

const skillGroups = [
	{
		title: "Frontend",
		skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
	},
	{
		title: "Backend",
		skills: ["Node.js", "tRPC", "PostgreSQL", "Drizzle ORM", "REST APIs"],
	},
	{
		title: "Tools & DevOps",
		skills: ["Git", "Docker", "CI/CD", "Vercel", "AWS"],
	},
];

export function Skills() {
	return (
		<section className="py-20" id="skills">
			<div className="container mx-auto flex flex-col gap-8">
				<div className="flex flex-col gap-2">
					<h2 className="font-bold font-heading text-3xl tracking-tight sm:text-4xl">
						Skills & Technologies
					</h2>
					<p className="text-muted-foreground">
						The tools and technologies I work with.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					{skillGroups.map((group) => (
						<div
							className="flex flex-col gap-4 rounded-lg border bg-card p-6"
							key={group.title}
						>
							<h3 className="font-heading font-semibold text-lg">
								{group.title}
							</h3>
							<div className="flex flex-wrap gap-2">
								{group.skills.map((skill) => (
									<Badge key={skill} variant="secondary">
										{skill}
									</Badge>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
