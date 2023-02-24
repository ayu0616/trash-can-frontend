type PageData = {
    title: string;
    description: string;
    link: string;
};

const pageData: PageData[] = [
    {
        title: "ボジョレーヌーボーエセソムリエ生成器",
        description:
            "ボジョレーヌーボーのキャッチコピーを学習したモデルがエセソムリエのセリフを生成します。複数の設定があるので、組み合わせて楽しんでください！",
        link: "/sommelier",
    },
    {
        title: "心理テスト",
        description:
            "ネットに転がっていた心理テストを学習したモデルが、あなたの心理を占います。デタラメのように感じますが、バーナム効果により全員に当てはまるものになっています！",
        link: "/psychological_test",
    },
    {
        title: "コピペ改変ツール",
        description: "ネットで有名なコピペを自分好みに改変することが出来ます。",
        link: "/copy_paste",
    },
];

export default pageData;
