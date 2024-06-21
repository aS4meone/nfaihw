import Head from 'next/head';
import Chat from './components/Chat';


const Home = () => {
    return (
        <div>
            <Head>
                <title>Chat Interface</title>
                <meta name="description" content="Chat with AI" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    Chat with AI
                </h1>
                <Chat />
            </main>
        </div>
    );
};

export default Home;
