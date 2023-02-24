import Card from "@/components/cards/Card";
import CardContainer from "@/components/cards/CardContainer";
import CardDescription from "@/components/cards/CardDescription";
import CardTitle from "@/components/cards/CardTitle";
import Layout from "@/components/layout/Layout";
import pageData from "@/data/page";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>はっさくのゴミ箱</title>
                <meta name="description" content="はっさくが作成したゴミを集めたサイトです。" />
            </Head>
            <Layout>
                <div className="h-[100%] bg-slate-100 py-3">
                    <CardContainer>
                        {pageData.map((d, i) => {
                            return (
                                <Link key={i} href={d.link}>
                                    <Card>
                                        <CardTitle>{d.title}</CardTitle>
                                        <CardDescription>{d.description}</CardDescription>
                                        <p className="text-end text-sm group-hover:underline group-active:underline">{"ページを開く >>"}</p>
                                    </Card>
                                </Link>
                            );
                        })}
                    </CardContainer>
                </div>
            </Layout>
        </>
    );
}
