export function About() {
	return (
		<section className="py-20" id="about">
			<div className="container mx-auto flex flex-col gap-8">
				<div className="flex flex-col gap-2">
					<h2 className="font-bold font-heading text-3xl tracking-tight sm:text-4xl">
						About Me
					</h2>
					<p className="text-muted-foreground">
						A little bit about who I am and what I do.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-2">
					<div className="flex flex-col gap-4">
						<p className="text-lg text-muted-foreground leading-relaxed">
							I&apos;m a passionate developer who loves turning complex problems
							into simple, beautiful, and intuitive solutions. With experience
							across the full stack, I enjoy building products that make a real
							difference in people&apos;s lives.
						</p>
						<p className="text-lg text-muted-foreground leading-relaxed">
							When I&apos;m not coding, you&apos;ll find me exploring new
							technologies, contributing to open source, or sharing what I learn
							through writing and mentoring.
						</p>
					</div>

					<div className="flex flex-col gap-4">
						<h3 className="font-heading font-semibold text-xl">
							What I bring to the table
						</h3>
						<ul className="flex flex-col gap-3">
							{[
								"Full-stack development with modern frameworks",
								"Clean, maintainable, and testable code",
								"Strong focus on accessibility and performance",
								"Experience with cloud infrastructure and DevOps",
							].map((item) => (
								<li
									className="flex items-start gap-3 text-muted-foreground"
									key={item}
								>
									<span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
