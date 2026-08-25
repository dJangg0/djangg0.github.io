import { GitBranch, Globe, Mail } from "lucide-react";

import { Button } from "~/components/ui/button";

export function SiteFooter() {
	return (
		<footer className="border-t py-8">
			<div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
				<p className="text-muted-foreground text-sm">
					© {new Date().getFullYear()} Your Name. All rights reserved.
				</p>
				<div className="flex items-center gap-2">
					<Button
						aria-label="GitHub"
						nativeButton={false}
						render={
							<a href="https://github.com" rel="noreferrer" target="_blank" />
						}
						size="icon"
						variant="ghost"
					>
						<GitBranch className="size-4" />
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
						<Globe className="size-4" />
					</Button>
					<Button
						aria-label="Email"
						nativeButton={false}
						render={<a href="mailto:hello@example.com" />}
						size="icon"
						variant="ghost"
					>
						<Mail className="size-4" />
					</Button>
				</div>
			</div>
		</footer>
	);
}
