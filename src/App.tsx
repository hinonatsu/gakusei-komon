import {
  CONTACT_LINKS,
  SERVICE_NAME,
  deliverables,
  expressionExamples,
  fitList,
  members,
  navItems,
  painCards,
  plans,
  processSteps,
  themes,
  values,
} from "./content";

function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {lead ? <p>{lead}</p> : null}
    </div>
  );
}

function CtaButtons() {
  return (
    <div className="cta-row">
      <a className="button button-primary" href={CONTACT_LINKS.calendly}>
        15分だけ相談する
      </a>
      <a className="button button-secondary" href="#value">
        サービス内容を見る
      </a>
    </div>
  );
}

export function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${SERVICE_NAME}の先頭へ`}>
          {SERVICE_NAME}
        </a>
        <nav className="nav" aria-label="主要ナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-inner">
            <p className="eyebrow">学生の本音を、事業に使える言葉へ。</p>
            <h1 id="hero-title">
              <span>若者からの“率直な反応”を、</span>
              <span>企業が使える“改善案”に変える。</span>
            </h1>
            <p className="hero-copy">
              東大・UC Berkeley・ロンドン大学の学生3人が、採用・SNS・新規事業・若者向け施策を学生目線でレビューし、伝わり方のズレを一緒に壁打ちします。
            </p>
            <CtaButtons />
            <p className="hero-note">
              採用ページ、Wantedly、SNS、LP、商品企画、イベント企画などに対応。
            </p>
          </div>
        </section>

        <section className="section problem" id="problem">
          <div className="container two-column">
            <SectionHeading title="企業の言葉は、学生にそのまま届いていないかもしれません。" />
            <div className="prose">
              <p>
                社長や採用担当者にとっては自然な言葉でも、学生から見ると違って見えることがあります。
                「裁量権があります」は「放置されそう」に、「成長環境です」は「きつそう」に、「アットホームな職場です」は「内輪感が強そう」に見えることもあります。
              </p>
              <p>
                私たちは、そうした若者から見た第一印象や違和感を率直に伝え、企業側が使える改善案に変換します。
              </p>
            </div>
          </div>
          <div className="container compact-grid">
            {painCards.map((item) => (
              <article className="quiet-panel" key={item}>
                <span>{item}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="value">
          <div className="container">
            <SectionHeading
              eyebrow="特徴"
              title="学生の本音と、知的な壁打ちを同時に。"
            />
            <div className="value-grid">
              {values.map((value) => (
                <article className="line-card" key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-ruled" id="themes">
          <div className="container">
            <SectionHeading title="採用だけでなく、若者に届けたいあらゆるテーマに対応します。" />
            <ul className="theme-list">
              {themes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="examples">
          <div className="container">
            <SectionHeading title="たとえば、こんなズレを見つけます。" />
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>企業側の表現</th>
                    <th>学生からの見え方</th>
                    <th>改善の方向性</th>
                  </tr>
                </thead>
                <tbody>
                  {expressionExamples.map((example) => (
                    <tr key={example.company}>
                      <td>{example.company}</td>
                      <td>{example.student}</td>
                      <td>{example.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section section-ink" id="process">
          <div className="container process-layout">
            <div>
              <SectionHeading
                eyebrow="流れ"
                title="90分で、伝わり方のズレを見つけます。"
              />
              <ul className="deliverables" aria-label="成果物">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <ol className="timeline">
              {processSteps.map((step) => (
                <li key={step.time}>
                  <span>{step.time}</span>
                  <p>{step.title}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="members">
          <div className="container">
            <SectionHeading
              eyebrow="メンバー"
              title="メンバー"
              lead="国内外の大学で学ぶ学生3人が、それぞれの視点から率直にレビューします。"
            />
            <div className="member-grid">
              {members.map((member) => (
                <article className="member-card" key={member.university}>
                  <div className="photo-placeholder" aria-hidden="true">
                    写真
                  </div>
                  <div>
                    <p className="member-school">{member.university}</p>
                    <h3>{member.name}</h3>
                  </div>
                  <dl>
                    <div>
                      <dt>専攻・関心領域</dt>
                      <dd>{member.focus}</dd>
                    </div>
                    <div>
                      <dt>一言プロフィール</dt>
                      <dd>{member.profile}</dd>
                    </div>
                    <div>
                      <dt>得意な視点</dt>
                      <dd>{member.strengths}</dd>
                    </div>
                    <div>
                      <dt>これまでの活動・実績</dt>
                      <dd>{member.achievements}</dd>
                    </div>
                    <div>
                      <dt>企業に対して提供できる視点</dt>
                      <dd>{member.companyView}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-ruled" id="pricing">
          <div className="container">
            <SectionHeading
              eyebrow="料金"
              title="まずは検証価格でご提供します。"
            />
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article className="price-card" key={plan.name}>
                  <div>
                    <h3>{plan.name}</h3>
                    <p className="plan-duration">{plan.duration}</p>
                  </div>
                  <p className="price">{plan.price}</p>
                  <p>{plan.description}</p>
                  <ul>
                    {plan.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="note">
              現在はサービス検証段階のため、内容や価格は相談可能です。
            </p>
          </div>
        </section>

        <section className="section" id="fit">
          <div className="container two-column">
            <SectionHeading title="こんな企業に向いています。" />
            <ul className="fit-list">
              {fitList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-inner">
            <SectionHeading title="まずは15分、課題が合うかだけ話しませんか。" />
            <p>
              無理な営業ではなく、まずは貴社の課題に対して学生目線が役立つかを確認できればと思っています。
            </p>
            <div className="cta-row">
              <a className="button button-primary" href={CONTACT_LINKS.googleForm}>
                相談する
              </a>
              <a className="button button-secondary" href={CONTACT_LINKS.email}>
                メールで問い合わせる
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a className="brand" href="#top">
            {SERVICE_NAME}
          </a>
          <p>学生目線の率直なレビューを、企業が使える改善案へ。</p>
        </div>
        <div>
          <a href="#contact">問い合わせ</a>
          <p>© {new Date().getFullYear()} {SERVICE_NAME}</p>
        </div>
      </footer>
    </>
  );
}
