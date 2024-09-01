import { defineAction, ActionError } from 'astro:actions';
import { supabase } from "@/library/supabase";
import { z } from 'astro:schema';

export const server = {
	login: defineAction({
		accept: 'form',
		input: z.object({
			email: z.string().email(),
			password: z.string(),
		}),
		handler: async ({ email, password }, ctx) => {
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			if (error) {
				throw new ActionError({
					code: "UNAUTHORIZED",
					message: "No user found with those credentials",
				});
			}

			const { access_token, refresh_token } = data.session;

			ctx.cookies.set("sb-access-token", access_token, {
				path: "/",
			});
			ctx.cookies.set("sb-refresh-token", refresh_token, {
				path: "/",
			});
		},
	})
}