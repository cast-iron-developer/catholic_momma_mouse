import { supabase } from '$lib/utils/supaBaseClient';

export async function load() {
	const { data } = await supabase.from('posts').select();

	return {
		posts: data ?? []
	};
}
