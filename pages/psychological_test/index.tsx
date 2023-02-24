import Button from "@/components/button/Button";
import Layout from "@/components/layout/Layout";
import MainContent from "@/components/layout/MainContent";
import PageTitle from "@/components/PageTitle";
import Head from "next/head";
import { useRouter } from "next/router";

const title = "心理テスト";

const Page = () => {
    const router = useRouter();
    const generate = () => {
        router.push("/psychological_test/generated")
    };

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Layout>
                <div className="p-6">
                    <PageTitle>{title}</PageTitle>
                </div>
                <MainContent>
                    <div>下のボタンをクリックして心理テストを生成する</div>
                </MainContent>
                <div className="px-3 py-6">
                    <Button className="w-full" onClick={generate} color="blue">
                        生成する！
                    </Button>
                </div>
            </Layout>
        </>
    );
};

export default Page;
