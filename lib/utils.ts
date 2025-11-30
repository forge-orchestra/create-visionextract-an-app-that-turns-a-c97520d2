import { LucideIcon } from 'lucide-react';

/**
 * Type representing the structured data extracted from a screenshot.
 */
export type StructuredData = {
  text: string;
  boundingBoxes: BoundingBox[];
};

/**
 * Type representing a bounding box for detected elements in the screenshot.
 */
export type BoundingBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

/**
 * Type representing an error with a message and optional code.
 */
export type AppError = {
  message: string;
  code?: string;
};

/**
 * Parses a JSON string into an object of type T.
 * @param jsonString - The JSON string to parse.
 * @returns The parsed object of type T.
 * @throws Will throw an error if the JSON is invalid.
 */
export function parseJson<T>(jsonString: string): T {
  try {
    return JSON.parse(jsonString) as T;
  } catch (error) {
    throw createAppError('Invalid JSON string', 'JSON_PARSE_ERROR');
  }
}

/**
 * Creates a standardized application error.
 * @param message - The error message.
 * @param code - Optional error code.
 * @returns An AppError object.
 */
export function createAppError(message: string, code?: string): AppError {
  return { message, code };
}

/**
 * Extracts text and bounding boxes from a screenshot.
 * @param imageData - The image data of the screenshot.
 * @returns A promise that resolves to the structured data.
 */
export async function extractDataFromScreenshot(imageData: Blob): Promise<StructuredData> {
  try {
    // Placeholder for actual image processing logic
    const structuredData: StructuredData = {
      text: 'Sample text',
      boundingBoxes: [{ x: 0, y: 0, width: 100, height: 50 }]
    };
    return structuredData;
  } catch (error) {
    throw createAppError('Failed to extract data from screenshot', 'DATA_EXTRACTION_ERROR');
  }
}

/**
 * Renders a Lucide icon with Tailwind CSS styling.
 * @param icon - The Lucide icon component.
 * @param className - Additional Tailwind CSS classes.
 * @returns A JSX element representing the icon.
 */
export function renderIcon(icon: LucideIcon, className: string = ''): JSX.Element {
  return <icon className={`text-gray-500 ${className}`} />;
}

export {
  parseJson,
  createAppError,
  extractDataFromScreenshot,
  renderIcon
};