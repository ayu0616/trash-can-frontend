type PageData = {
    title: string;
    description: string;
    link: string;
};

const pageData: { [key: string]: PageData } = {
    sommelier: {
        title: "ボジョレーヌーボー・エセソムリエ生成器",
        description:
            "ボジョレーヌーボーのキャッチコピーを学習したモデルがエセソムリエのセリフを生成します。複数の設定があるので、組み合わせて楽しんでください！",
        link: "/sommelier",
    },
    psychological_test: {
        title: "心理テスト",
        description:
            "ネットに転がっていた心理テストを学習したモデルが、あなたの心理を占います。デタラメのように感じますが、バーナム効果により全員に当てはまるものになっています！",
        link: "/psychological_test",
    },
    // copy_paste: {
    //     title: "コピペ改変ツール",
    //     description: "ネットで有名なコピペを自分好みに改変することが出来ます。",
    //     link: "/copy_paste",
    // },
};
export default pageData;
