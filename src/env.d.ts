// Astro image import types
interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format: string;
  orientation?: number;
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
