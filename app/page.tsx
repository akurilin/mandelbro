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
    role: "The convener & temperature-taker",
    accent: "coral",
    types: "2 · 7 · 3",
    tagline: "Turns a quiet group chat into an actual evening.",
    intro:
      "The tests called Dan a catalyst; the chat strongly agrees. He convenes, checks the social temperature, asks the most questions, and keeps warmth and humor circulating.",
    brings: [
      "Novelty, humor, and emotional engagement",
      "Questions that pull people into the conversation",
      "A strong instinct for inclusion and shared fun",
    ],
    watch: [
      "Taking responsibility for whether everyone is having a good time",
      "Offering more possibilities than four calendars can absorb",
      "Letting humor carry a feeling that deserves one direct sentence",
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
    role: "The infrastructure & edge-case resolver",
    accent: "blue",
    types: "3 · 5 · 6",
    tagline: "Finds the link, the location, the wait-list exception, and Plan B.",
    intro:
      "Alex is quieter in the chat than the score-based ‘driver’ label suggests, but repeatedly turns ambiguity into usable infrastructure: access, locations, invitations, rain checks, and concrete options.",
    brings: [
      "Concrete options when logistics get fuzzy",
      "Access, links, fallback plans, and edge-case handling",
      "Attention to getting the full squad in one place",
    ],
    watch: [
      "Treating friendship like a system to optimize",
      "Going quiet while busy, then re-entering in solution mode",
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
    role: "The idea scout & momentum engine",
    accent: "violet",
    types: "5 · 1 · 4 · 6",
    tagline: "Finds the second-order consequence—and the next interesting room.",
    intro:
      "The scores suggested a detached analyst; the chat shows a highly active scout. Lily starts conversation cycles, proposes plans, shares worlds to explore, offers practical help, and brings the longest-form thinking.",
    brings: [
      "Sharp pattern recognition and principled standards",
      "A steady stream of events, ideas, and cultural discovery",
      "Long-form reflection plus practical follow-through",
    ],
    watch: [
      "Letting the number of interesting options outrun available energy",
      "Processing emotion through explanation before naming the feeling",
      "Offering so much context that the actual request hides inside it",
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
    role: "The reflective connector & meaning-maker",
    accent: "sage",
    types: "5 · 6 · 9 · 3",
    tagline: "Turns experience into reflection without disappearing from the action.",
    intro:
      "The Enneagram suggested a quiet stabilizer. The chat adds a crucial correction: Tina is the second-most active voice, expresses real preferences, initiates threads, and shares emotionally candid reflection.",
    brings: [
      "Continuity, steadiness, and loyalty",
      "A calm read of several points of view",
      "Personal reflection that deepens the group’s conversations",
    ],
    watch: [
      "Turning self-understanding into another research project",
      "Overpreparing in order to feel safe, then overcorrecting",
      "Giving every interpretation a fair hearing before choosing one",
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
    label: "Invitation meets infrastructure",
    chemistry: "Dan creates the human pull; Alex handles the access, specificity, and fallback route.",
    risk: "Both can care about the gathering while assuming the other has converted interest into commitment.",
    rule: "End the thread with one owner, one time, and one actual yes.",
    color: "coral-blue",
  },
  {
    people: "Alex × Lily",
    label: "Systems meets scout",
    chemistry: "Lily surfaces interesting worlds; Alex finds the practical route into them.",
    risk: "An idea can become an optimization problem before either checks whether the other simply wanted to share it.",
    rule: "Clarify whether this is discovery, discussion, or a plan.",
    color: "blue-violet",
  },
  {
    people: "Alex × Tina",
    label: "Structure meets reflection",
    chemistry: "Alex sharpens the next step; Tina expands the meaning and motivations around it.",
    risk: "A logistical answer and a reflective answer can pass each other without meeting.",
    rule: "Answer both questions: what are we doing, and what is this really about?",
    color: "blue-sage",
  },
  {
    people: "Dan × Lily",
    label: "Spark meets scout",
    chemistry: "Dan creates warmth around Lily’s stream of ideas, events, and unexpected connections.",
    risk: "The opportunity feed gets exciting faster than the calendar gets realistic.",
    rule: "Enjoy ten possibilities; commit to one.",
    color: "coral-violet",
  },
  {
    people: "Dan × Tina",
    label: "Warmth meets depth",
    chemistry: "Dan’s curious questions give Tina’s reflective side somewhere lively to land.",
    risk: "A thoughtful thread can keep expanding while the concrete invitation remains implicit.",
    rule: "Turn shared curiosity into one date on the calendar.",
    color: "coral-sage",
  },
  {
    people: "Lily × Tina",
    label: "The active idea loop",
    chemistry: "A notably engaged exchange of reflection, discovery, vulnerability, and Type Five recognition.",
    risk: "Each new model can produce three more fascinating models before anything feels settled.",
    rule: "Keep the rabbit hole; add a stopping point and a next step.",
    color: "violet-sage",
  },
];

const failureModes = [
  {
    n: "01",
    title: "Coordination entropy eats the full squad",
    body: "Interest is rarely the problem. Work, travel, health, parallel events, and four independent calendars are. The demonstrated danger is not rejection—it is repeatedly meeting in every combination except all four together.",
  },
  {
    n: "02",
    title: "Emotion stays one abstraction away",
    body: "The chat contains real vulnerability and care, often translated through analysis, models, context, or humor. That is a genuine emotional dialect—but occasionally the headline still deserves to be said without the explanatory essay.",
  },
  {
    n: "03",
    title: "An event drop looks like a plan",
    body: "The group is excellent at sharing interesting possibilities. A link, enthusiastic reaction, and calendar emoji can still leave four different interpretations of whether anything has actually been agreed.",
  },
  {
    n: "04",
    title: "The friendship gets over-optimized",
    body: "With all the Three, Five, and One energy, every restaurant, trip, or conversation can start feeling evaluated. Some mediocre evenings must be allowed to remain mediocre.",
  },
  {
    n: "05",
    title: "Warm cancellations conceal accumulated disappointment",
    body: "The observed norm is healthy: constraints are stated directly and met with warmth. The remaining risk is becoming so gracious about every cancellation that nobody checks whether someone has quietly been missing the full group for months.",
  },
];

const fieldRules = [
  {
    tag: "INVITE",
    title: "Separate a drop from a plan",
    body: "Interesting links are group oxygen. Label the moment when one becomes a real commitment.",
    quote: "Event drop for now. If two people are in, let’s make it a plan.",
  },
  {
    tag: "DECIDE",
    title: "Use attendance states",
    body: "The group already expresses preferences well. Make availability equally explicit so enthusiasm is not mistaken for confirmation.",
    quote: "I’m in / interested but unconfirmed / sitting this one out.",
  },
  {
    tag: "REPAIR",
    title: "Give conflict space—and a deadline",
    body: "The Five-heavy members may need time. That is reasonable; unlimited withdrawal is not.",
    quote: "We don’t have to resolve this now, but let’s return to it within two days.",
  },
  {
    tag: "GATHER",
    title: "Protect the full-squad date",
    body: "Piggybacking on public events keeps the friendship moving. Occasionally choose one gathering whose entire point is all four Mandelbros being there.",
    quote: "This one is not an event drop. This one is the reunion.",
  },
  {
    tag: "ROTATE",
    title: "Name the emotional headline",
    body: "Analysis and humor are already authentic forms of closeness here. Add one sentence that makes the feeling impossible to miss.",
    quote: "The model is interesting. The headline is: I missed you.",
  },
];

const chatProfiles = [
  {
    name: "Dan",
    accent: "coral",
    test: "Catalyst & connector",
    observed: "Convener & temperature-taker",
    note: "The archive strongly confirms the social-energy hypothesis: he opens doors, asks the most questions, checks availability, and keeps humor moving.",
    stats: [["190", "messages"], ["44", "questions"], ["45", "humor beats"]],
    verdict: "Confirmed—with receipts.",
  },
  {
    name: "Alex",
    accent: "blue",
    test: "Driver & strategist",
    observed: "Infrastructure & edge-case resolver",
    note: "The strategic instinct is visible, but not as conversational dominance. His contribution is leverage: access, locations, links, specificity, and fallback plans.",
    stats: [["68", "messages"], ["10", "planning signals"], ["5", "shared links"]],
    verdict: "Keep the function; lower the volume.",
  },
  {
    name: "Lily",
    accent: "violet",
    test: "Analyst & standards keeper",
    observed: "Idea scout & momentum engine",
    note: "The biggest correction. Lily is not waiting on the sidelines: she starts threads, proposes plans, discovers rooms, offers help, and contributes the longest-form thinking.",
    stats: [["141", "messages"], ["19", "fresh starts"], ["≈100", "avg. characters"]],
    verdict: "The ‘passenger’ theory fails.",
  },
  {
    name: "Tina",
    accent: "sage",
    test: "Stabilizer & quiet observer",
    observed: "Reflective connector & meaning-maker",
    note: "Also much more active than predicted: the second-most messages, clear preferences, genuine vulnerability, and a recurring instinct to interpret experience deeply.",
    stats: [["176", "messages"], ["21", "questions"], ["11", "fresh starts"]],
    verdict: "Steady, yes. Quiet, no.",
  },
];

const comparisons = [
  {
    topic: "Who creates momentum?",
    hypothesis: "Dan and Alex form the fast half; Lily and Tina risk becoming passengers.",
    evidence: "Dan convenes, but Lily and Tina supply much of the sustained activity and many new conversation cycles.",
    verdict: "REWRITE",
  },
  {
    topic: "How emotion travels",
    hypothesis: "Intellectual intimacy may replace emotional intimacy.",
    evidence: "Vulnerability, concern, apologies, and affection are present—often wrapped in analysis and humor.",
    verdict: "NUANCE",
  },
  {
    topic: "What cancellations mean",
    hypothesis: "Silence, false consent, and withdrawal could produce resentment.",
    evidence: "Constraints are usually stated directly and met warmly. The visible problem is calendar friction, not rejection.",
    verdict: "REPLACE",
  },
  {
    topic: "Appreciation",
    hypothesis: "The group should make appreciation more explicit.",
    evidence: "Congratulations, thanks, concern, excitement, and ‘missed you’ energy are already recurring norms.",
    verdict: "PROMOTE",
  },
  {
    topic: "Optimization",
    hypothesis: "Friendship could become another system that must perform efficiently.",
    evidence: "Calendar tools and coordination are mostly self-aware comedy; shared events are used to reduce planning overhead.",
    verdict: "WATCH",
  },
];

const cultureSignals = [
  "SideQuest & Fractal",
  "event drops",
  "AI slop",
  "YCJDT energy",
  "dinner logistics",
  "film rankings",
  "sports missions",
  "personality rabbit holes",
  "calendar-tech teasing",
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
          <a href="#field-notes">Chat evidence</a>
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

      <section className="field-notes-section" id="field-notes">
        <div className="section">
          <div className="field-notes-header">
            <div>
              <p className="kicker">02 / THE FIELD NOTES</p>
              <h2>The tests are hypotheses.<br /><em>The chat is behavior.</em></h2>
            </div>
            <div className="evidence-intro">
              <span className="evidence-stamp">WHATSAPP CHECK</span>
              <p>
                A read-only look at the locally stored Mandelbro-ts archive adds
                a behavioral layer: who starts threads, asks questions, makes
                plans, shares context, and keeps affection visible.
              </p>
              <small>577 stored message records · March–July 2026 · aggregate and paraphrased</small>
            </div>
          </div>

          <div className="chat-profile-grid">
            {chatProfiles.map((profile) => (
              <article className={`chat-profile ${profile.accent}`} key={profile.name}>
                <div className="chat-profile-title">
                  <span>{profile.name.slice(0, 1)}</span>
                  <h3>{profile.name}</h3>
                </div>
                <div className="hypothesis-shift">
                  <p><small>TEST HYPOTHESIS</small>{profile.test}</p>
                  <b>↓</b>
                  <p><small>OBSERVED IN CHAT</small>{profile.observed}</p>
                </div>
                <p className="chat-note">{profile.note}</p>
                <div className="chat-stats">
                  {profile.stats.map(([value, label]) => (
                    <p key={label}><strong>{value}</strong><span>{label}</span></p>
                  ))}
                </div>
                <p className="profile-verdict">{profile.verdict}</p>
              </article>
            ))}
          </div>

          <div className="comparison-board">
            <div className="comparison-heading">
              <p className="kicker">HYPOTHESIS ↔ EVIDENCE</p>
              <h3>What survives contact with the group chat?</h3>
            </div>
            <div className="comparison-labels" aria-hidden="true">
              <span>Question</span><span>Enneagram read</span><span>Chat evidence</span><span>Call</span>
            </div>
            {comparisons.map((item) => (
              <article className="comparison-row" key={item.topic}>
                <h4>{item.topic}</h4>
                <p>{item.hypothesis}</p>
                <p>{item.evidence}</p>
                <strong>{item.verdict}</strong>
              </article>
            ))}
          </div>

          <div className="culture-band">
            <div>
              <p className="kicker">THE MANDELBRO DIALECT</p>
              <h3>A friendship built from interesting rooms, affectionate teasing, and one more link.</h3>
            </div>
            <div className="culture-cloud">
              {cultureSignals.map((signal, index) => <span key={signal}>{index + 1}. {signal}</span>)}
            </div>
          </div>

          <p className="evidence-note">
            “Fresh start” means the first stored message after at least 24 hours of group silence.
            Counts describe this local slice; they are not personality scores or a leaderboard.
            No private messages, phone identifiers, or raw links are reproduced here.
          </p>
        </div>
      </section>

      <section className="recipe-section" id="dynamics">
        <div className="section recipe-inner">
          <div className="section-heading light">
            <p className="kicker">03 / THE CHEMISTRY</p>
            <h2>The group recipe</h2>
            <p>Activation, planning, judgment, and emotional regulation—each supplied by a different person.</p>
          </div>
          <div className="role-equation" aria-label="Group role equation">
            <div className="role-block coral"><span>Dan</span><strong>creates<br />welcome</strong></div>
            <i>+</i>
            <div className="role-block blue"><span>Alex</span><strong>creates<br />infrastructure</strong></div>
            <i>+</i>
            <div className="role-block violet"><span>Lily</span><strong>creates<br />discovery</strong></div>
            <i>+</i>
            <div className="role-block sage"><span>Tina</span><strong>creates<br />meaning</strong></div>
          </div>
          <div className="recipe-warning">
            <span className="warning-mark">!</span>
            <div>
              <p className="warning-label">THE ATTENDANCE PARADOX</p>
              <h3>Everyone is engaged. Getting all four people into the same room is still advanced mathematics.</h3>
            </div>
            <p>The chat shows distributed effort and direct preferences. The friction is calendars—not a hidden fast half and slow half.</p>
          </div>
        </div>
      </section>

      <section className="section cycle-section">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">THE OBSERVED LOOP</p>
            <h2>How four interested people<br />become a party of three.</h2>
          </div>
          <p>The archive shows plenty of interest, warmth, and clean communication. The recurring opponent is ordinary adult-life geometry.</p>
        </div>
        <ol className="cycle-list">
          <li className="coral"><span>01</span><b>Event drop</b><p>someone shares an interesting room, meal, match, talk, or side quest</p></li>
          <li className="blue"><span>02</span><b>Fast interest</b><p>several Mandelbros light up and begin comparing context</p></li>
          <li className="violet"><span>03</span><b>Calendar physics</b><p>work, travel, health, and parallel events enter the equation</p></li>
          <li className="sage"><span>04</span><b>Clean signals</b><p>constraints, preferences, and apologies are usually stated directly</p></li>
          <li className="dark"><span>05</span><b>Subgroup goes</b><p>whoever can make it keeps the friendship in motion</p></li>
          <li className="cream"><span>06</span><b>Warm reboot</b><p>the debrief lands and the full-squad gathering gets rescheduled</p></li>
        </ol>
        <div className="aftermath">
          <div><span className="dot coral-dot" /><strong>No villain emerges.</strong></div>
          <div><span className="dot blue-dot" /><strong>The subgroup stays alive.</strong></div>
          <div><span className="dot violet-dot" /><strong>Affection remains visible.</strong></div>
          <div><span className="dot sage-dot" /><strong>The reunion remains pending.</strong></div>
        </div>
      </section>

      <section className="pairings-section">
        <div className="section">
          <div className="section-heading">
            <p className="kicker">04 / ONE-ON-ONE</p>
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
            <p className="kicker">05 / THE GLITCHES</p>
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
            <p className="kicker">06 / THE FIELD MANUAL</p>
            <h2>Less pressure.<br /><em>More signal.</em></h2>
            <p>The updated prescription: keep the distributed energy, preserve the warmth, and make the difference between an interesting possibility and an actual plan unmistakable.</p>
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
              <p className="kicker">ALREADY A GROUP STRENGTH</p>
              <h2>Keep saying the quiet part out loud.</h2>
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
          <p className="disclaimer">A playful reflection based on self-reported Enneagram results and aggregate patterns from a locally stored group-chat slice—not a diagnosis, destiny, leaderboard, or substitute for asking what someone actually wants.</p>
        </div>
      </footer>
    </main>
  );
}
