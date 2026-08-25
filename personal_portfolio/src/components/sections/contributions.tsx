import { GitBranch } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "~/components/ui/tooltip";
import { contributions } from "~/data/contributions";

const levelColors = [
	"bg-muted",
	"bg-emerald-200",
	"bg-emerald-400",
	"bg-emerald-600",
	"bg-emerald-800",
];

const monthLabels = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

// Day labels shown on the left of the heatmap (GitHub shows Mon, Wed, Fri).
const dayLabels = [
	{ key: "sun", label: "" },
	{ key: "mon", label: "Mon" },
	{ key: "tue", label: "" },
	{ key: "wed", label: "Wed" },
	{ key: "thu", label: "" },
	{ key: "fri", label: "Fri" },
	{ key: "sat", label: "" },
];

function formatDate(iso: string) {
	return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
}

function Stat({ label, value }: { label: string; value: string }) {
	return (
		<Card>
			<CardContent className="flex flex-col gap-1">
				<span className="font-bold font-heading text-2xl">{value}</span>
				<span className="text-muted-foreground text-xs">{label}</span>
			</CardContent>
		</Card>
	);
}

export function Contributions() {
	const { username, profileUrl, weeks, stats } = contributions;

	// Compute which week each month starts at so the month labels align with
	// the week columns in the heatmap.
	const monthStarts: { label: string; weekIndex: number }[] = [];
	weeks.forEach((week, i) => {
		const month = new Date(`${week.days[0]?.date}T00:00:00Z`).getMonth();
		const prevMonth =
			i === 0
				? -1
				: new Date(`${weeks[i - 1]?.days[0]?.date}T00:00:00Z`).getMonth();
		if (month !== prevMonth) {
			monthStarts.push({
				label: monthLabels[month] ?? "",
				weekIndex: i,
			});
		}
	});

	return (
		<section className="py-20" id="contributions">
			<div className="container mx-auto flex flex-col gap-8">
				<div className="flex flex-col gap-2">
					<h2 className="font-bold font-heading text-3xl tracking-tight sm:text-4xl">
						GitHub Contributions
					</h2>
					<p className="text-muted-foreground">
						My open-source activity over the past year.
					</p>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					<Stat
						label="Total contributions"
						value={stats.total.toLocaleString()}
					/>
					<Stat label="Best day" value={`${stats.bestDay}`} />
					<Stat label="Current streak" value={`${stats.currentStreak} days`} />
					<Stat label="Longest streak" value={`${stats.longestStreak} days`} />
				</div>

				<Card>
					<CardHeader className="flex-row items-center justify-between gap-4">
						<CardTitle className="font-normal text-muted-foreground text-xs">
							{stats.total.toLocaleString()} contributions in the last year
						</CardTitle>
						<Button
							nativeButton={false}
							render={<a href={profileUrl} rel="noreferrer" target="_blank" />}
							size="sm"
							variant="ghost"
						>
							<GitBranch className="size-4" />@{username}
						</Button>
					</CardHeader>
					<CardContent>
						<TooltipProvider delay={0}>
							<div className="overflow-x-auto">
								<div className="flex min-w-max flex-col gap-2">
									{/* Month labels aligned to the week columns */}
									<div className="flex gap-1 pl-8">
										{monthStarts.map(({ label, weekIndex }, i) => {
											const nextStart =
												monthStarts[i + 1]?.weekIndex ?? weeks.length;
											const width = (nextStart - weekIndex) * 16;
											return (
												<span
													className="text-[10px] text-muted-foreground"
													key={weekIndex}
													style={{ width }}
												>
													{label}
												</span>
											);
										})}
									</div>
									{/* Heatmap */}
									<div className="flex gap-1">
										{/* Day labels */}
										<div className="flex w-8 flex-col gap-1">
											{dayLabels.map(({ key, label }) => (
												<span
													className="flex h-3 items-center justify-end pr-1 text-[10px] text-muted-foreground"
													key={key}
												>
													{label}
												</span>
											))}
										</div>
										{/* Weeks */}
										<div className="flex gap-1">
											{weeks.map((week) => (
												<div
													className="flex flex-col gap-1"
													key={week.days[0]?.date}
												>
													{week.days.map((day) => (
														<Tooltip key={day.date}>
															<TooltipTrigger
																className={`size-3 rounded-[3px] ${levelColors[day.level]}`}
															/>
															<TooltipContent>
																{day.count} contribution
																{day.count === 1 ? "" : "s"} on{" "}
																{formatDate(day.date)}
															</TooltipContent>
														</Tooltip>
													))}
												</div>
											))}
										</div>
									</div>
									{/* Legend */}
									<div className="flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
										<span>Less</span>
										{levelColors.map((color) => (
											<span
												className={`size-3 rounded-[3px] ${color}`}
												key={color}
											/>
										))}
										<span>More</span>
									</div>
								</div>
							</div>
						</TooltipProvider>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
