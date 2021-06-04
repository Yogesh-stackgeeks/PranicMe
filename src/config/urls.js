export const API_BASE_URL = 'http://3.135.165.114:8000';

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const REGISTER_USER = getApiUrl('/user/v1/register');

export const WEIGHT_USER = getApiUrl('/user/v1/listWeights');

export const HEIGHT_USER =getApiUrl('/user/v1/listHeights');

export const LIST_COUNTRY =getApiUrl('/user/v1/listCountries')


