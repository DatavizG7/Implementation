export const load = async ({ fetch }) => {
  
    const responseFlights = await fetch('http://localhost:5173/flights_part.json')
    const dataFlights = await responseFlights.json()
  
    return {
      aeor: dataFlights,
      flights: dataFlights
    } } 
