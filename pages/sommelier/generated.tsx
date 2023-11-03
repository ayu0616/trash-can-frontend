import Button from "@/components/button/Button";
import ButtonBox from "@/components/button/ButtonBox";
import Layout from "@/components/layout/Layout";
import MainContent from "@/components/layout/MainContent";
import PageTitle from "@/components/PageTitle";
import { BACKEND_URL } from "@/util/constVars";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import { LineIcon, LineShareButton, TwitterIcon, TwitterShareButton } from "react-share";

const title = "ボジョレーヌーボー・エセソムリエ生成器";

const Page = (props: { sentences: string[] }) => {
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
                <Content sentences={props.sentences}></Content>
            </Layout>
        </>
    );
};

const Content = (props: { sentences: string[] }) => {
    const [cnt, setCnt] = useState(0);
    const sentence = useRef<HTMLParagraphElement>(null);

    let shareUrl = "";
    if (typeof window !== "undefined") {
        const domain = window.location.origin;
        shareUrl = new URL("sommelier", domain).toString();
    }

    const shareText = ["【今年のボジョレー・ヌーボー】", props.sentences[cnt], ""].join("\n");
    const hashTags = ["ボジョレーヌーボー", "ボジョレーヌーボーエセソムリエ生成器"];

    const fadeIn = () => {
        const mSec = 1000;
        sentence.current?.animate(
            [
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                },
            ],
            {
                duration: mSec,
                easing: "ease-in-out",
            }
        );
    };

    return (
        <>
            <MainContent>
                <p
                    className="text-xl h-full items-center w-full break-words flex flex-wrap text-center"
                    style={{ fontFamily: '"Shippori Mincho B1", serif' }}
                    ref={sentence}
                >
                    {props.sentences[cnt]}
                </p>
            </MainContent>
            <div className="px-3 p-2 flex justify-end gap-3 items-center">
                <p>SNSでシェアする：</p>
                <TwitterShareButton url={shareUrl} title={shareText} hashtags={hashTags}>
                    <TwitterIcon size={36} round={true}></TwitterIcon>
                </TwitterShareButton>
                <LineShareButton url={shareUrl} title={shareText}>
                    <LineIcon size={36} round={true}></LineIcon>
                </LineShareButton>
                {/* <FacebookShareButton url={shareUrl} quote={shareText}>
                    <FacebookIcon size={36} round={true}></FacebookIcon>
                </FacebookShareButton> */}
            </div>
            <div className="px-3 py-6">
                <ButtonBox>
                    <Button
                        onClick={() => {
                            setCnt((p) => p - 1);
                            fadeIn();
                        }}
                        disabled={cnt <= 0}
                        color="rose"
                    >
                        ←前のソムリエ
                    </Button>
                    <Button
                        onClick={() => {
                            fadeIn();
                            setCnt((p) => p + 1);
                        }}
                        disabled={cnt >= props.sentences.length - 1}
                        color="rose"
                    >
                        次のソムリエ→
                    </Button>
                </ButtonBox>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<{ sentences: string[] }> = async (context) => {
    const url = context.resolvedUrl.replace("/sommelier/generated", BACKEND_URL + "/sommelier");
    const sentences = await fetch(url).then((res) => res.json());
    return { props: { sentences } };
};

export default Page;
