import { supabase } from '$lib/utils/supaBaseClient';

export async function load() {
	const { data } = await supabase.from('blog_post').select();
	return {
		posts: data ?? []
	};
}
