/**
 * GitHub contributions data.
 *
 * This is currently a static snapshot so the section renders without any
 * network calls. To make it live, replace the `weeks` array with data fetched
 * from the GitHub GraphQL API (`contributionsCollection.contributionCalendar`)
 * and update `stats` accordingly.
 */

export interface ContributionDay {
	/** ISO date, e.g. "2026-08-25" */
	date: string;
	/** Number of contributions on that day */
	count: number;
	/** 0-4 intensity level used to pick the heatmap color */
	level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionWeek {
	/** Days in this week, oldest first (Sunday -> Saturday) */
	days: ContributionDay[];
}

export interface ContributionStats {
	total: number;
	bestDay: number;
	bestDayDate: string;
	currentStreak: number;
	longestStreak: number;
}

export interface ContributionsData {
	username: string;
	profileUrl: string;
	/** 52 weeks of contribution data, oldest first */
	weeks: ContributionWeek[];
	stats: ContributionStats;
}

/**
 * Deterministic pseudo-random generator so the static snapshot is stable
 * between builds.
 */
function seededRandom(seed: number) {
	let state = seed;
	return () => {
		state = (state * 1664525 + 1013904223) % 4294967296;
		return state / 4294967296;
	};
}

function buildWeeks(): ContributionWeek[] {
	const rand = seededRandom(42);
	const weeks: ContributionWeek[] = [];
	const start = new Date("2025-08-25T00:00:00Z");

	for (let w = 0; w < 53; w++) {
		const days: ContributionDay[] = [];
		for (let d = 0; d < 7; d++) {
			const date = new Date(start);
			date.setUTCDate(start.getUTCDate() + w * 7 + d);
			const iso = date.toISOString().slice(0, 10);

			// Weekend bias + occasional bursts to look organic.
			const isWeekend = d === 0 || d === 6;
			const burst = rand() > 0.9 ? 3 : 0;
			const count = isWeekend
				? Math.floor(rand() * 2)
				: Math.floor(rand() * 4) + burst;

			const level: ContributionDay["level"] =
				count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : count <= 6 ? 3 : 4;

			days.push({ date: iso, count, level });
		}
		weeks.push({ days });
	}

	return weeks;
}

/**
 * Derive the stats from the generated weeks so the numbers always match the
 * heatmap. This avoids the risk of hardcoded stats drifting out of sync.
 */
function buildStats(weeks: ContributionWeek[]): ContributionStats {
	const days = weeks.flatMap((week) => week.days);

	const total = days.reduce((sum, day) => sum + day.count, 0);

	let bestDay: ContributionDay | undefined;
	for (const day of days) {
		if (!bestDay || day.count > bestDay.count) bestDay = day;
	}

	let longestStreak = 0;
	let currentRun = 0;
	for (const day of days) {
		if (day.count > 0) {
			currentRun++;
			if (currentRun > longestStreak) longestStreak = currentRun;
		} else {
			currentRun = 0;
		}
	}

	let currentStreak = 0;
	for (let i = days.length - 1; i >= 0; i--) {
		const day = days[i];
		if (day && day.count > 0) currentStreak++;
		else break;
	}

	return {
		total,
		bestDay: bestDay?.count ?? 0,
		bestDayDate: bestDay?.date ?? "",
		currentStreak,
		longestStreak,
	};
}

const weeks = buildWeeks();

export const contributions: ContributionsData = {
	username: "dJangg0",
	profileUrl: "https://github.com/dJangg0",
	weeks,
	stats: buildStats(weeks),
};
