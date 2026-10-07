import type { CollectionEntry } from 'astro:content';
import { ordering } from '../config';
import { PRESENT } from './date';

type Project = CollectionEntry<'projects'>;

export const slugOf = (p: Project) => p.id.replace(/\.mdx?$/, '');

/** "2025-09" -> 202509; open-ended sorts first, undated last */
const dateKey = (p: Project) => {
	const d = p.data.date;
	if (!d) return -1;
	if (d.to === PRESENT) return Number.MAX_SAFE_INTEGER;
	return Number((d.to ?? d.from).replace('-', ''));
};

const byDateDesc = (a: Project, b: Project) => dateKey(b) - dateKey(a);

/** promoted in-progress work, then each bucket in order. see `ordering` in config.ts */
export function orderProjects(projects: Project[]): Project[] {
	const bucketOf = new Map<string, number>();
	ordering.forEach((bucket, i) => {
		for (const id of bucket.ids) bucketOf.set(id, i);
	});

	// implicit final bucket, never absolute
	const lastBucket = ordering.length;
	const isAbsolute = (bucket: number) => ordering[bucket]?.absolute ?? false;
	const indexOf = (p: Project) => bucketOf.get(slugOf(p)) ?? lastBucket;

	const promoted: Project[] = [];
	const buckets: Project[][] = Array.from({ length: lastBucket + 1 }, () => []);

	for (const project of projects) {
		const bucket = indexOf(project);
		// in-progress breaks out unless its bucket holds
		if (project.data.inProgress && !isAbsolute(bucket)) {
			promoted.push(project);
		} else {
			buckets[bucket].push(project);
		}
	}

	// promoted keep their bucket priority, then date
	promoted.sort((a, b) => indexOf(a) - indexOf(b) || byDateDesc(a, b));
	for (const bucket of buckets) bucket.sort(byDateDesc);

	return [...promoted, ...buckets.flat()];
}
