import Head from 'next/head';

import BlogPostCard from '../components/BlogPostCard';
import { blogPosts } from '../content/posts';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Vamshi Krishna Alladi | Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="mx-auto my-20 text-gray-700">
                <header className="">
                    <h1 className="text-7xl font-light text-center text-blue-500">
                        Welcome to my mind palace
                    </h1>
                    <p className="mx-auto my-16 text-2xl font-normal italic text-center">
                        Here you may come across the
                        {' '}
                        <span className="text-green-500 px-1">Great Hall of Wisdom</span>
                        {', the '}
                        <span className="text-pink-500 px-1">Armory of Obseravations</span>
                        {', the '}
                        <span className="text-purple-500 px-1">Courtyard of Rants</span>
                        {', the '}
                        <span className="text-yellow-500 px-1">Dovecotes for thoughts</span>
                        {', the '}
                        <span className="text-red-500 px-1">Galleries of Pet Projects</span>
                        , and so much more.
                    </p>
                </header>
            </div>

            <div className="mx-auto space-y-10">
                { blogPosts.map((post) => (<BlogPostCard key={post.slug} {...post} />))}
            </div>
        </div>
    );
}
