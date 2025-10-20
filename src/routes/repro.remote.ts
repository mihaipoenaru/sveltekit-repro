import { form } from '$app/server';
import z from 'zod';

export const reproRemote = form(z.object({name: z.string(), surname: z.string()}), () => {

});