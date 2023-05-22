import {getApiData} from './api.js';
import { jest } from '@jest/globals';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: (data) => {
      console.log('hasta aqui llego');
      return Promise.resolve({text:'soy un texto'})},
  })
);

test('getApiData should return a text',async ()=>{
    const text = await getApiData();
    expect(text).toBe('soy un texto');
    expect(fetch).toHaveBeenCalledTimes(1);
})