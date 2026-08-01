import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export interface EmergencyRequest {
  id: string;
  hospitalName: string;
  bloodType: string;
  unitsNeeded: number;
  urgency: string;
  location: string;
  timestamp: string;
}

export const fetchEmergencyRequests = async (): Promise<EmergencyRequest[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/emergency-requests`);
    return response.data;
  } catch (error) {
    console.error('Error fetching emergency requests:', error);
    return [];
  }
};

export const createEmergencyRequest = async (data: Omit<EmergencyRequest, 'id' | 'timestamp'>) => {
  const response = await axios.post(`${API_BASE_URL}/emergency-requests`, data);
  return response.data;
};