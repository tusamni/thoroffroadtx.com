import type { APIRoute } from "astro";
import { Business } from "@/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export const POST: APIRoute = async ({ request, params, redirect, cookies }) => {
	// load form data
	const data = await request.formData();

	// if honeypot exists, end request
	// else process contact email
	if (data.get("zip")) {
		return redirect("/", 307);
	} else {
		// form variables
		const contactName = data.get("name");
		const contactEmail = data.get("email");
		const contactPhone = data.get("phone");
		const contactMessage = data.get("message");
		const contactPath = data.get("url");
		const contactYear = data.get("year");
		const contactMake = data.get("make");
		const contactModel = data.get("model");
		const contactMarketing = data.get("marketing")

		// subjects
		const leadSubject = `New Lead from thoroffroadtx.com - ${contactName}`;
		const thanksSubject = `Thanks ${contactName}, We've Received Your Message!`;

		// set personalization variables
		const leadPersonalization = [
			{
				email: Business.email,
				data: {
					name: contactName,
					email: contactEmail,
					phone: contactPhone,
					message: contactMessage,
					path: contactPath,
					year: contactYear,
					make: contactMake,
					model: contactModel,
					source: contactMarketing
				},
			},
		];

		// TEMPORARY
		// Removed ${contactModel} while I figure out a solution to deal with filtering
		// and the contact form conflict
		const thanksPersonalization = [
			{
				email: contactEmail,
				data: {
					name: contactName,
					...(contactMake && contactMake != "Other" && { vehicle: contactMake })
				}
			}
		]

		// new instance of mailersend
		const mailerSend = new MailerSend({
			apiKey: import.meta.env.MAILERSEND_TOKEN,
		});

		const bcc = [new Recipient("erik@eriksolsen.com", "Erik Olsen")];
		const sentFrom = new Sender(Business.email, Business.nameLong);
		const leadRecipients = [new Recipient(Business.email, Business.nameLong)];
		const thanksRecipients = [new Recipient(contactEmail, contactName)];
		const leadReplyTo = new Sender(contactEmail, contactName);
		const thanksReplyTo = new Sender(Business.email, Business.nameLong);

		// mailersend parameters
		const leadParams = new EmailParams().setFrom(sentFrom).setTo(leadRecipients).setReplyTo(leadReplyTo).setBcc(bcc).setSubject(leadSubject).setPersonalization(leadPersonalization).setTemplateId("jy7zpl9m6r0g5vx6");
		const thanksParams = new EmailParams().setFrom(sentFrom).setTo(thanksRecipients).setReplyTo(thanksReplyTo).setSubject(thanksSubject).setPersonalization(thanksPersonalization).setTemplateId("0r83ql3x5dzlzw1j");

		// send the contact email
		// try {
		// 	await mailerSend.email.send(leadParams);
		// } catch (error) {
		// 	console.error(error);
		// }
		// // send the thanks email
		// try {
		// 	await mailerSend.email.send(thanksParams);
		// } catch (error) {
		// 	console.error(error);
		// }

		return redirect("/contact/success/", 307);
	}
};
