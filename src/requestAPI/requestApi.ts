interface FetchParams {
  [key: string]: string | number | boolean;
}

// Define an asynchronous function that accepts parameters
export const fetchData = async (baseUrl: string, params?: FetchParams) => {
  console.log("Fetching data from:", baseUrl, "with params:", params);
  // Build URL with parameters
  let url = baseUrl;
  if (params && Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
    url = `${baseUrl}?${searchParams.toString()}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
