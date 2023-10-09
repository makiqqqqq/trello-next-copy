import { config } from '@/core/config';
import axios from 'axios';

export const apiKeys = {
  GET_BOARDS: 'boards',
  CREATE_BOARD: 'create-boards',
};

export const api = axios.create({
  baseURL: config.baseApiUri,
});
