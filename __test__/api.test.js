import { getDataApi } from "../src/api.js";
import {jest} from '@jest/globals';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            console.log('estoy dentro de json')
            return Promise.resolve({text:'soy un text'})
        }
    })}
)

test('1+1 = 2',()=>{
    expect(1+1).toBe(2)
})


test('getDataApi should return "soy un text"', async ()=>{
    const text = await getDataApi();
    console.log(text);
    expect(text).toBe('soy un text');
    expect(fetch).toHaveBeenCalledTimes(1);
})