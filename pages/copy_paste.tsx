import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/PageTitle";
import Head from "next/head";

const title = "コピペ改変ツール";

const copyPaste = () => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Layout>
                <PageTitle>{title}</PageTitle>
            </Layout>
        </>
    );
};

export default copyPaste;
