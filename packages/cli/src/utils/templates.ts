import type { Node } from "estree-walker";

export const STYLES = `@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
 
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
 
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;
 
    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;
 
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
 
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
 
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
 
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
 
    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;
 
    --ring: 215 20.2% 65.1%;
 
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;
 
    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;
 
    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;
 
    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;
 
    --border: 216 34% 17%;
    --input: 216 34% 17%;
 
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;
 
    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;
 
    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;
 
    --destructive: 360 62% 55%;
    --destructive-foreground: 210 40% 98%;
 
    --ring: 216 34% 17%;
 
    --radius: 0.5rem;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}`;

export const UTILS = `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;

export const TAILWIND_CONFIG = `const { fontFamily } = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [...fontFamily.sans]
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}`;

export const SVELTE_CONFIG = `import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      $components: "src/lib/components",
      "$components/*": "src/lib/components/*"
    }
  }
};

export default config;`;

export const FULL_ALIAS_NODE: Node = {
	type: "Property",
	method: false,
	shorthand: false,
	computed: false,
	key: {
		type: "Identifier",
		name: "alias"
	},
	value: {
		type: "ObjectExpression",
		properties: [
			{
				type: "Property",
				method: false,
				shorthand: false,
				computed: false,
				key: {
					type: "Identifier",
					name: "$components"
				},
				value: {
					type: "Literal",
					value: "src/lib/components",
					raw: '"src/lib/components"'
				},
				kind: "init"
			},
			{
				type: "Property",
				method: false,
				shorthand: false,
				computed: false,
				key: {
					type: "Literal",
					value: "$components/*",
					raw: '"$components/*"'
				},
				value: {
					type: "Literal",
					value: "src/lib/components/*",
					raw: '"src/lib/components/*"'
				},
				kind: "init"
			}
		]
	},
	kind: "init"
};
