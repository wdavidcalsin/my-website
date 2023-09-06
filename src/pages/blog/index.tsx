import * as React from 'react';
import { CardPost, ListBlogPost, MetaHead } from '@/components';
import { clientContentFul } from '@/lib/contentFul';
import { MainContainer } from '@/sub-components';
import { IResponseContentFul } from '@/types';
import { useStoreShowNavbar } from '@/store';
import { Stack } from '@chakra-ui/react';

export default function Blog(res: IResponseContentFul) {
    const { setIsTransitionFalse } = useStoreShowNavbar((state) => state);

    React.useEffect(() => {
        setIsTransitionFalse();
    }, [setIsTransitionFalse]);

    const { items: posts } = res;

    // console.log(posts);

    return (
        <>
            <MetaHead title="Blog - Willian David Calsin" description="Blog - Willian David Calsin" />
            <div>
                <MainContainer paddingTop={'12rem'}>
                    <Stack spacing={'1.8rem'}>
                        {posts.map((post, index) => (
                            <CardPost key={index} blogPost={post} />
                        ))}
                    </Stack>
                </MainContainer>
            </div>
        </>
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
