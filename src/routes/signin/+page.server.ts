import { signIn } from '$src/auth';
import type { Actions } from './$types';

export const actions = { default: signIn } satisfies Actions;
