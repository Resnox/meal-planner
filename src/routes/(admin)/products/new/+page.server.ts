import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { products } from '$db/schema/data/product';
import { createInsertSchema } from 'drizzle-zod';
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$db/index';
import type { PageServerLoad } from './$types';

const productInsertSchema = createInsertSchema(products);

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod4(productInsertSchema));

	return { form };
}

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod4(productInsertSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		await db.insert(products).values(productInsertSchema.parse(form.data));

		return redirect(302, '/products');
	}
};