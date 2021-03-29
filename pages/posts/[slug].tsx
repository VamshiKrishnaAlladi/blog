import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { blogPosts } from '../../content/posts';

interface BlogPostProps {
    title: string;
    date: string;
    content: string;
}

export default function BlogPost({ title, date, content }: BlogPostProps) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    {title}
                </h1>
                <h3>{date}</h3>
                <hr />
                {content}
            </main>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    // eslint-disable-next-line no-console
    console.log('getStaticProps slug', slug);

    return {
        props: blogPosts.find((post) => post.slug === slug),
    };
};

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: blogPosts.map((post) => ({
        params: {
            slug: post.slug,
        },
    })),
    fallback: false,
});
