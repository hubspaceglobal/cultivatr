"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/* ─── ARTISAN HUB BRAND ──────────────────────────────────── */
const B = {
  red:       "#A10019",
  redDark:   "#7a0013",
  redLight:  "#fbe8ec",
  redMid:    "#f0bcc8",
  black:     "#000000",
  white:     "#ffffff",
  offWhite:  "#f7f7f7",
  lightGray: "#efefef",
  midGray:   "#cccccc",
  text:      "#1a1a1a",
  muted:     "#555555",
  faint:     "#888888",
};

/* ─── DATA ───────────────────────────────────────────────── */
const modules = [
  { n:"01", title:"INTENTION",      desc:"Define your purpose, align your vision, and anchor your business in who you are.",                 active:true,  path:"/rbdec/module/1/1" },
  { n:"02", title:"ATTENTION",      desc:"Train your focus on what matters. Identify opportunities hidden in plain sight.",                   active:false },
  { n:"03", title:"COOPERATION",    desc:"Build alliances and interdependent networks that amplify collective value.",                        active:false },
  { n:"04", title:"INNOVATION",     desc:"Master creative problem-solving and apply emerging technology to your business.",                   active:false },
  { n:"05", title:"IMPLEMENTATION", desc:"Execute with precision. Build project roadmaps, process maps, and dashboards.",                    active:false },
  { n:"06", title:"REGENERATION",   desc:"Create systems where your investment returns to you and your community continuously.",              active:false },
  { n:"07", title:"RECOGNITION",    desc:"Register intellectual property, publish your work, and establish your authority.",                  active:false },
  { n:"08", title:"PRESENTATION",   desc:"Communicate your value through executive decks, articles, and polished digital media.",            active:false },
];

const tools20 = [
  "Personality Assessment","Personal Mission Statement","Professional Digital Media Profile",
  "Personal Life Plan w/ Budget","Business Roadmap","Professional & Business SWOT Analysis",
  "Business Registration","Organization Chart","Business Dashboard","KPIs & Financial Report",
  "Development Project Plan & Budget","Process Map w/ Swimlanes","Process Instructions",
  "Create a Contract","Create a Survey","Build a Course","Register Intellectual Property",
  "Publish an Article","Create an Executive Deck","Agile | SCRUM",
];

const sessionTypes = [
  { label:"Work Session",     sub:"Task management" },
  { label:"Voting Session",   sub:"Governance" },
  { label:"Info Session",     sub:"Data capture" },
  { label:"Fire Session",     sub:"Problem resolution" },
  { label:"Sprint Session",   sub:"Project planning" },
  { label:"Learning Session", sub:"Training" },
  { label:"Pitch Session",    sub:"Presentation" },
  { label:"Coaching Session", sub:"Financial · Personal · Business" },
];

const projectTools = [
  { name:"Telegram",        use:"Public/Private Chat" },
  { name:"Evernote",        use:"Bulletin / Broadcast" },
  { name:"YouTube",         use:"Broadcast & Publish" },
  { name:"Canva",           use:"Media Creation" },
  { name:"Google Drive",    use:"Forms & Spreadsheets" },
  { name:"Zoom",            use:"Conference Calls" },
  { name:"ClickUp",         use:"Project Management" },
  { name:"Community Space", use:"Private Network" },
];

const partners = ["Azania","In The Air Media","4am Collective","Artisan Hub","Thari","Global Alliance","Catica","Techtro","Liberty Ship"];

/* ─── SHARED COMPONENTS ──────────────────────────────────── */
function ArtisanLogo({ size = 18 }) {
  return (
    <span style={{ fontSize: size, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase" }}>
      <span style={{ color: B.red }}>The Artisan</span>
      <span style={{ color: B.white }}> Hub</span>
    </span>
  );
}

function SectionHead({ eyebrow, title }) {
  return (
    <div style={{ marginBottom: 28 }}>
      {eyebrow && (
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: B.red, marginBottom: 8 }}>
          {eyebrow}
        </div>
      )}
      <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", color: B.black, borderBottom: `3px solid ${B.red}`, paddingBottom: 10 }}>
        {title}
      </div>
    </div>
  );
}

function Card({ children, accent = false, dark = false, style: s = {} }) {
  return (
    <div style={{
      background: dark ? B.black : B.white,
      border: `1px solid ${accent ? B.red : B.midGray}`,
      borderLeft: `4px solid ${accent ? B.red : B.black}`,
      borderRadius: 0,
      padding: "22px 24px",
      ...s
    }}>
      {children}
    </div>
  );
}

function CardTitle({ children, accent = false }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: accent ? B.red : B.black, marginBottom: 12 }}>
      {children}
    </div>
  );
}

function Li({ children }) {
  return (
    <div style={{ fontSize: 13, color: B.muted, padding: "5px 0", borderBottom: `1px solid ${B.lightGray}`, lineHeight: 1.5 }}>
      {children}
    </div>
  );
}

/* ─── TAB: OVERVIEW ──────────────────────────────────────── */
function TabOverview({ onNavigate }) {
  const [hov, setHov] = useState(null);

  return (
    <div>
      {/* Hero — black panel with red accent, mirrors Artisan Hub doc style */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginBottom: 32, border: `1px solid ${B.midGray}` }}>
        <div style={{ background: B.white, padding: "48px 40px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: B.red, marginBottom: 12 }}>
            The Artisan Hub · Self-Paced Program
          </div>
          <h1 style={{ margin: "0 0 4px", fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", color: B.black, lineHeight: 1.1 }}>
            Creative
          </h1>
          <h1 style={{ margin: "0 0 4px", fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", color: B.red, lineHeight: 1.1 }}>
            Economy
          </h1>
          <div style={{ fontSize: "clamp(11px,1.8vw,14px)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: B.black, marginTop: 10, marginBottom: 28 }}>
            Regenerative Business Development
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[["8","Modules"],["20","Tools & Tasks"],["Self-Paced","Format"]].map(([v, l]) => (
              <div key={v} style={{ background: B.black, padding: "10px 18px", textAlign: "center", minWidth: 80 }}>
                <div style={{ fontSize: 20, fontWeight: 900, color: B.red, lineHeight: 1 }}>{v}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em", marginTop: 3, textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: B.black, padding: "48px 40px", display: "flex", alignItems: "center" }}>
          <div>
            <div style={{ width: 32, height: 3, background: B.red, marginBottom: 20 }} />
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.88)", lineHeight: 1.8, margin: 0 }}>
              This program provides individuals and teams with the skills, tools, and support to build ownership within The Artisan Hub Ecosystem — contributing to an economy where your investment returns to you and your community.
            </p>
          </div>
        </div>
      </div>

      {/* Program desc */}
      <div style={{ background: B.white, border: `1px solid ${B.midGray}`, borderLeft: `4px solid ${B.black}`, padding: "28px 32px", marginBottom: 32 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: B.red, marginBottom: 12 }}>Program Overview</div>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: B.muted, marginBottom: 14 }}>
          No more complaining about the economy, no jobs, or toxic workplaces. We are building the <strong style={{ color: B.black }}>Regenerative Creative Economy 1.0</strong>.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: B.muted, marginBottom: 14 }}>
          This program forces you to think differently, be creative, and master the art of innovation. Using creativity to meet challenges with resolve is not only honorable — it has a way of bringing an abundance of resources.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: B.muted }}>
          Subject Matter Experts and coaches guide participants through the learning process, assigning activities that build relevant technical and analytical skills. Nothing is accomplished alone — finding balance between interdependence and independence is critical.
        </p>
      </div>

      {/* 8 Modules */}
      <div style={{ marginBottom: 40 }}>
        <SectionHead eyebrow="curriculum" title="8 Program Modules" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 2 }}>
          {modules.map(mod => (
            <div
              key={mod.n}
              onMouseEnter={() => mod.active && setHov(mod.n)}
              onMouseLeave={() => setHov(null)}
              onClick={() => mod.active && onNavigate(mod.path)}
              style={{
                background: hov === mod.n ? B.black : B.white,
                border: `1px solid ${hov === mod.n ? B.black : B.midGray}`,
                padding: "24px 22px",
                cursor: mod.active ? "pointer" : "default",
                opacity: mod.active ? 1 : 0.45,
                transition: "all 0.18s",
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", color: hov === mod.n ? B.red : B.red, marginBottom: 6 }}>MODULE {mod.n}</div>
              <div style={{ fontSize: 14, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: hov === mod.n ? B.white : B.black, marginBottom: 8 }}>{mod.title}</div>
              <p style={{ fontSize: 12.5, color: hov === mod.n ? "rgba(255,255,255,0.7)" : B.muted, lineHeight: 1.65, margin: 0 }}>{mod.desc}</p>
              {mod.active
                ? <div style={{ marginTop: 16, fontSize: 11, fontWeight: 800, color: B.red, letterSpacing: "0.06em" }}>Begin Lesson 1 →</div>
                : <div style={{ marginTop: 16, fontSize: 10, fontWeight: 700, color: B.midGray, letterSpacing: "0.12em" }}>COMING SOON</div>
              }
            </div>
          ))}
        </div>
      </div>

      {/* 20 Tools */}
      <div style={{ marginBottom: 40 }}>
        <SectionHead eyebrow="what you will build" title="20 Valuable Tools & Tasks" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tools20.map(t => (
            <div key={t} style={{ background: B.white, border: `1px solid ${B.midGray}`, padding: "7px 14px", fontSize: 12, fontWeight: 600, color: B.text }}>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* CTA — black panel */}
      <div style={{ background: B.black, padding: "48px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: B.red, marginBottom: 10 }}>Ready to Begin</div>
          <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", color: B.white, marginBottom: 8 }}>Module 01 — Intention</div>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, lineHeight: 1.7, maxWidth: 420, margin: 0 }}>
            Define your purpose and lay the foundation for everything that follows.
          </p>
        </div>
        <button
          onClick={() => onNavigate("/rbdec/module/1/1")}
          style={{ background: B.red, color: B.white, border: "none", padding: "14px 36px", fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer" }}
        >
          Start Now →
        </button>
      </div>
    </div>
  );
}

/* ─── TAB: PROGRAM GUIDE ─────────────────────────────────── */
function TabProgramGuide() {
  return (
    <div>
      <div style={{ marginBottom: 36 }}>
        <SectionHead eyebrow="program overview" title="What to Expect" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 2 }}>
          <Card>
            <CardTitle>Learning Format</CardTitle>
            <Li>20-minute micro-learning sessions</Li>
            <Li>Tech Tuesdays — weekly digital skill building</Li>
            <Li>Workshop Wednesdays — hands-on application</Li>
            <Li>Self-directed project management</Li>
            <Li>Guided support from the MicroBiz team</Li>
          </Card>
          <Card accent>
            <CardTitle accent>Program Outcomes</CardTitle>
            <Li>Certified skills and a business profile</Li>
            <Li>Matched with clients via the SBO model</Li>
            <Li>Active roadmap and project plan</Li>
            <Li>Team built around your specialty</Li>
            <Li>Ongoing coaching and community support</Li>
          </Card>
        </div>
      </div>

      <div style={{ marginBottom: 36 }}>
        <SectionHead eyebrow="engagement" title="Session Types" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))", gap: 2 }}>
          {sessionTypes.map(s => (
            <div key={s.label} style={{ background: B.white, border: `1px solid ${B.midGray}`, padding: "12px 14px" }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: B.black, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              <div style={{ fontSize: 11, color: B.faint, marginTop: 3 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 36 }}>
        <SectionHead eyebrow="resources" title="Your Resource Hub" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 2 }}>
          <Card>
            <CardTitle>Access</CardTitle>
            <Li>Course Dashboard</Li>
            <Li>MicroBiz Shared Google Drive</Li>
            <Li>Support Team</Li>
            <Li>Schedule Coaching Session</Li>
            <Li>Accelerator Registration</Li>
          </Card>
          <Card>
            <CardTitle>Commitment Tracks</CardTitle>
            {[["3 Months",15],["6 Months",25],["12 Months",45],["2 Years",65],["4 Years",100]].map(([label, pct]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ minWidth: 80, fontSize: 11, fontWeight: 700, color: B.white, background: B.black, padding: "3px 8px", textAlign: "center" }}>{label}</div>
                <div style={{ flex: 1, background: B.lightGray, height: 8 }}>
                  <div style={{ height: 8, width: `${pct}%`, background: B.red }} />
                </div>
              </div>
            ))}
          </Card>
          <Card accent>
            <CardTitle accent>Cultivatr Process</CardTitle>
            <Li>Primer</Li>
            <Li>Determine Team Commitment</Li>
            <Li>Select Project Toolset</Li>
            <Li>Build Roadmap</Li>
            <Li>Execute Plan</Li>
          </Card>
        </div>
      </div>

      <div style={{ marginBottom: 36 }}>
        <SectionHead eyebrow="tools & templates" title="Project Toolset" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))", gap: 2, marginBottom: 16 }}>
          {projectTools.map(t => (
            <div key={t.name} style={{ background: B.white, border: `1px solid ${B.midGray}`, padding: "12px", textAlign: "center" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: B.black }}>{t.name}</div>
              <div style={{ fontSize: 11, color: B.faint, marginTop: 3 }}>{t.use}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 2 }}>
          <Card>
            <CardTitle>Planning Templates</CardTitle>
            <Li>Roadmap</Li><Li>Business Case</Li><Li>Project Plan</Li>
            <Li>Scope / Deliverables</Li><Li>KPIs &amp; CSFs</Li>
            <Li>Objectives &amp; Goals</Li><Li>Team Profile</Li>
          </Card>
          <Card accent>
            <CardTitle accent>Business Dev Templates</CardTitle>
            <Li>Pitch Deck</Li><Li>Business Plan</Li><Li>Proposal Pipeline</Li>
            <Li>Executive Summary</Li><Li>Budget Milestone Roadmap</Li>
            <Li>Leadership Profile</Li>
          </Card>
        </div>
      </div>

      <div style={{ marginBottom: 36 }}>
        <SectionHead eyebrow="business development" title="Build Your Business Case" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 2 }}>
          <Card>
            <CardTitle>Executive Summary Components</CardTitle>
            <Li>Vision / Mission</Li><Li>Approach</Li><Li>Risk Mitigation</Li>
            <Li>Opportunity</Li><Li>Leadership Profile</Li>
            <Li>Budget Milestone Roadmap</Li>
          </Card>
          <Card accent>
            <CardTitle accent>Business Pipeline &amp; Trade Partners</CardTitle>
            <Li>Pitch Deck</Li><Li>Business Plan</Li><Li>Proposal Pipeline</Li>
            <div style={{ marginTop: 14, marginBottom: 8, fontSize: 11, fontWeight: 800, color: B.black, textTransform: "uppercase", letterSpacing: "0.1em" }}>Trade Partners</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {partners.map(p => (
                <span key={p} style={{ background: B.black, color: B.white, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>{p}</span>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div style={{ marginBottom: 36 }}>
        <SectionHead eyebrow="governance" title="Org & Business Profile" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 2 }}>
          <Card>
            <CardTitle>Org Development</CardTitle>
            <Li>Membership</Li><Li>Activities</Li><Li>Treasury</Li><Li>Governance</Li>
          </Card>
          <Card>
            <CardTitle>Business Profile</CardTitle>
            <Li>Operating Agreement</Li><Li>Business Bio</Li>
            <Li>Digital Presence</Li><Li>Business Registration</Li>
            <Li>Business Locations</Li><Li>Insurance Policies</Li>
          </Card>
        </div>
      </div>

      <div style={{ background: B.black, padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <ArtisanLogo size={16} />
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Sponsored by Globalworks since 2006 · Get on the road to recession proof
        </div>
      </div>
    </div>
  );
}

/* ─── TAB: MODULES ───────────────────────────────────────── */
function TabModules({ onNavigate }) {
  const [hov, setHov] = useState(null);
  return (
    <div>
      <SectionHead eyebrow="curriculum" title="All 8 Modules" />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {modules.map(mod => (
          <div
            key={mod.n}
            onMouseEnter={() => mod.active && setHov(mod.n)}
            onMouseLeave={() => setHov(null)}
            onClick={() => mod.active && onNavigate(mod.path)}
            style={{
              background: hov === mod.n ? B.black : B.white,
              border: `1px solid ${B.midGray}`,
              borderLeft: `4px solid ${mod.active ? B.red : B.midGray}`,
              padding: "20px 24px",
              display: "flex", alignItems: "center", gap: 20,
              cursor: mod.active ? "pointer" : "default",
              opacity: mod.active ? 1 : 0.45,
              transition: "all 0.18s",
            }}
          >
            <div style={{ minWidth: 56, textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: B.red, lineHeight: 1 }}>{mod.n}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: hov === mod.n ? B.white : B.black, marginBottom: 4 }}>{mod.title}</div>
              <div style={{ fontSize: 12.5, color: hov === mod.n ? "rgba(255,255,255,0.65)" : B.muted, lineHeight: 1.55 }}>{mod.desc}</div>
            </div>
            <div style={{ minWidth: 100, textAlign: "right" }}>
              {mod.active
                ? <span style={{ fontSize: 11, fontWeight: 800, color: B.red }}>Start →</span>
                : <span style={{ fontSize: 10, fontWeight: 700, color: B.midGray, letterSpacing: "0.1em" }}>COMING SOON</span>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── ROOT PAGE ──────────────────────────────────────────── */
export default function RBDECPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  const TABS = [
    { id: "overview",      label: "Course Overview" },
    { id: "program-guide", label: "Program Guide"   },
    { id: "modules",       label: "Modules"         },
  ];

  function handleNavigate(path) { router.push(path); }

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: B.offWhite, minHeight: "100vh", color: B.text }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');*{box-sizing:border-box;margin:0;padding:0;}`}</style>

      {/* NAV */}
      <nav style={{ background: B.black, padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.35)" }}>
        <div style={{ padding: "14px 0" }}>
          <ArtisanLogo size={15} />
        </div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Sponsored by Globalworks since 2006
        </div>
      </nav>

      {/* PAGE HEADER + TABS */}
      <div style={{ background: B.black, borderBottom: `3px solid ${B.red}` }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "32px 32px 0" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 8 }}>
            Creative Economy
          </div>
          <h1 style={{ fontSize: "clamp(22px,3.5vw,36px)", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", color: B.white, lineHeight: 1.1, marginBottom: 4 }}>
            Regenerative Business
          </h1>
          <h1 style={{ fontSize: "clamp(22px,3.5vw,36px)", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", color: B.red, lineHeight: 1.1, marginBottom: 24 }}>
            Development
          </h1>
          <div style={{ display: "flex", gap: 0 }}>
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "12px 22px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 11,
                  fontWeight: activeTab === tab.id ? 800 : 500,
                  letterSpacing: "0.1em",
                  color: activeTab === tab.id ? B.white : "rgba(255,255,255,0.4)",
                  borderBottom: activeTab === tab.id ? `3px solid ${B.red}` : "3px solid transparent",
                  textTransform: "uppercase",
                  fontFamily: "'Montserrat', sans-serif",
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "36px 32px 72px" }}>
        {activeTab === "overview"      && <TabOverview      onNavigate={handleNavigate} />}
        {activeTab === "program-guide" && <TabProgramGuide />}
        {activeTab === "modules"       && <TabModules       onNavigate={handleNavigate} />}
      </div>

      {/* FOOTER */}
      <div style={{ background: B.black, borderTop: `3px solid ${B.red}`, padding: "20px 32px", textAlign: "center" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          The Artisan Hub · Creative Economy · Regenerative Business Development
        </div>
      </div>
    </div>
  );
                           }
