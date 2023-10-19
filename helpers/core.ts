// export const search = async (term: string) => {
//   let giphys = await fetch(
//     `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=nPJNlVceWHERWCSDBW5XMo1p90l7l9ie&limit=6`,
//   );
//   giphys = await giphys.json();
//   return giphys;
// };

// export type Giphy = {
//   title: string;
//   images: { original: { url: string } };
// };

// Import necessary modules for making API calls

export const search = async (term: string) => {
  try {
    // Fetch data from the Giphy API using the provided search term
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=6`
    );

    // Check if the response is successful (HTTP status code 200-299)
    if (!response.ok) {
      throw new Error('Failed to fetch data from the Giphy API');
    }

    // Parse the response as JSON
    const giphys = await response.json();

    // Return the parsed data
    return giphys;
  } catch (error) {
    // Handle any errors that occur during the fetch or parsing
    console.error('Error fetching Giphy data:', error);
   // throw new Error('Failed to fetch Giphy data');
  }
};
