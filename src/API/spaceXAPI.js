
// getting the data from the API
export const getSpaceXAPI = async() => {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/launches/', { method: "Get"})

        if (!response.ok) {
            throw new Error(`Failed to fetch SpaceX API: ${response.status} - ${response.statusText}`);
        }


        return response.json()
    } catch (error) {
        throw new Error(`Error fetching SpaceX API: ${error.message}`);
    }
}
  
