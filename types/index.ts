import { ReactNode } from 'react';

export interface Screenshot {
  id: string;
  url: string;
  uploadedAt: Date;
}

export interface StructuredData {
  id: string;
  screenshotId: string;
  data: Record<string, any>;
  createdAt: Date;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

export interface UploadScreenshotPayload {
  file: File;
}

export interface ProcessedDataResponse {
  structuredData: StructuredData;
}

export interface AppContextProps {
  children: ReactNode;
}

export interface IconProps {
  className?: string;
  size?: number;
}