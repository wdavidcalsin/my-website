import { Fields } from '@/types';
import Link from 'next/link';

interface IProps {
    blogPost: Fields;
}

const ListBlogPost: React.FC<IProps> = ({ blogPost }) => {
    const { slug, title, body } = blogPost;

    return (
        <div className="bg-red-500">
            <h2>{title}</h2>
            <Link href={`/blog/${slug}`}>{title}</Link>
        </div>
    );
};

export default ListBlogPost;
