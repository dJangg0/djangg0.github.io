"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "~/components/ui/sheet";

const navItems = [
	{ href: "#about", label: "About" },
	{ href: "#projects", label: "Projects" },
	{ href: "#skills", label: "Skills" },
	{ href: "#contact", label: "Contact" },
];

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-14 items-center justify-between">
				<Link className="flex items-center gap-2 font-semibold" href="/">
					<span className="font-bold text-lg tracking-tight">Your Name</span>
				</Link>

				<nav className="hidden items-center gap-6 md:flex">
					{navItems.map((item) => (
						<Link
							className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
							href={item.href}
							key={item.href}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<ThemeToggle />
					<Sheet>
						<SheetTrigger
							render={
								<Button className="md:hidden" size="icon" variant="ghost" />
							}
						>
							<MenuIcon />
						</SheetTrigger>
						<SheetContent side="right">
							<SheetHeader>
								<SheetTitle>Menu</SheetTitle>
							</SheetHeader>
							<nav className="flex flex-col gap-4 pt-6">
								{navItems.map((item) => (
									<Link
										className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
										href={item.href}
										key={item.href}
									>
										{item.label}
									</Link>
								))}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}

function MenuIcon() {
	return <Menu className="size-4" />;
}
