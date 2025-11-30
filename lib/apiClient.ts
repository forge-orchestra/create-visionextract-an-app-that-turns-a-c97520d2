import axios, { AxiosResponse } from 'axios';

type ScreenshotData = {
  id: string;
  url: string;
  processedData: Record<string, any>;
};

type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

/**
 * Fetches processed data from the server for a given screenshot ID.
 * @param {string} id - The ID of the screenshot.
 * @returns {Promise<ApiResponse<ScreenshotData>>} - The API response containing the processed data.
 * @throws Will throw an error if the request fails.
 */
export async function fetchProcessedData(id: string): Promise<ApiResponse<ScreenshotData>> {
  try {
    const response: AxiosResponse<ApiResponse<ScreenshotData>> = await axios.get(`/api/screenshot/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch processed data: ${error}`);
  }
}

/**
 * Uploads a screenshot to the server for processing.
 * @param {File} file - The screenshot file to be uploaded.
 * @returns {Promise<ApiResponse<ScreenshotData>>} - The API response containing the uploaded screenshot data.
 * @throws Will throw an error if the upload fails.
 */
export async function uploadScreenshot(file: File): Promise<ApiResponse<ScreenshotData>> {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response: AxiosResponse<ApiResponse<ScreenshotData>> = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to upload screenshot: ${error}`);
  }
}

/**
 * Deletes a screenshot from the server.
 * @param {string} id - The ID of the screenshot to be deleted.
 * @returns {Promise<ApiResponse<null>>} - The API response confirming deletion.
 * @throws Will throw an error if the deletion fails.
 */
export async function deleteScreenshot(id: string): Promise<ApiResponse<null>> {
  try {
    const response: AxiosResponse<ApiResponse<null>> = await axios.delete(`/api/screenshot/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to delete screenshot: ${error}`);
  }
}

export { ScreenshotData, ApiResponse };