const API_BASE_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchTickets = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data.tickets; // Return only tickets
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return [];
  }
};
