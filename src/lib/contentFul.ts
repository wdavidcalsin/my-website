import { createClient } from 'contentful';

if (!process.env.CONTENTFUL_SPACE_ID) {
    throw new Error('Contentful space ID need to be provided.');
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
    throw new Error('Contentful access token need to be provided.');
}

export const clientContentFul = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});
