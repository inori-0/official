const galleryCategories = [
    {
        id: "illustration",
        title: "Illustration"
    },
    {
        id: "collaboration",
        title: "Collaboration"
    },
    {
        id: "sd",
        title: "SD Collection"
    },
    {
        id: "anniversary",
        title: "Anniversary"
    },
    {
        id: "gift",
        title: "Gift"
    },
    {
        id: "other",
        title: "Other Works"
    },
    {
        id: "sketch",
        title: "Sketch"
    }
];

const galleryData = [
    {
        category: "anniversary",
        src: "images/gallery/gallery001.png",
        alt: "2025バースデーイラスト",
        title: "2025 Birthday",
        illustrator: "Illustrator：福山魚子様"
    },
    {
        category: "anniversary",
        src: "images/gallery/gallery002.png",
        alt: "活動3か月記念イラスト",
        title: "3 Month Anniversary",
        illustrator: "Illustrator：福山魚子様"
    },   

    {
        category: "illustration",
        src: "images/gallery/gallery003.png",
        alt: "パネル開け公開イラスト",
        title: "おいのり",
        illustrator: "Illustrator：うめみや様"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery004.png",
        alt: "パネル開け公開イラスト",
        title: "森の赤ずきん",
        illustrator: "Illustrator：杜埜もた様"
    },
    {
        category: "sketch",
        src: "images/gallery/gallery005.png",
        alt: "自作イラスト",
        title: "秋のおめかし",
        illustrator: "Illustrator：神無罪祈"
    },
    {
        category: "collaboration",
        src: "images/gallery/gallery006.png",
        alt: "自作イラスト",
        title: "＠電波みぃむ様",
        illustrator: "Illustrator：神無罪祈"
    },
 {
        category: "collaboration",
        src: "images/gallery/gallery008.png",
        alt: "ペアチャレンジ！",
        title: "＠電波みぃむ様",
        illustrator: "Illustrator：こけし様"
    },
     {
        category: "collaboration",
        src: "images/gallery/gallery018.png",
        alt: "ペアチャレンジ！",
        title: "＠電波みぃむ様",
        illustrator: "Illustrator：yotome様"
    },
    {
        category: "collaboration",
        src: "images/gallery/gallery009.png",
        alt: "＠青空あのこ様・羽山芦雪様・地蔵様",
        title: "valentine2026",
        illustrator: "Illustrator：杜埜もた様"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery011.png",
        alt: "ヌクモリティへようこそ",
        title: "ダイナー衣装",
        illustrator: "Illustrator：ちり紙様"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery010.png",
        alt: "パネル開け公開イラスト",
        title: "valentine2026",
        illustrator: "Illustrator：杜埜もた様"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery012.png",
        alt: "2026年賀イラスト",
        title: "あけましておめでとうございます",
        illustrator: "Illustrator：破戒いむ様"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery013.png",
        alt: "Halloween2025",
        title: "キョンシー衣装",
        illustrator: "Illustrator：辺土れい様"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery014.png",
        alt: "summer2025",
        title: "夏のワンピース衣装",
        illustrator: "Illustrator：辺土れい様"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery015.png",
        alt: "summer2025",
        title: "水着差分",
        illustrator: "Illustrator：辺土れい様"
    },
    {
        category: "collaboration",
        src: "images/gallery/gallery016.png",
        alt: "ペアチャレンジ！",
        title: "＠生き様チャンネル様",
        illustrator: "Illustrator：神無罪祈"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery017.png",
        alt: "パネル開け公開イラスト",
        title: "シールデコ！",
        illustrator: "Illustrator：神無罪祈"
    },
        {
        category: "collaboration",
        src: "images/gallery/gallery007.png",
        alt: "トリオチャレンジ！",
        title: "＠生き様チャンネル様・白煙様",
        illustrator: "Illustrator：ちり紙様"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery019.png",
        alt: "パネル開け公開イラスト",
        title: "merryChristmas2025",
        illustrator: "Illustrator：甜様"
    },
    {
        category: "collaboration",
        src: "images/gallery/gallery020.png",
        alt: "パネル開け公開イラスト",
        title: "＠緋ノ宮華漣様",
        illustrator: "Illustrator：安寧様"
    },
    {
        category: "gift",
        src: "images/gallery/gallery021.png",
        alt: "桐灰ハル様からプレゼント",
        title: "＠桐灰ハル様",
        illustrator: "Illustrator：？？様"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery022.png",
        alt: "お詫びイラスト",
        title: "詫び脱ぎ＠牛ビキニ",
        illustrator: "Illustrator：三月あかね様"
    },
    {
        category: "gift",
        src: "images/gallery/gallery023.png",
        alt: "wawa様からのプレゼント",
        title: "ギャンブルバニー",
        illustrator: "Illustrator：骸骨亥様"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery024.png",
        alt: "パネル開け公開イラスト",
        title: "レトロ風",
        illustrator: "Illustrator：甘森むっちゃ様"
    },
    {
        category: "gift",
        src: "images/gallery/gallery025.png",
        alt: "FA",
        title: "衣装案検討中のFA",
        illustrator: "Illustrator：梅宮様"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery026.png",
        alt: "パネル開け公開イラスト",
        title: "自作一枚絵",
        illustrator: "Illustrator：神無罪祈"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery027.png",
        alt: "パネル開け公開イラスト",
        title: "夕焼けと",
        illustrator: "Illustrator：鍋島照明様"
    },
    {
        category: "illustration",
        src: "images/gallery/gallery028.png",
        alt: "パネル開け公開イラスト",
        title: "ヤンデレ",
        illustrator: "Illustrator：たっぷり鈍器様"
    },
{
    category: "sd",
    src: "images/gallery/gallery029.png",
    alt: "パネル開け公開イラスト",
    title: "自作イラスト",
    illustrator: "Illustrator：神無罪祈"
},

];