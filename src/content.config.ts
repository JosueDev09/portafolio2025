// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)  
import { glob } from 'astro/loaders';

// 3. Define skill schema
const skillSchema = z.object({
    title: z.string(),
    level: z.string(), // e.g., "85%"
    img: z.string(), // URL to the skill icon
});

// 4. Define collections for each skill category
const backendSkills = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/skills/backend" }),
    schema: skillSchema,
});

const frontendSkills = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/skills/frontend" }),
    schema: skillSchema,
});

const toolsSkills = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/skills/tools" }),
    schema: skillSchema,
});

// 5. Export collections
export const collections = {
    'backend-skills': backendSkills,
    'frontend-skills': frontendSkills,
    'tools-skills': toolsSkills,
};