import { supabaseService } from "@/library/supabase";

export async function getBuildTitle(id) {
	const build = await supabaseService.from("builds").select("*, makes (*), models (*)").eq("slug", id).maybeSingle();

	return `${build.data.year} ${build.data.makes.title} ${build.data.models.title}${build.data.trim ? ` ${build.data.trim}` : ``}`;
}

export async function getBuildDescription(id) {
	const build = await supabaseService.from("builds").select("*, makes (*), models (*)").eq("slug", id).single();

	return `${build.data.year} ${build.data.makes.title} ${build.data.models.title}${build.data.trim ? ` ${build.data.trim}` : ``} in ${build.data.color}`

	// with ${build.data.parts.map(
	// 	function (p, index) {
	// 		return (index ? " " : "") + p;
	// 	}
	// )}`;
}
