import Head from 'next/head';
import Link from 'next/link';

import { blogPosts } from '../content/posts';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Vamshi Krishna Alladi | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    My Blog!
                </h1>

                <div>
                    { blogPosts.map((post) => (
                        <div key={post.slug}>
                            <h2><Link href={`/posts/${post.slug}`}>{post.title}</Link></h2>
                            <h3>{post.date}</h3>
                            <h3>{post.description}</h3>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
