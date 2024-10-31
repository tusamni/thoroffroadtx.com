import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { Business } from "@/config";

export const server = {
	contact: defineAction({
		accept: "form",
		input: z.object({
			name: z.string(),
			email: z.string().email(),
			phone: z.string().optional(),
			zip: z.string().optional(),
			message: z.string().optional(),
			year: z.string().optional(),
			make: z.string().optional(),
			model: z.string().optional(),
			path: z.string(),
			marketing: z.string().optional()
		}),
		handler: async (input) => {
			if (input.zip) {
				throw new ActionError({
					code: "SPAM_ERROR",
					message: "There's been an error. Please try again later.",
				});
			}

			// new instance of mailersend
			const mailerSend = new MailerSend({
				apiKey: import.meta.env.MAILERSEND_TOKEN,
			});
			const sentFrom = new Sender(Business.email, Business.nameLong);

			// set personalization variables
			const leadSubject = `New Lead from thoroffroadtx.com - ${input.name}`;
			const leadRecipients = [new Recipient(Business.email, Business.nameLong)];
			const leadBcc = [new Recipient("erik@eriksolsen.com", "Erik Olsen")];
			const leadReplyTo = new Sender(input.email, input.name);
			const leadPersonalization = [
				{
					email: Business.email,
					data: {
						name: input.name,
						email: input.email,
						phone: input.phone,
						message: input.message,
						path: input.path,
						year: input.year,
						make: input.make,
						model: input.model,
						marketing: input.marketing
					},
				},
			];
			const leadParams = new EmailParams().setFrom(sentFrom).setTo(leadRecipients).setBcc(leadBcc).setReplyTo(leadReplyTo).setSubject(leadSubject).setPersonalization(leadPersonalization).setTemplateId("jy7zpl9m6r0g5vx6");

			// send the contact email
			try {
				await mailerSend.email.send(leadParams);
			} catch (error) {
				console.error(error);
			}

			const thanksSubject = `Thanks ${input.name}, We've Received Your Message!`;
			const thanksRecipients = [new Recipient(input.email, input.name)];
			const thanksReplyTo = new Sender(Business.email, Business.nameLong);
			const thanksPersonalization = [
				{
					email: input.email,
					data: {
						name: input.name
					}
				}
			]
			const thanksParams = new EmailParams().setFrom(sentFrom).setTo(thanksRecipients).setReplyTo(thanksReplyTo).setSubject(thanksSubject).setPersonalization(thanksPersonalization).setTemplateId("0r83ql3x5dzlzw1j");

			// send the thanks email
			try {
				await mailerSend.email.send(thanksParams);
			} catch (error) {
				console.error(error);
			}
		}
	})
}