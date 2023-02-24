import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <div className="flex flex-col h-[100svh] max-w-screen-lg mx-auto">
                <header className="px-3 py-4 border-b">
                    <h1 className="text-3xl font-bold">
                        <Link href="/">はっさくのゴミ箱</Link>
                    </h1>
                </header>
                <main className="flex-1 overflow-hidden">
                    <div className="flex flex-col h-full">{children}</div>
                </main>
            </div>
        </>
    );
};

export default Layout;
