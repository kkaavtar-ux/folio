import type { ImageMetadata } from 'astro';

export interface GItem {
  image: ImageMetadata;
  alt: string;
  fit?: 'cover' | 'contain';
  /** Crop-in factor (Figma close-ups render the image larger than its tile). */
  zoom?: number;
  /** Process-style caption under the image. */
  title?: string;
  text?: string;
  /** Mono-s caption under the image. */
  caption?: string;
}

export interface GRow {
  items: GItem[];
  /** Tile aspect ratio (w/h). Omit to use each image's own ratio. */
  ratio?: number;
  /** Desktop columns when the row wraps (default: one column per item). */
  cols?: number;
  /** Mobile behaviour: carousel (280px items), 2-column grid, or full-width stack. */
  mobile?: 'carousel' | 'grid' | 'stack';
}

export interface GGroup {
  label?: string;
  text?: string;
  rows: GRow[];
}
