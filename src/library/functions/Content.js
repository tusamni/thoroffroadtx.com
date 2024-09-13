import { supabaseService } from "@/library/supabase";

export async function getBuildTitle(id) {
	const build = await supabaseService.from("builds").select("*, makes (*), models (*)").eq("slug", id).maybeSingle();

	return `${build.data.year} ${build.data.makes.title} ${build.data.models.title}${build.data.trim ? ` ${build.data.trim}` : ``}`;
}