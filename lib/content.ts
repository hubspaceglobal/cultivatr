import fs from 'node:fs';
import path from 'node:path';

export type LessonModule = {
  slug: string;
  title: string;
  summary: string;
  objective: string;
  lesson_points: string[];
  cta_label?: string;
  cta_href?: string;
};

function readJson<T>(filePath: string): T {
  const absolute = path.join(process.cwd(), filePath);
  const contents = fs.readFileSync(absolute, 'utf-8');
  return JSON.parse(contents) as T;
}

export function getRbdModules(): LessonModule[] {
  return readJson<{ modules: LessonModule[] }>('content/rbd/modules.json').modules;
}

export function getTechModules(): LessonModule[] {
  return readJson<{ modules: LessonModule[] }>('content/tech/modules.json').modules;
}
