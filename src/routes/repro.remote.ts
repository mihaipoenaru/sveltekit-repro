import {form, query} from '$app/server';
import z from 'zod';

export const func = query(async () => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return {success: true};
})