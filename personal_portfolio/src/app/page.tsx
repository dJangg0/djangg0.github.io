import { About } from "~/components/sections/about";
import { Contact } from "~/components/sections/contact";
import { Contributions } from "~/components/sections/contributions";
import { Hero } from "~/components/sections/hero";
import { Projects } from "~/components/sections/projects";
import { Skills } from "~/components/sections/skills";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader />
			<main className="flex-1">
				<Hero />
				<About />
				<Contributions />
				<Projects />
				<Skills />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	);
}
