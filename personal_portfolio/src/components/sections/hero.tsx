import { ArrowRight, GitBranch, Globe, Mail } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export function Hero() {
	return (
		<section className="relative flex min-h-[calc(100vh-3.5rem)] items-center justify-center py-20">
			<div className="container mx-auto flex flex-col items-center gap-8 text-center">
				<Badge className="gap-2" variant="secondary">
					<span className="size-2 rounded-full bg-emerald-500" />
					Available for work
				</Badge>

				<div className="flex flex-col gap-4">
					<h1 className="font-bold font-heading text-4xl tracking-tight sm:text-6xl md:text-7xl">
						Hi, I&apos;m{" "}
						<span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
							Your Name
						</span>
					</h1>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
						I build modern, accessible web applications with a focus on
						performance and delightful user experiences.
					</p>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-4">
					<Button
						nativeButton={false}
						render={<a href="#projects" />}
						size="lg"
					>
						View Projects
						<ArrowRight className="size-4" />
					</Button>
					<Button
						nativeButton={false}
						render={<a href="#contact" />}
						size="lg"
						variant="outline"
					>
						Get in touch
					</Button>
				</div>

				<div className="flex items-center gap-4">
					<Button
						aria-label="GitHub"
						nativeButton={false}
						render={
							<a href="https://github.com" rel="noreferrer" target="_blank" />
						}
						size="icon"
						variant="ghost"
					>
						<GitBranch className="size-5" />
					</Button>
					<Button
						aria-label="Website"
						nativeButton={false}
						render={
							<a href="https://example.com" rel="noreferrer" target="_blank" />
						}
						size="icon"
						variant="ghost"
					>
						<Globe className="size-5" />
					</Button>
					<Button
						aria-label="Email"
						nativeButton={false}
						render={<a href="mailto:hello@example.com" />}
						size="icon"
						variant="ghost"
					>
						<Mail className="size-5" />
					</Button>
				</div>
			</div>
		</section>
	);
}
