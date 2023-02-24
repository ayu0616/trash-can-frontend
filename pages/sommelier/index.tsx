import Button from "@/components/button/Button";
import ButtonBox from "@/components/button/ButtonBox";
import Checkbox from "@/components/checkbox/CheckBox";
import Layout from "@/components/layout/Layout";
import MainContent from "@/components/layout/MainContent";
import PageTitle from "@/components/PageTitle";
import Head from "next/head";
import { useRouter } from "next/router";

const title = "ボジョレーヌーボー・エセソムリエ生成器";

const Page = () => {
    const router = useRouter();

    const generate = () => {
        const url = new URL("/sommelier/generated", location.href);
        initOption.forEach((o) => url.searchParams.append(o.key, o.value.toString()));
        router.push(url.toString());
    };

    const initOption = [
        {
            name: "ぐちゃぐちゃ",
            key: "chaos",
            value: false,
        },
        {
            name: "ランダム年数",
            key: "shuffle_year",
            value: false,
        },
    ];

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Layout>
                <div className="p-6">
                    <PageTitle>
                        {title.split("・").map((t, i) => {
                            return (
                                <span className="inline-block" key={i}>
                                    {t}
                                </span>
                            );
                        })}
                    </PageTitle>
                </div>
                <MainContent>
                    <div className="grow grid gap-4 place-content-center">
                        <h3 className="text-lg text-center">設定</h3>
                        <div className="flex gap-4 flex-wrap justify-center">
                            {initOption.map((o, i) => {
                                return (
                                    <Checkbox
                                        key={i}
                                        color="rose"
                                        onChange={(prev: boolean) => {
                                            o.value = !prev;
                                        }}
                                    >
                                        {o.name}
                                    </Checkbox>
                                );
                            })}
                        </div>
                    </div>
                </MainContent>
                <div className="px-3 py-6">
                    <ButtonBox>
                        <Button onClick={generate} color="rose">
                            生成する！
                        </Button>
                    </ButtonBox>
                </div>
            </Layout>
        </>
    );
};

export default Page;
