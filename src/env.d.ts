// Astro image import types
interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
  orientation?: number;
}

// Project frontmatter interface
interface ProjectFrontmatter {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  websiteUrl?: string;
  cardColor: string;
}

interface MarkdownInstance<T extends Record<string, any>> {
  /* Any data specified in this file's YAML/TOML frontmatter */
  frontmatter: T;
  /* The absolute file path of this file */
  file: string;
  /* The rendered path of this file */
  url: string | undefined;
  /* Astro Component that renders the contents of this file */
  Content: AstroComponentFactory;
  /** (Markdown only) Raw Markdown file content, excluding layout HTML and YAML/TOML frontmatter */
  rawContent(): string;
  /** (Markdown only) Markdown file compiled to HTML, excluding layout HTML */
  compiledContent(): string;
  /* Function that returns an array of the h1...h6 elements in this file */
  getHeadings(): Promise<{ depth: number; slug: string; text: string }[]>;
  default: AstroComponentFactory;
}

interface ImportMeta {
  glob<T = Record<string, any>>(
    pattern: string, 
    options?: { eager?: boolean }
  ): T extends Record<string, any> ? (T | Promise<T>) : Record<string, T>;
}

// HTML image attributes
interface HTMLImageAttributes {
  class?: string;
  style?: string | Record<string, any>;
  id?: string;
  title?: string;
  role?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'data-*'?: string;
  [key: `data-${string}`]: any;
}

// Astro Image component props (proper typing)
interface AstroImageProps extends HTMLImageAttributes {
  src: ImageMetadata | string;
  alt: string;
  width?: number;
  height?: number;
  format?: 'avif' | 'jpeg' | 'jpg' | 'png' | 'svg' | 'webp';
  quality?: number;
  densities?: number[];
  widths?: number[];
  sizes?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'auto' | 'async' | 'sync';
  fetchpriority?: 'auto' | 'high' | 'low';
}

// Astro Picture component props
interface AstroPictureProps extends HTMLImageAttributes {
  src: ImageMetadata | string;
  alt: string;
  width?: number;
  height?: number;
  formats?: ('avif' | 'jpeg' | 'jpg' | 'png' | 'svg' | 'webp')[];
  fallbackFormat?: 'avif' | 'jpeg' | 'jpg' | 'png' | 'svg' | 'webp';
  quality?: number;
  densities?: number[];
  widths?: number[];
  sizes?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'auto' | 'async' | 'sync';
  fetchpriority?: 'auto' | 'high' | 'low';
}

// Astro module declarations with proper types
declare module 'astro:assets' {
  export const Image: (props: AstroImageProps) => any;
  export const Picture: (props: AstroPictureProps) => any;
  export const getImage: (options: {
    src: ImageMetadata | string;
    width?: number;
    height?: number;
    format?: string;
    quality?: number;
  }) => Promise<{
    src: string;
    width: number;
    height: number;
    format: string;
  }>;
}

declare module "*.jpg" {
  const value: ImageMetadata;
  export default value;
}

declare module "*.jpeg" {
  const value: ImageMetadata;
  export default value;
}

declare module "*.PNG" {
  const value: ImageMetadata;
  export default value;
}

declare module "*.png" {
  const value: ImageMetadata;
  export default value;
}

declare module "*.webp" {
  const value: ImageMetadata;
  export default value;
}

declare module "*.gif" {
  const value: ImageMetadata;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.pdf" {
  const value: string;
  export default value;
}