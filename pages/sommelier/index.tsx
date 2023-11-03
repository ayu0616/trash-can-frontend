import Button from "@/components/button/Button";
import ButtonBox from "@/components/button/ButtonBox";
import Checkbox from "@/components/checkbox/CheckBox";
import Layout from "@/components/layout/Layout";
import MainContent from "@/components/layout/MainContent";
import PageTitle from "@/components/PageTitle";
import Radio from "@/components/radio/Radio";
import RadioContainer from "@/components/radio/RadioContainer";
import pageData from "@/data/page";
import { baseUrl } from "@/data/url";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const { title, description } = pageData.sommelier;

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

const gramOption = [
    { label: "大", value: 4 },
    { label: "中", value: 3 },
    { label: "小", value: 2 },
];

const Page = () => {
    const router = useRouter();

    const [gram, setGram] = useState(gramOption[1].value);

    const generate = () => {
        const url = new URL("/sommelier/generated", location.origin);
        initOption.forEach((o) => url.searchParams.append(o.key, o.value.toString()));
        url.searchParams.append("gram_n", gram.toString());
        router.push(url.toString());
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={`${baseUrl}/sommelier`} />
                <meta property="og:image" content={`${baseUrl}/ボジョレーサムネ.jpg`} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="はっさくのゴミ箱" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@hassaku_0616" />
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
                    <div className="grow grid gap-6 place-content-center">
                        {/* <h3 className="text-lg text-center">設定</h3> */}
                        <div className="flex flex-col items-center gap-2">
                            <p>【基本設定】</p>
                            <div className="flex gap-4 flex-wrap justify-center items-center">
                                {initOption.map((o, i) => {
                                    return (
                                        <Checkbox
                                            key={i}
                                            color="rose"
                                            onChange={(prev: boolean) => {
                                                o.value = !prev;
                                            }}
                                            checked={o.value}
                                        >
                                            {o.name}
                                        </Checkbox>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p>【文脈】</p>
                            <RadioContainer className="flex gap-4 flex-wrap justify-center items-center" value={gram} onChange={(nv) => setGram(nv as number)}>
                                {gramOption.map(({ label, value }, i) => (
                                    <Radio color="rose" key={i} value={value}>
                                        {label}
                                    </Radio>
                                ))}
                            </RadioContainer>
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
