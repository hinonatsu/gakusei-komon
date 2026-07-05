import {
  CONTACT_LINKS,
  SESSION_NAME,
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
        相談できることを見る
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
            <p className="eyebrow">学生の感覚を、事業に使える言葉へ。</p>
            <h1 id="hero-title">
              <span>学生目線の率直な感想を、</span>
              <span>事業に使える改善案まで。</span>
            </h1>
            <p className="hero-copy">
              {SESSION_NAME}では、UC Berkeley・ロンドン大学・東京大学の現役学生3人が、学生採用・インターン・若者向けサービスを本音でレビューします。新規事業、採用施策、学生との接点づくり、社長の雑談相手まで90分で壁打ちできます。
            </p>
            <CtaButtons />
            <p className="hero-note">
              固定メニューではありません。若者にどう見えるかを知りたい、ただ学生と話したい、という相談から始められます。
            </p>
          </div>
        </section>

        <section className="section section-ruled member-feature" id="members">
          <div className="container">
            <SectionHeading
              eyebrow="メンバー"
              title="この3人と話せること自体が、サービスの価値です。"
              lead="海外大生、技術・事業開発に取り組む学生、研究と起業の両方で動く学生。それぞれの経験を持つ3人が、普通の若者としての感覚と、事業に使える論点の両方を伝えます。"
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
                    {member.focus ? (
                      <div>
                        <dt>専攻・関心領域</dt>
                        <dd>{member.focus}</dd>
                      </div>
                    ) : null}
                    <div>
                      <dt>一言プロフィール</dt>
                      <dd>{member.profile}</dd>
                    </div>
                    {member.career.length > 0 ? (
                      <div>
                        <dt>経歴</dt>
                        <dd>
                          <ul className="member-detail-list">
                            {member.career.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    ) : null}
                    {member.strengths ? (
                      <div>
                        <dt>得意な視点</dt>
                        <dd>{member.strengths}</dd>
                      </div>
                    ) : null}
                    {member.achievements.length > 0 ? (
                      <div>
                        <dt>実績</dt>
                        <dd>
                          <ul className="member-detail-list">
                            {member.achievements.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    ) : null}
                    {member.companyView ? (
                      <div>
                        <dt>企業に対して提供できる視点</dt>
                        <dd>{member.companyView}</dd>
                      </div>
                    ) : null}
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section problem" id="problem">
          <div className="container two-column">
            <SectionHeading title="若者に聞けばいい、で終わらせません。" />
            <div className="prose">
              <p>
                学生の本音は大事です。ただ、「面白いです」「ちょっと微妙です」だけでは、事業や採用の次の一手にはつながりにくいことがあります。
              </p>
              <p>
                私たちは、学生目線の率直な感想や感覚をそのまま伝えたうえで、なぜそう感じるのか、企業側はどこを直せるのか、次に何を試すべきかまで一緒に整理します。
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
              title="感想で終わらない、事業に使える学生顧問。"
              lead="新規事業の壁打ち、採用応募を増やす施策、学生との接点づくり、あるいは普通の雑談まで。テーマに合わせて、学生の感覚と事業の論点をつなぎます。"
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
            <SectionHeading title="決まった相談でなくても大丈夫です。" />
            <ul className="theme-list">
              {themes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="examples">
          <div className="container">
            <SectionHeading title="たとえば、こんな議論ができます。" />
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>相談テーマ</th>
                    <th>学生からの反応</th>
                    <th>90分で整理すること</th>
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
                title="90分で、感想から次の打ち手まで議論します。"
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

        <section className="section section-ruled" id="pricing">
          <div className="container">
            <SectionHeading
              eyebrow="料金"
              title="学生リアルインサイト相談会"
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
              学生採用、インターン募集、若者向けサービス、新規事業、雑談まで、相談内容に合わせて90分の使い方を調整します。
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
            <SectionHeading title="まずは15分、どんな話ができそうかだけ話しませんか。" />
            <p>
              新規事業、採用、学生紹介、雑談。まだ相談内容が固まっていなくても大丈夫です。貴社にとって学生顧問が役立つ場面を一緒に確認できればと思っています。
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
          <p>学生の率直な感覚を、事業に使える改善案へ。</p>
        </div>
        <div>
          <a href="#contact">問い合わせ</a>
          <p>© {new Date().getFullYear()} {SERVICE_NAME}</p>
        </div>
      </footer>
    </>
  );
}
