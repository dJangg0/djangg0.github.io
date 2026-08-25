import { Mail } from "lucide-react";

import { Button } from "~/components/ui/button";

export function Contact() {
	return (
		<section className="py-20" id="contact">
			<div className="container mx-auto">
				<div className="flex flex-col items-center gap-6 rounded-2xl border bg-card p-8 text-center sm:p-12">
					<div className="flex flex-col gap-2">
						<h2 className="font-bold font-heading text-3xl tracking-tight sm:text-4xl">
							Let&apos;s Work Together
						</h2>
						<p className="mx-auto max-w-xl text-muted-foreground">
							Have a project in mind or just want to say hi? I&apos;d love to
							hear from you. I&apos;m always open to discussing new
							opportunities and collaborations.
						</p>
					</div>
					<Button
						nativeButton={false}
						render={<a href="mailto:hello@example.com" />}
						size="lg"
					>
						<Mail className="size-4" />
						Get in touch
					</Button>
				</div>
			</div>
		</section>
	);
}
