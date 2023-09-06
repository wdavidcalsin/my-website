import { Fields, Item } from '@/types';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface ICardPostProps {
    blogPost: Item;
}

const CardPost: React.FC<ICardPostProps> = ({ blogPost }) => {
    const {
        fields: { title, description, slug, image },
        sys: { createdAt, updatedAt },
    } = blogPost;

    return (
        <Stack
            spacing={'1rem'}
            paddingY="1.7rem"
            paddingX="1.5rem"
            bgColor={'hsla(0,0%,100%,.05)'}
            borderRadius=".7rem"
            transition={'all .3s'}
            _hover={{
                bgColor: 'rgba(256,256,256,.08)',
            }}
            href={`blog/${slug}`}
            as="a"
        >
            <Stack>
                <Heading fontSize={'1.2rem'} color="#ECD8D9" textTransform="capitalize">
                    {title}
                </Heading>
                <Text fontSize={'.9rem'} color="#9E9292">
                    Created: {new Date(createdAt).toDateString()}
                    {updatedAt !== createdAt && <>, Updated: {new Date(updatedAt).toDateString()}</>}
                </Text>
            </Stack>
            <Stack direction={'row'} spacing={6}>
                {image && (
                    <Box
                        flex={1}
                        shadow="sm"
                        style={{
                            borderRadius: '1rem',
                            overflow: 'hidden',
                        }}
                        height="auto"
                        width={'auto'}
                    >
                        <Image
                            src={`https:${image.fields.file.url}`}
                            loading={'lazy'}
                            width={300}
                            height={image.fields.file.details.image.height / 5}
                            alt="logo"
                        />
                    </Box>
                )}
                <Text width={'75%'} fontSize={'1rem'} lineHeight="1.75rem" color={'#C5B1B3'}>
                    {description}
                </Text>
            </Stack>
        </Stack>
    );
};

export default CardPost;
