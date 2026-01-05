/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: impacttimeline
 * Interface for ImpactTimeline
 */
export interface ImpactTimeline {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  milestoneTitle?: string;
  /** @wixFieldType date */
  eventDate?: Date | string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  impactDetails?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  milestoneImage?: string;
  /** @wixFieldType url */
  callToActionUrl?: string;
}


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
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  featuredImage?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType text */
  summary?: string;
  /** @wixFieldType url */
  sourceUrl?: string;
}


/**
 * Collection ID: programs
 * Interface for Programs
 */
export interface Programs {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  programTitle?: string;
  /** @wixFieldType text */
  programDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  programImage?: string;
  /** @wixFieldType text */
  programCategory?: string;
  /** @wixFieldType url */
  callToActionLink?: string;
}
