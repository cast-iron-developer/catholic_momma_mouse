import { env } from '$env/dynamic/private';
import { createClient } from '@sanity/client';

export const projectId = env.PROJECT_ID;
export const dataSet = env.DATASET;
const client = createClient({
	projectId: projectId,
	dataset: dataSet,
	apiVersion: 'v2022-03-07',
	useCdn: false
});

export default client;
