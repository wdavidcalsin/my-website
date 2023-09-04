import { ListBlogPost } from '@/components';
import { clientContentFul } from '@/lib/contentFul';
import { IResponseContentFul } from '@/types';

export default function Blog(res: IResponseContentFul) {
    const { items } = res;

    return (
        <div>
            {items.map((post, index) => (
                <ListBlogPost key={index} blogPost={post.fields} />
            ))}
        </div>
    );
}

export const getStaticProps = async () => {
    const res = await clientContentFul.getEntries<IResponseContentFul>({ content_type: 'blogPage-2' });

    return {
        props: {
            ...res,
        },
    };
};
