/* eslint-disable no-unused-vars */
/**
 * api.js
 * Central point for managing API integration functions.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const submitBooking = async (bookingData) => {
    // TODO: Implement external API POST for booking forms
    // const response = await fetch(`${API_BASE_URL}/booking`, { ... });
    // return response.json();
    return Promise.resolve({ success: true, dummy: true });
};

export const submitEmergencyRequest = async (emergencyData) => {
    // TODO: Implement high-priority API POST for emergency alerts
    return Promise.resolve({ success: true, dummy: true });
};

export const fetchServices = async () => {
    // TODO: Dynamically fetch services mapping
    return Promise.resolve([]);
};
