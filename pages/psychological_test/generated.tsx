import Accordion from "@/components/accordion/Accordion";
import AccordionIcon from "@/components/accordion/AccordionIcon";
import AccordionItem from "@/components/accordion/AccordionItem";
import AccordionTitle from "@/components/accordion/AccordionTitle";
import Button from "@/components/button/Button";
import ButtonBox from "@/components/button/ButtonBox";
import Layout from "@/components/layout/Layout";
import MainContent from "@/components/layout/MainContent";
import PageTitle from "@/components/PageTitle";
import Lines from "@/components/text/Lines";
import { BACKEND_URL } from "@/util/constVars";
import sleep from "@/util/sleep";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";

const title = "心理テスト";

type TestData = {
    question: string;
    options: string[];
    result_summaries: string[];
    result_bodies: string[];
};

const Page = (props: { data: TestData[] }) => {
    const [cnt, setCnt] = useState(0);
    const { length } = props.data;

    const closeAll = async () => {
        const elems = document.querySelectorAll<HTMLElement>(".show > .accordion-title");
        elems.forEach((e) => e.click());
        if (elems.length > 0) {
            await sleep(500);
        }
    };

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Layout>
                <div className="px-6 py-4">
                    <PageTitle>{title}</PageTitle>
                </div>
                <MainContent>
                    <div className="border rounded-md p-3 mb-4">
                        <p className="font-bold mb-2">
                            質問 {cnt + 1}/{length}
                        </p>
                        <Lines className="text-sm">{props.data[cnt].question}</Lines>
                    </div>
                    <div>
                        {props.data[cnt].options.map((o, i) => (
                            <Accordion key={i}>
                                <AccordionTitle>
                                    <p>{i + 1}.</p>
                                    <h3 className="flex-1">{o}</h3>
                                    <AccordionIcon />
                                </AccordionTitle>
                                <AccordionItem>
                                    <div className="mb-3">
                                        結果は<span className="text-xl font-bold inline-block">{props.data[cnt].result_summaries[i]}</span>です。
                                    </div>
                                    <Lines className="text-sm">{props.data[cnt].result_bodies[i]}</Lines>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </MainContent>
                <div className="w-full px-3 mb-6 mt-3">
                    <ButtonBox>
                        <Button
                            onClick={async () => {
                                await closeAll();
                                setCnt((p) => p - 1);
                            }}
                            disabled={cnt <= 0}
                            color="blue"
                        >
                            ←前に戻る
                        </Button>
                        <Button
                            onClick={async () => {
                                await closeAll();
                                setCnt((p) => p + 1);
                            }}
                            disabled={cnt >= props.data.length - 1}
                            color="blue"
                        >
                            次に進む→
                        </Button>
                    </ButtonBox>
                </div>
            </Layout>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<{ data: TestData }> = async () => {
    const data = await fetch(BACKEND_URL + "/psychological_test").then((res) => res.json());
    return { props: { data } };
};

export default Page;
