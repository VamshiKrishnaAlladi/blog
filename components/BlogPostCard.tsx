import Link from 'next/link';

interface BlogPostCardProps {
    title: string;
    description: string;
    date: string;
    slug: string;
}

export default function BlogPostCard({ slug, title, date, description }: BlogPostCardProps) {
    return (
        <div className="border border-gray-200 rounded-lg p-8 shadow-md cursor-pointer transition duration-200 ease-in
            hover:shadow-lg hover:border-gray-300"
        >
            <Link href={`/posts/${slug}`}>
                <div>
                    <div className="grid grid-cols-1 mb-4 md:grid-cols-2">
                        <h2 className="mb-3 text-2xl md:mb-0 font-medium">{title}</h2>
                        <h3 className="mb-3 text-left  italic text-gray-500 md:mb-0 md:text-right">{date}</h3>
                    </div>
                    <h3 className="text-xl text-gray-600">{description}</h3>
                </div>
            </Link>
        </div>
    );
}
