import type { CSSProperties } from "react";

type Score = { type: number; value: number };

const typeNames: Record<number, string> = {
  1: "Reformer",
  2: "Helper",
  3: "Achiever",
  4: "Individualist",
  5: "Investigator",
  6: "Loyalist",
  7: "Enthusiast",
  8: "Challenger",
  9: "Peacemaker",
};

const people = [
  {
    name: "Dan",
    monogram: "DA",
    role: "The catalyst & connector",
    accent: "coral",
    types: "2 · 7 · 3",
    tagline: "Turns a quiet group chat into an actual evening.",
    intro:
      "Dan supplies much of the group’s visible energy: initiating plans, introducing people, keeping conversation moving, and making sure everyone feels included.",
    brings: [
      "Novelty, humor, and emotional engagement",
      "The quickest reach-out when the group goes quiet",
      "A strong instinct for inclusion and shared fun",
    ],
    watch: [
      "Overcommitting—or mistaking politeness for enthusiasm",
      "Steering through helpfulness when he feels anxious",
      "Dodging hard feelings with a joke or a new plan",
    ],
    scores: [
      { type: 2, value: 84 },
      { type: 7, value: 84 },
      { type: 3, value: 79 },
      { type: 1, value: 63 },
      { type: 8, value: 31 },
      { type: 4, value: 28 },
      { type: 9, value: 10 },
      { type: 5, value: 0 },
      { type: 6, value: 0 },
    ] as Score[],
    max: 100,
    unit: "%",
  },
  {
    name: "Alex",
    monogram: "AK",
    role: "The driver & strategist",
    accent: "blue",
    types: "3 · 5 · 6",
    tagline: "Turns ‘we should’ into a reservation and a calendar invite.",
    intro:
      "Alex brings direction, organization, and ambition. The strong Five and Six scores add analysis, skepticism, and risk-awareness to a classic Three drive.",
    brings: [
      "Concrete plans from vague ideas",
      "Quality, momentum, and thoughtful recommendations",
      "Attention to whether the friendship is actually maintained",
    ],
    watch: [
      "Treating friendship like a system to optimize",
      "Taking over logistics when others move slowly",
      "Solving feelings instead of sitting with them",
    ],
    scores: [
      { type: 3, value: 24 },
      { type: 5, value: 19 },
      { type: 6, value: 19 },
      { type: 7, value: 18 },
      { type: 1, value: 17 },
      { type: 4, value: 14 },
      { type: 9, value: 13 },
      { type: 2, value: 10 },
      { type: 8, value: 10 },
    ] as Score[],
    max: 25,
    unit: "",
  },
  {
    name: "Lily",
    monogram: "LL",
    role: "The analyst & standards keeper",
    accent: "violet",
    types: "5 · 1 · 4 · 6",
    tagline: "Finds the second-order consequence before dessert arrives.",
    intro:
      "Lily contributes intellectual depth, discernment, and honesty—valuing substance over social performance while retaining a strong feel for authenticity.",
    brings: [
      "Sharp pattern recognition and principled standards",
      "Serious one-on-one conversation",
      "Nuance, authenticity, and constructive skepticism",
    ],
    watch: [
      "Staying detached until everything makes sense",
      "Correcting when someone mainly wants empathy",
      "Withholding concerns, then delivering the full critique",
    ],
    scores: [
      { type: 5, value: 21 },
      { type: 1, value: 21 },
      { type: 4, value: 18 },
      { type: 6, value: 18 },
      { type: 8, value: 16 },
      { type: 2, value: 16 },
      { type: 9, value: 12 },
      { type: 3, value: 11 },
      { type: 7, value: 11 },
    ] as Score[],
    max: 25,
    unit: "",
  },
  {
    name: "Tina",
    monogram: "TH",
    role: "The stabilizer & quiet observer",
    accent: "sage",
    types: "5 · 6 · 9 · 3",
    tagline: "The calm center of gravity everyone quietly depends on.",
    intro:
      "Tina is the group’s naturally low-drama, accommodating presence: calm, loyal, observant, capable, and good at understanding everyone’s perspective.",
    brings: [
      "Continuity, steadiness, and loyalty",
      "A calm read of several points of view",
      "Competence without the need to advertise it",
    ],
    watch: [
      "Saying ‘I’m fine’ when she has a preference",
      "Withdrawing instead of raising a disagreement",
      "Letting small resentments quietly accumulate",
    ],
    scores: [
      { type: 5, value: 25 },
      { type: 6, value: 22 },
      { type: 9, value: 21 },
      { type: 3, value: 20 },
      { type: 1, value: 16 },
      { type: 2, value: 13 },
      { type: 4, value: 13 },
      { type: 7, value: 7 },
      { type: 8, value: 7 },
    ] as Score[],
    max: 25,
    unit: "",
  },
];

const pairings = [
  {
    people: "Dan × Alex",
    label: "The ignition switch",
    chemistry: "Plans, social opportunity, and momentum appear very quickly.",
    risk: "Escalation. Dan adds possibilities while Alex adds scope and standards; a simple dinner becomes an optimized mini-festival.",
    rule: "Dan generates options. Alex does not turn every option into a commitment.",
    color: "coral-blue",
  },
  {
    people: "Alex × Lily",
    label: "The thinking table",
    chemistry: "Mutual respect around intelligence, rigor, and high standards.",
    risk: "Lily’s critique can hit Alex’s competence sensitivity; Alex’s defense can feel like image management instead of curiosity.",
    rule: "Ask: ‘What do you think I’m missing?’ before arguing the case.",
    color: "blue-violet",
  },
  {
    people: "Alex × Tina",
    label: "Direction meets ballast",
    chemistry: "Alex provides momentum; Tina provides stability and perspective.",
    risk: "False consent. No objection is not the same as an actual preference.",
    rule: "Ask: ‘What would you choose if the decision were entirely yours?’",
    color: "blue-sage",
  },
  {
    people: "Dan × Lily",
    label: "Spark meets prism",
    chemistry: "Dan draws Lily out; Lily keeps Dan grounded and honest.",
    risk: "Dan can overwhelm with spontaneity; Lily’s coolness can register as rejection.",
    rule: "Dan leaves quiet un-fixed. Lily makes affection explicit.",
    color: "coral-violet",
  },
  {
    people: "Dan × Tina",
    label: "Energy meets ease",
    chemistry: "An easy pairing: activation balanced by calm.",
    risk: "Dan fills every silence while Tina continually adapts.",
    rule: "Dan leaves space. Tina makes real requests instead of subtle signals.",
    color: "coral-sage",
  },
  {
    people: "Lily × Tina",
    label: "The quiet room",
    chemistry: "Low-pressure, focused conversation with mutual respect for independence.",
    risk: "Inertia. Both wait, assume space is preferred, and accidentally let connection decay.",
    rule: "Alternate initiation—and move from analysis to one concrete action.",
    color: "violet-sage",
  },
];

const failureModes = [
  {
    n: "01",
    title: "Intellectual intimacy replaces emotional intimacy",
    body: "The group can discuss psychology, careers, and relationships in depth while still avoiding: ‘That hurt,’ ‘I miss you,’ or ‘I need more from this friendship.’ Understanding someone conceptually is not the same as making them feel understood.",
  },
  {
    n: "02",
    title: "Conflict gets processed everywhere but the right place",
    body: "Lily may analyze it. Tina may absorb it. Dan may reframe it. Alex may design a solution. None necessarily involves saying the uncomfortable thing directly to the person who needs to hear it.",
  },
  {
    n: "03",
    title: "Maintenance labor becomes invisible",
    body: "Dan carries social energy; Alex carries planning. Lily and Tina contribute presence, insight, and reliability—valuable labor that is simply less visible. Each side can end up feeling unrecognized.",
  },
  {
    n: "04",
    title: "The friendship gets over-optimized",
    body: "With all the Three, Five, and One energy, every restaurant, trip, or conversation can start feeling evaluated. Some mediocre evenings must be allowed to remain mediocre.",
  },
  {
    n: "05",
    title: "The silent 2–2 split",
    body: "Dan and Alex become the fast, outward-facing half; Lily and Tina become the reflective, slower half. One side feels held back. The other feels exhausted. The split does not need to become adversarial—but it needs to be named.",
  },
];

const fieldRules = [
  {
    tag: "INVITE",
    title: "Specific, with a clean exit",
    body: "Give the plan enough structure for momentum and enough freedom for autonomy.",
    quote: "Dinner Thursday at 7. I’m booking tomorrow. Genuine no-pressure opt-out.",
  },
  {
    tag: "DECIDE",
    title: "Everyone names one preference",
    body: "‘Anything is fine’ does not count unless it is genuinely true. This protects Tina from being steamrolled and gets Lily’s critique into the room before the decision.",
    quote: "One real preference each—then we choose.",
  },
  {
    tag: "REPAIR",
    title: "Give conflict space—and a deadline",
    body: "The Five-heavy members may need time. That is reasonable; unlimited withdrawal is not.",
    quote: "We don’t have to resolve this now, but let’s return to it within two days.",
  },
  {
    tag: "GATHER",
    title: "Choose a format that fits",
    body: "Small group. Defined activity. Unstructured time afterward. Plans made somewhat in advance. Novelty sometimes, not constantly.",
    quote: "Dinner + walk beats a giant open-ended party.",
  },
  {
    tag: "ROTATE",
    title: "Share ownership visibly",
    body: "Dan is not the permanent entertainer. Alex is not the permanent operations department. Lily and Tina periodically choose the activity and set its shape.",
    quote: "Whose turn is it to choose the pace?",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mandelbro home">
          <span className="brand-mark">4</span>
          <span>Mandelbro</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#cast">The four</a>
          <a href="#dynamics">Dynamics</a>
          <a href="#manual">Field manual</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A friendship, mapped</p>
          <h1>Four minds.<br /><em>One brilliant</em><br />little ecosystem.</h1>
          <p className="hero-intro">
            A field guide to the energy, momentum, discernment, and calm that
            make this group work—and the predictable ways it can get weird.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#cast">Meet the cast <span>↓</span></a>
            <a className="text-link" href="#manual">Skip to the useful part ↗</a>
          </div>
        </div>

        <div className="constellation" aria-label="The group: Dan, Alex, Lily, and Tina">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="person-orb orb-dan"><span>DA</span><small>energy</small></div>
          <div className="person-orb orb-alex"><span>AK</span><small>momentum</small></div>
          <div className="person-orb orb-lily"><span>LL</span><small>discernment</small></div>
          <div className="person-orb orb-tina"><span>TH</span><small>stability</small></div>
          <div className="center-note">a very competent<br />friend group</div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Group summary">
        <p><strong>HIGH SIGNAL:</strong> intelligence · competence · independence</p>
        <p><strong>LOW SIGNAL:</strong> appetite for open conflict</p>
        <p><strong>WILD CARD:</strong> Dan’s social rocket fuel</p>
      </section>

      <section className="section cast" id="cast">
        <div className="section-heading">
          <p className="kicker">01 / THE CAST</p>
          <h2>Everyone has a job.<br />Nobody was formally hired.</h2>
          <p>
            The group’s strengths are unusually well distributed. Open a card to
            see the full profile and score pattern.
          </p>
        </div>

        <div className="people-grid">
          {people.map((person) => (
            <article className={`person-card ${person.accent}`} key={person.name}>
              <div className="person-top">
                <span className="monogram">{person.monogram}</span>
                <span className="type-pill">{person.types}</span>
              </div>
              <p className="person-role">{person.role}</p>
              <h3>{person.name}</h3>
              <p className="person-tagline">“{person.tagline}”</p>
              <p className="person-intro">{person.intro}</p>

              <details>
                <summary>Open the dossier <span>＋</span></summary>
                <div className="dossier">
                  <div>
                    <h4>What they bring</h4>
                    <ul>{person.brings.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div>
                    <h4>Watch for</h4>
                    <ul>{person.watch.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div className="score-chart" aria-label={`${person.name}'s Enneagram scores`}>
                    <div className="chart-heading">
                      <h4>Score pattern</h4>
                      <span>{person.unit ? "Different test scale" : "RHETI score"}</span>
                    </div>
                    {person.scores.map((score) => (
                      <div className="score-row" key={score.type}>
                        <span className="score-label"><b>{score.type}</b> {typeNames[score.type]}</span>
                        <span className="score-track">
                          <span
                            className="score-fill"
                            style={{ "--score": `${(score.value / person.max) * 100}%` } as CSSProperties}
                          />
                        </span>
                        <strong>{score.value}{person.unit}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>

        <p className="scale-note">
          <span>ⓘ</span> Dan took a different assessment, so his percentages should
          not be compared numerically with the three RHETI score sets. Rankings and
          broad patterns remain useful.
        </p>
      </section>

      <section className="recipe-section" id="dynamics">
        <div className="section recipe-inner">
          <div className="section-heading light">
            <p className="kicker">02 / THE CHEMISTRY</p>
            <h2>The group recipe</h2>
            <p>Activation, planning, judgment, and emotional regulation—each supplied by a different person.</p>
          </div>
          <div className="role-equation" aria-label="Group role equation">
            <div className="role-block coral"><span>Dan</span><strong>creates<br />energy</strong></div>
            <i>+</i>
            <div className="role-block blue"><span>Alex</span><strong>creates<br />momentum</strong></div>
            <i>+</i>
            <div className="role-block violet"><span>Lily</span><strong>creates quality<br />control</strong></div>
            <i>+</i>
            <div className="role-block sage"><span>Tina</span><strong>creates<br />stability</strong></div>
          </div>
          <div className="recipe-warning">
            <span className="warning-mark">!</span>
            <div>
              <p className="warning-label">THE TEMPO TRAP</p>
              <h3>When the fast half sets the pace, the quiet half can become passengers.</h3>
            </div>
            <p>Agreement can look exactly like depletion—right up until it becomes a cancellation.</p>
          </div>
        </div>
      </section>

      <section className="section cycle-section">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">THE PREDICTABLE LOOP</p>
            <h2>How a plan becomes<br />a tiny diplomatic incident.</h2>
          </div>
          <p>The core risk is not bad intent. It’s speed, false consent, and everyone interpreting silence through their own needs.</p>
        </div>
        <ol className="cycle-list">
          <li className="coral"><span>01</span><b>Dan</b><p>proposes something enthusiastically</p></li>
          <li className="blue"><span>02</span><b>Alex</b><p>turns it into a concrete, ambitious plan</p></li>
          <li className="violet"><span>03</span><b>Lily</b><p>privately questions whether it is worthwhile</p></li>
          <li className="sage"><span>04</span><b>Tina</b><p>says she is flexible</p></li>
          <li className="dark"><span>05</span><b>Dan + Alex</b><p>assume everyone is fully committed</p></li>
          <li className="cream"><span>06</span><b>Lily or Tina</b><p>withdraws, cancels, or contributes minimally</p></li>
        </ol>
        <div className="aftermath">
          <div><span className="dot coral-dot" /><strong>Dan feels unwanted.</strong></div>
          <div><span className="dot blue-dot" /><strong>Alex feels others are unreliable.</strong></div>
          <div><span className="dot violet-dot" /><strong>Lily feels pressured.</strong></div>
          <div><span className="dot sage-dot" /><strong>Tina feels nobody actually asked.</strong></div>
        </div>
      </section>

      <section className="pairings-section">
        <div className="section">
          <div className="section-heading">
            <p className="kicker">03 / ONE-ON-ONE</p>
            <h2>Six pairings.<br />Six operating manuals.</h2>
          </div>
          <div className="pairings-grid">
            {pairings.map((pair) => (
              <details className={`pairing-card ${pair.color}`} key={pair.people}>
                <summary>
                  <span>
                    <small>{pair.label}</small>
                    <strong>{pair.people}</strong>
                  </span>
                  <b>↘</b>
                </summary>
                <div className="pair-body">
                  <p><em>Works because</em>{pair.chemistry}</p>
                  <p><em>Gets weird when</em>{pair.risk}</p>
                  <blockquote>Best rule: {pair.rule}</blockquote>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section failure-section">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">04 / THE GLITCHES</p>
            <h2>Five ways this<br />excellent system fails.</h2>
          </div>
          <p>No villains here. Just four smart people using their best coping strategies at the same time.</p>
        </div>
        <div className="failure-list">
          {failureModes.map((mode) => (
            <article key={mode.n}>
              <span>{mode.n}</span>
              <h3>{mode.title}</h3>
              <p>{mode.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="manual-section" id="manual">
        <div className="section">
          <div className="manual-title">
            <p className="kicker">05 / THE FIELD MANUAL</p>
            <h2>Less pressure.<br /><em>More signal.</em></h2>
            <p>The broad prescription: Dan and Alex create less pressure; Lily and Tina create more visible engagement.</p>
          </div>
          <div className="rules-grid">
            {fieldRules.map((rule) => (
              <article className="rule-card" key={rule.tag}>
                <span>{rule.tag}</span>
                <h3>{rule.title}</h3>
                <p>{rule.body}</p>
                <blockquote>“{rule.quote}”</blockquote>
              </article>
            ))}
          </div>

          <div className="appreciation">
            <div>
              <p className="kicker">THE RIGHT SIGNAL, DELIVERED CLEARLY</p>
              <h2>Say the quiet part out loud.</h2>
            </div>
            <div className="appreciation-lines">
              <p className="coral"><b>Dan</b><span>“I enjoy being around you. Thank you for bringing us together.”</span></p>
              <p className="blue"><b>Alex</b><span>“Your effort materially improved this.”</span></p>
              <p className="violet"><b>Lily</b><span>“Your perspective changed how I saw it.”</span></p>
              <p className="sage"><b>Tina</b><span>“Your presence makes us steadier—and I want your actual opinion.”</span></p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-big">Keep the group chat alive.</div>
        <div className="footer-bottom">
          <p>Made for Dan, Alex, Lily & Tina <span>✦</span> July 2026</p>
          <p className="disclaimer">A playful reflection based on self-reported Enneagram results—not a diagnosis, destiny, or substitute for asking what someone actually wants.</p>
        </div>
      </footer>
    </main>
  );
}
