import client from './contentfulService'

type PageParams = {
    slug?: string,
    contentType: string
}

const getQuery = (params: PageParams) => ({
    content_type: params.contentType,
    slug: params.slug
})

export const getData = async (params: PageParams) => {
    const query = getQuery(params)
    const data = await client.getEntries(query);
    return data
}