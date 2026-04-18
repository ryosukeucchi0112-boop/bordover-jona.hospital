import "./styles.css";
<>
  <img src="/symbol.png" alt="病院ロゴ" className="brand-logo" />
  <img src="/doctor.png" alt="院長写真" className="doctor-image" />
</>;

type NewsItem = {
  date: string;
  category: string;
  title: string;
  isNew: boolean;
};

const newsItems: NewsItem[] = [
  {
    date: "2026.04.12",
    category: "重要",
    title:
      "過去診療記録の大規模整理作業実施のお知らせ（一部カルテの閲覧制限について）",
    isNew: true,
  },
  {
    date: "2026.04.10",
    category: "お知らせ",
    title: "ゴールデンウィーク期間中の診療体制について",
    isNew: true,
  },
  {
    date: "2026.04.05",
    category: "お知らせ",
    title: "地下1階 検査室の一時閉鎖のお知らせ（4月15日〜5月末予定）",
    isNew: false,
  },
  {
    date: "2026.03.28",
    category: "採用情報",
    title: "2027年度初期臨床研修医募集要項を公開しました",
    isNew: false,
  },
];

const departments: string[] = [
  "内科",
  "外科",
  "整形外科",
  "小児科",
  "皮膚科",
  "脳神経外科",
];

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-top">
          <div className="brand">
            <div className="brand-mark">
              <img src="symbol.png" alt="病院ロゴ" className="brand-logo" />
            </div>
            <div>
              <p className="brand-sub">JONAN MEMORIAL HOSPITAL</p>
              <h1 className="brand-title">城南記念総合病院</h1>
            </div>
          </div>

          <div className="header-actions">
            <a href="#access" className="header-link">
              アクセス
            </a>
            <a href="#contact" className="header-link">
              お問い合わせ
            </a>
            <a href="#news" className="header-link strong">
              お知らせ
            </a>
          </div>
        </div>

        <div className="container header-bottom">
          <nav className="main-nav">
            <a href="#about">病院紹介</a>
            <a href="#message">院長挨拶</a>
            <a href="#departments">診療科</a>
            <a href="#news">お知らせ</a>
            <a href="#hours">外来案内</a>
            <a href="#access">交通案内</a>
          </nav>

          <form className="search-box" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="サイト内検索"
              aria-label="サイト内検索"
            />
            <button type="submit">検索</button>
          </form>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">地域とともに歩む総合医療</p>
              <h2 className="hero-title">
                安心と信頼の医療を、
                <br />
                毎日のすぐそばに。
              </h2>
              <p className="hero-text">
                城南記念総合病院は、地域の皆さまに寄り添う総合病院として、
                救急医療から専門外来まで幅広く対応しています。
                患者さま一人ひとりに誠実で丁寧な医療を提供します。
              </p>

              <div className="hero-buttons">
                <a href="#hours" className="button primary">
                  外来受付時間を見る
                </a>
                <a href="#departments" className="button secondary">
                  診療科一覧
                </a>
              </div>
            </div>

            <div className="hero-card">
              <img src="/hospital.png" alt="病院外観" className="hero-image" />
              <div className="hero-card-inner">
                <p className="hero-card-label">本日の外来案内</p>
                <div className="hero-card-row">
                  <span>午前</span>
                  <strong>8:30 - 11:30</strong>
                </div>
                <div className="hero-card-row">
                  <span>午後</span>
                  <strong>13:30 - 16:30</strong>
                </div>
                <div className="hero-note">
                  ※ 診療科により受付時間が異なる場合があります
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="message" className="section">
          <div className="container director-section">
            <div className="director-image-wrap">
              <img src="doctor.png" alt="院長写真" className="director-image" />
            </div>

            <div className="director-content">
              <p className="section-label">DIRECTOR MESSAGE</p>
              <h3 className="section-title">院長挨拶</h3>
              <p className="director-name">院長　黒崎 恒一郎</p>

              <p className="director-text">
                <p>
                  {" "}
                  城南記念総合病院のホームページをご覧いただき、誠にありがとうございます。{" "}
                </p>
                <p>
                  {" "}
                  当院は平成6年、外科部長の藍沢晋作と共に「地域に根ざした医療を届けたい」という
                  志のもと開院いたしました。以来30年以上にわたり、地域の皆様の健康を支える
                  総合病院として、医療サービスの提供に努めてまいりました。
                  「患者様第一」の理念のもと、質の高い医療と温かい看護を心がけております。{" "}
                </p>
                <p>
                  {" "}
                  近年の医療技術の進歩は目覚ましく、当院でも最新の医療機器の導入や
                  専門スタッフの育成に力を入れております。これからも地域医療の中核として、
                  皆様に信頼される病院であり続けるよう、職員一同努力してまいります。{" "}
                </p>
              </p>
            </div>
          </div>
        </section>

        <section id="news" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-label">NEWS</p>
                <h3 className="section-title">お知らせ</h3>
              </div>
              <a
                href="/"
                className="section-link"
                onClick={(e) => e.preventDefault()}
              >
                一覧を見る
              </a>
            </div>

            <div className="news-list">
              {newsItems.map((item, index) => (
                <article key={index} className="news-item">
                  <div className="news-meta">
                    <time>{item.date}</time>
                    <span className="news-category">{item.category}</span>
                    {item.isNew && <span className="news-new">NEW</span>}
                  </div>
                  <a
                    href="/"
                    className="news-title"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.title}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="departments" className="section alt">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-label">DEPARTMENTS</p>
                <h3 className="section-title">診療科のご案内</h3>
              </div>
            </div>

            <div className="departments-grid">
              {departments.map((dept) => (
                <div key={dept} className="dept-card">
                  <h4>{dept}</h4>
                  <p>
                    専門医による丁寧な診療体制で、地域の皆さまの健康を支えます。
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hours" className="section">
          <div className="container info-grid">
            <div className="info-card">
              <p className="section-label">OUTPATIENT</p>
              <h3 className="section-title small">外来受付時間</h3>
              <dl className="info-list">
                <div>
                  <dt>平日</dt>
                  <dd>8:30 - 11:30 / 13:30 - 16:30</dd>
                </div>
                <div>
                  <dt>土曜</dt>
                  <dd>8:30 - 11:30</dd>
                </div>
                <div>
                  <dt>休診</dt>
                  <dd>日曜・祝日</dd>
                </div>
              </dl>
            </div>

            <div id="access" className="info-card">
              <p className="section-label">ACCESS</p>
              <h3 className="section-title small">交通案内</h3>
              <p className="info-text">
                〒430-0000 静岡県浜松市中央区城南1-8-12
                <br />
                JR浜松駅よりバス約12分
                <br />
                来院者用駐車場あり（120台）
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-title">城南記念総合病院</p>
            <p className="footer-text">
              〒430-0000 静岡県浜松市中央区城南1-8-12
            </p>
          </div>

          <div className="footer-contact">
            <p>TEL 053-000-1234</p>
            <p>受付時間 8:30 - 17:00</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
