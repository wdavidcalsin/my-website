import { clientContentFul } from '@/lib/contentFul';
import { Skeleton } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

// interface IProps {
//     response: Fields;
// }
export function formatDate(dateString: any, options: any) {
    const { format } = new Intl.DateTimeFormat('en-US', options);
    return format(new Date(dateString));
}

const BlogPost = ({ post, preview }: any) => {
    const router = useRouter();
    const { title, coverImage, author, date } = post.fields;
    // console.log(post.fields);

    return (
        <section className="section">
            <div className="container">
                <article className="prose mx-auto">
                    {router.isFallback ? (
                        <Skeleton />
                    ) : (
                        <>
                            <h2>{title}</h2>
                        </>
                    )}
                </article>
            </div>
        </section>
    );
};

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
    const cfClient = clientContentFul;

    const { slug } = params as { slug: string };

    const response = await cfClient.getEntries({
        content_type: 'blogPage-2',
        'fields.slug': slug,
    });

    if (!response?.items?.length) {
        return {
            redirect: {
                destination: '/blog',
                permanent: false,
            },
        };
    }

    return {
        props: {
            post: response?.items?.[0],
            preview,
            revalidate: 60,
        },
    };
};

export const getStaticPaths = async () => {
    const response = await clientContentFul.getEntries({ content_type: 'blogPage-2' });

    const paths = response.items.map((item) => ({
        params: { slug: item.fields.slug },
    }));

    return {
        paths,
        fallback: true,
    };
};

export default BlogPost;
