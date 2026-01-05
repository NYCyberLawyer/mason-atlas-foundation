/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: newsarticles
 * Interface for NewsArticles
 */
export interface NewsArticles {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  author?: string;
  /** @wixFieldType date */
  publicationDate?: Date | string;
  /** @wixFieldType image */
  featuredImage?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType text */
  summary?: string;
  /** @wixFieldType url */
  sourceUrl?: string;
}
