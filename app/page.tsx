/* oxlint-disable next/no-img-element -- GitHub Pages serves the local portrait as a static asset. */

type EntryProps = {
  title: string;
  organization?: string;
  date?: string;
  location?: string;
  children?: React.ReactNode;
};

function Entry({ title, organization, date, location, children }: EntryProps) {
  return (
    <article className="entry">
      <div className="entry-heading">
        <div>
          <h3>{title}</h3>
          {organization ? <p className="organization">{organization}</p> : null}
        </div>
        {date || location ? (
          <div className="entry-meta">
            {location ? <span>{location}</span> : null}
            {date ? <span>{date}</span> : null}
          </div>
        ) : null}
      </div>
      {children}
    </article>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="cv-section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#cv-content">Skip to CV content</a>

      <main id="cv-content">
        <div id="top" className="hero">
          <div className="hero-rule" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Curriculum Vitae</p>
            <h1>Fong Shu Hung <span>(Harrison)</span></h1>
            <div className="contact-row">
              <span>Hong Kong</span>
              <span aria-hidden="true">/</span>
              <a href="mailto:k04f06@connect.hku.hk">k04f06@connect.hku.hk</a>
            </div>
            <a className="hero-download" href="Fong_Shu_Hung_CV.pdf" download>
              <span>PDF</span>
              Download full CV
            </a>
          </div>
          <img
            className="hero-photo"
            src="fong-shu-hung-portrait.png"
            alt="Portrait of Fong Shu Hung (Harrison)"
            width="1254"
            height="1254"
            fetchPriority="high"
          />
        </div>

        <div className="document-shell">
          <aside className="document-index" aria-label="Document index">
            <p>Contents</p>
            <ol>
              <li><a href="#education">Education</a></li>
              <li><a href="#research">Research Experience</a></li>
              <li><a href="#manuscripts">Research Manuscripts</a></li>
              <li><a href="#internship">Internship</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#languages">Languages</a></li>
              <li><a href="#interests">Personal Interest</a></li>
            </ol>
          </aside>

          <div className="cv-document">
            <Section id="education" title="Education">
              <Entry title="University of Hong Kong" location="Hong Kong" date="Sept 2023 — Expected June 2027">
                <p className="degree">Bachelor of Data Science and Engineering, Double Major in Mathematics</p>
                <ul>
                  <li><strong>Mathematics &amp; Statistics:</strong> Multivariate data analysis (A), Linear Statistical Analysis (A), Probability &amp; Statistics (A), Optimization, Numerical Analysis, Probability Theory</li>
                  <li><strong>Data Science:</strong> Natural Language Processing (A+), Machine Learning (A), Statistical Machine Learning (A-), Exploratory Data Analysis (A), Deep Learning, Advanced Algorithm Design</li>
                </ul>
              </Entry>
            </Section>

            <Section id="research" title="Research Experience">
              <Entry title="Research Assistant (NLP & Information Retrieval)" organization="Department of Mathematics, The University of Hong Kong" date="June 2026 — Sep 2026">
                <ul>
                  <li>Investigated how semantically equivalent query representations affect pretrained code retrieval, using Manim as a controlled domain for studying natural-language-to-program alignment.</li>
                  <li>Built a reproducible Scene-level retrieval benchmark from 7,633 Manim Scene classes across eight open-source collections, with structural grouping, dense chunking, frozen queries, and provenance-preserving evaluation artifacts.</li>
                  <li>Evaluated BM25 and four pretrained code retrievers across 20 frozen intents and 80 query representations using nDCG@10, paired bootstrap confidence intervals, exact sign-flip tests, and Holm correction; identified model-conditional representation effects rather than consistent gains from structured queries.</li>
                  <li>Designed an LLM-assisted graded-relevance protocol calibrated against 354 blind-first human judgments, achieving 84.2% binary agreement and a quadratic-weighted kappa of 0.704.</li>
                </ul>
              </Entry>

              <Entry title="Research Assistant (Human-Centred AI)" organization="Institute of Software, Chinese Academy of Sciences" date="July 2025 — August 2025">
                <ul>
                  <li>Designed and developed a human-centered conversational AI agent to assist human decision-making and provide adaptive interaction through multi-modal and multi-LLM architectures.</li>
                  <li>Designed a scalable multi-user interaction architecture enabling AI agents to support collaborative decision-making scenarios with concurrent human inputs.</li>
                  <li>Investigated conversational context management challenges in human-AI interaction and developed prompt-based strategies to maintain user intent tracking and dialogue coherence.</li>
                  <li>Integrated real-time speech interaction capabilities using Whisper (STT) and CosyVoice (TTS), enabling multimodal communication between users and AI agents.</li>
                </ul>
              </Entry>

              <Entry title="Research Assistant (RAG & Document Intelligence)" organization="IEXIA Limited" date="Sep 2025 — Present">
                <ul>
                  <li>Independently designed and developed an LLM-assisted financial document intelligence pipeline for extracting structured information from reports, supporting rolling reports from nearly 3,000 companies.</li>
                  <li>Investigated the challenge of locating relevant pages in long-context documents and developed three progressively improved search strategies, including weighted keyword retrieval, table-of-content guided navigation, and low-resolution page scanning inspired by human reading behavior. Improved page retrieval reliability from 10% to 70% and ultimately 99%.</li>
                  <li>Improved pipeline stability by conducting systematic failure analysis, identifying limitations of previous approaches, and refining search strategies to handle diverse annual report structures.</li>
                  <li>Analyzed failure distributions across companies and annual report structures, clustering unsuccessful cases to uncover systematic failure modes and guide targeted improvements to the extraction pipeline.</li>
                </ul>
              </Entry>
            </Section>

            <Section id="manuscripts" title="Research Manuscripts">
              <Entry title="Harrison Fong" date="2026">
                <p className="manuscript-title"><em>Representation Effects Are Model-Conditional: Probing Pretrained Code Retrievers with Manim Queries</em></p>
                <p className="muted">Spotlight, LP4FM 2026 (NeurIPS Workshop).</p>
              </Entry>
            </Section>

            <Section id="internship" title="Internship">
              <Entry title="Algorithm and Model Development Intern" organization="Midjourney China Lab (Youchuan)" date="May 2025 — July 2025">
                <ul>
                  <li>Built a repeatable Python/Playwright anti-piracy workflow to investigate unauthorized services reselling Midjourney access through rebranded interfaces, supporting enforcement against associated accounts and websites.</li>
                  <li>Automated authenticated browser flows and collected session-state and network evidence across 13 of 14 targeted services (93%), including sites using QR-code authentication and dynamic frontend workflows.</li>
                  <li>Designed a modular, class-based architecture for site-specific extraction logic, enabling additional services to be integrated without modifying the core automation workflow.</li>
                  <li>Reverse-engineered JavaScript execution and request-polling behavior to stabilize automation against window-detection, debugger-trigger, and other anti-automation mechanisms.</li>
                </ul>
              </Entry>

              <Entry title="Agent Researcher & Engineer" organization="Hangzhou Hei Ba Meng Qi Ji Media Technology Co., Ltd." date="Aug 2026 — Present">
                <ul>
                  <li>Translated ambiguous client requirements into a PRD, two-phase delivery roadmap, and modular implementation plan for an agent-enabled WeChat Mini Program covering product copywriting, promotional imagery, digital-human sales videos, and a product-selection marketplace.</li>
                  <li>Mentor two interns through weekly planning meetings and demo reviews, decomposing milestones into module-level tasks and assigning ownership based on domain expertise, autonomy, and execution pace while maintaining cross-module knowledge sharing.</li>
                  <li>Designed a user-in-the-loop agentic workflow that progresses from product copy generation to optional image generation and digital-human video production, with approval checkpoints between stages to preserve user control.</li>
                  <li>Screened 10+ open-source generative-media projects for functional similarity and reuse potential, identifying reference components for video scripting, storyboarding, product-image generation, and e-commerce copywriting.</li>
                  <li>Prototyped and tested OpenRouter support within a selected project’s provider adapter; diagnosed architectural coupling to a proprietary AI relay platform and scoped the refactoring required for provider-independent model integration.</li>
                </ul>
              </Entry>
            </Section>

            <Section id="projects" title="Projects">
              <Entry title="Collaborator - Multimodal 30-Day Hospital Readmission Prediction (Kaggle)" date="Nov 2025 — Dec 2025">
                <ul>
                  <li>Achieved a validation AUC of 0.8694 by combining EHR sequences, X-ray embeddings, and clinical notes through an AutoGluon weighted ensemble.</li>
                  <li>Engineered multimodal features using GRUs for temporal EHR data, PCA for high-dimensional image embeddings, and clinical NLP pipelines incorporating the Charlson Comorbidity Index.</li>
                  <li>Eliminated look-ahead bias from the preprocessing pipeline to preserve temporal causality and produce deployment-realistic validation results.</li>
                </ul>
              </Entry>

              <Entry title="On-Stage Talker - Web Traffic Shifts: Search Engines vs. LLMs" date="June 2024">
                <ul>
                  <li>Presented an R/ggplot2 exploratory analysis of changing user behaviour to a technical audience of approximately 100.</li>
                </ul>
              </Entry>
            </Section>

            <Section id="experience" title="Experience">
              <Entry title="Teaching Assistant - COMP2501 Introduction to Data Science" organization="Department of Computer Science, The University of Hong Kong" date="Jan 2025 — Jun 2025">
                <ul>
                  <li>Independently designed 50 AI-resistant candidate questions for a 200-student midterm examination, with the explicit goal of preventing students from succeeding through direct or uncritical reliance on LLM-generated answers.</li>
                  <li>Constructed image- and data-intensive R programming problems requiring code execution, exploratory analysis, visualization, statistical reasoning, and regular-expression processing; submissions from the TA team were consolidated into a 75-question final assessment.</li>
                </ul>
              </Entry>
            </Section>

            <Section id="skills" title="Technical Skills">
              <ul className="compact-list">
                <li><strong>Programming:</strong> Python (PyTorch, scikit-learn, pandas, NumPy), TypeScript (Next.js, React, Node.js), R (tidyverse, ggplot2), SQL, C/C++, MATLAB</li>
                <li><strong>AI/ML:</strong> LLM Agents, RAG, Information Retrieval, AutoGluon, OpenRouter, OpenAI-compatible APIs</li>
                <li><strong>Tools:</strong> Git, Playwright, Vitest, Typst, LaTeX</li>
              </ul>
            </Section>

            <Section id="languages" title="Languages">
              <ul className="compact-list">
                <li>Cantonese: Native</li>
                <li>Mandarin: Fluent (written and spoken)</li>
                <li>English: Fluent (written and spoken)</li>
              </ul>
            </Section>

            <Section id="interests" title="Personal Interest">
              <ul className="compact-list">
                <li>Interests: Photography (Nikon), Strategic Debate, Creative Writing, Weight Training</li>
              </ul>
            </Section>
          </div>
        </div>
      </main>

      <footer>
        <p>Fong Shu Hung (Harrison)</p>
        <a href="mailto:k04f06@connect.hku.hk">k04f06@connect.hku.hk</a>
      </footer>
    </>
  );
}
