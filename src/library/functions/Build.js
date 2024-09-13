import * as path from 'path';
import { supabaseService } from '@/library/supabase';

// create a build title from multiple fields
export async function getBuildTitle(id) {
	const result = await supabaseService.from("builds").select("*, makes (*), models (*)").eq("slug", id).maybeSingle();

	return `${build.data.year} ${build.data.makes.title} ${build.data.models.title}${build.data.trim ? ` ${build.data.trim}` : ``}`;
}

// get the build description for image alt tags and captions
export async function getBuildDescription(id) {
	// if format is true, expect a string
	const result = typeof id === "string" ? (await supabaseService.from("builds").select("*, make (title), model (title), builds_parts_installed (parts_installed_id (title))").eq("slug", formatBuildId(id)).maybeSingle()).data : id;

	if (!result.builds_parts_installed) {
		console.log(id)
	}

	return `${result.year} ${result.make.title} ${result.model.title}${result.trim ? ` ${result.trim}` : ``} in ${result.color} with `

	// ${result.builds_parts_installed.map((p, index) => {
	// 	return (index ? " " : "") + p["parts_installed_id"].title;
	// })}
}

// get the build slug from the image filename
function formatBuildId(id) {
	return path.dirname(id).replace("builds/", "")
}

// create the image file path from a build slug and image id
export function getBuildImage(path, number) {
	// add a single leading zero
	const filename = String(number).padStart(2, "0");

	return `builds/${path}/${filename}.jpg`;
}