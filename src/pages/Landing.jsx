import { useState } from "react";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  Play,
  Sparkles,
  Sun,
  Moon,
  X,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

const features = [
  {
    number: "01",
    title: "AI planning",
    description:
      "Turn goals into clear next steps with intelligent project suggestions.",
  },
  {
    number: "02",
    title: "Team workspace",
    description:
      "Keep projects, tasks, files and conversations in one focused place.",
  },
  {
    number: "03",
    title: "Smart analytics",
    description:
      "See momentum, bottlenecks and team productivity without busywork.",
  },
];

const faqs = [
  {
    question: "Can I use Nexora for free?",
    answer:
      "Yes. The demo workspace is designed to showcase the core product experience without a backend.",
  },
  {
    question: "Does dark mode work across the app?",
    answer:
      "Yes. Theme preference is saved locally and applied across the entire application.",
  },
  {
    question: "Is this connected to a real AI service?",
    answer:
      "This frontend assignment uses a simulated AI experience that can be connected to an API later.",
  },
];

function DashboardPreview() {
  return (
    <div className="nx-preview-window">
      <div className="nx-preview-top">
        <div className="nx-preview-dots">
          <span />
          <span />
          <span />
        </div>

        <b>nexora.app/dashboard</b>

        <span className="nx-preview-user">AM</span>
      </div>

      <div className="nx-preview-body">
        <aside className="nx-preview-sidebar">
          <strong>N</strong>

          <span className="active">▦ Dashboard</span>
          <span>▣ Projects</span>
          <span>◉ Tasks</span>
          <span>♧ Team</span>
        </aside>

        <div className="nx-preview-main">
          <small>WORKSPACE OVERVIEW</small>

          <h4>Good morning, Alex ✦</h4>

          <p className="nx-preview-date">Oct 01, 2026</p>

          <div className="nx-preview-stats">
            <div>
              <small>Active Projects</small>
              <b>24</b>
              <span>+12.5%</span>
            </div>

            <div>
              <small>Completed Tasks</small>
              <b>186</b>
              <span>+18.2%</span>
            </div>

            <div>
              <small>Productivity</small>
              <b>87%</b>
              <span>+8.4%</span>
            </div>
          </div>

          <div className="nx-preview-chart">
            <div className="nx-preview-chart-head">
              <strong>Productivity overview</strong>
              <span>This week</span>
            </div>

            <div className="nx-chart-grid">
              <i />
              <i />
              <i />
              <i />
            </div>

            <div className="nx-preview-bars">
              <i style={{ height: "42%" }} />
              <i style={{ height: "58%" }} />
              <i style={{ height: "51%" }} />
              <i style={{ height: "73%" }} />
              <i style={{ height: "67%" }} />
              <i style={{ height: "84%" }} />
              <i style={{ height: "92%" }} />
            </div>
          </div>

          <div className="nx-preview-bottom">
            <div>
              <small>Today's tasks</small>
              <strong>4 tasks</strong>
              <span>75% complete</span>
            </div>

            <div>
              <small>Focus score</small>
              <strong>87%</strong>
              <span>Great focus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      className="nx-theme-button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
      <span>{dark ? "Light" : "Dark"}</span>
    </button>
  );
}

export default function Landing() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState(0);

  const closeMenu = () => setMenu(false);

  return (
    <div className="nx-landing">
      <style>{`
        /* =========================================================
           NEXORA LANDING PAGE
           SELF-CONTAINED STYLES
        ========================================================= */

        .nx-landing {
          --nx-bg: #f7f8fc;
          --nx-surface: #ffffff;
          --nx-surface-soft: #f5f6fb;
          --nx-border: #e5e7ef;
          --nx-text: #101525;
          --nx-muted: #697386;
          --nx-purple: #7551f5;
          --nx-purple-dark: #6037e8;
          --nx-blue: #2f8cff;
          --nx-shadow: 0 24px 70px rgba(45, 36, 100, 0.12);
          --nx-radius: 24px;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          color: var(--nx-text);
          background:
            radial-gradient(
              circle at 76% 13%,
              rgba(120, 85, 255, 0.13),
              transparent 30%
            ),
            radial-gradient(
              circle at 15% 45%,
              rgba(76, 156, 255, 0.07),
              transparent 28%
            ),
            var(--nx-bg);
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .dark .nx-landing,
        html.dark .nx-landing,
        [data-theme="dark"] .nx-landing {
          --nx-bg: #090b12;
          --nx-surface: #11141d;
          --nx-surface-soft: #171b26;
          --nx-border: #262b38;
          --nx-text: #f5f7fb;
          --nx-muted: #9ba4b5;
          --nx-shadow: 0 25px 70px rgba(0, 0, 0, 0.38);

          background:
            radial-gradient(
              circle at 76% 13%,
              rgba(117, 81, 245, 0.18),
              transparent 32%
            ),
            radial-gradient(
              circle at 15% 45%,
              rgba(47, 140, 255, 0.08),
              transparent 28%
            ),
            var(--nx-bg);
        }

        .nx-landing *,
        .nx-landing *::before,
        .nx-landing *::after {
          box-sizing: border-box;
        }

        .nx-landing a {
          color: inherit;
          text-decoration: none;
        }

        .nx-landing button {
          font: inherit;
        }

        .nx-landing section {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* =========================================================
           NAVBAR
        ========================================================= */

        .nx-nav {
          position: relative;
          z-index: 100;
          width: min(1180px, calc(100% - 48px));
          height: 82px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nx-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 21px;
          font-weight: 800;
          letter-spacing: -0.04em;
          white-space: nowrap;
        }

        .nx-brand-mark {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          color: white;
          background: linear-gradient(135deg, #7c4dff, #4d8cff);
          box-shadow: 0 8px 20px rgba(117, 81, 245, 0.25);
        }

        .nx-nav-links {
          display: flex;
          align-items: center;
          gap: 34px;
          margin-left: auto;
          margin-right: 38px;
        }

        .nx-nav-links a {
          color: var(--nx-muted);
          font-size: 13px;
          font-weight: 600;
          transition:
            color 0.2s ease,
            transform 0.2s ease;
        }

        .nx-nav-links a:hover {
          color: var(--nx-text);
          transform: translateY(-1px);
        }

        .nx-nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nx-theme-button {
          height: 40px;
          padding: 0 13px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: 1px solid var(--nx-border);
          border-radius: 11px;
          color: var(--nx-text);
          background: var(--nx-surface);
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .nx-theme-button:hover {
          transform: translateY(-2px);
          border-color: rgba(117, 81, 245, 0.35);
          box-shadow: 0 8px 22px rgba(45, 36, 100, 0.08);
        }

        .nx-login {
          font-size: 13px;
          font-weight: 700;
          color: var(--nx-text);
          padding: 10px 6px;
        }

        .nx-primary {
          min-height: 46px;
          padding: 0 20px;
          border: 0;
          border-radius: 13px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          color: white;
          background: linear-gradient(
            135deg,
            var(--nx-purple),
            var(--nx-blue)
          );
          box-shadow: 0 12px 25px rgba(117, 81, 245, 0.22);
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .nx-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 30px rgba(117, 81, 245, 0.28);
        }

        .nx-primary.small {
          min-height: 40px;
          padding: 0 17px;
          border-radius: 11px;
        }

        .nx-menu-button {
          display: none;
          width: 40px;
          height: 40px;
          border: 1px solid var(--nx-border);
          border-radius: 11px;
          align-items: center;
          justify-content: center;
          color: var(--nx-text);
          background: var(--nx-surface);
          cursor: pointer;
        }

        .nx-mobile-menu {
          display: none;
        }

        /* =========================================================
           HERO
        ========================================================= */

        .nx-hero {
          min-height: 640px;
          padding: 76px 0 80px;
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          align-items: center;
          gap: 50px;
        }

        .nx-hero-copy {
          position: relative;
          z-index: 5;
        }

        .nx-pill {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border: 1px solid rgba(117, 81, 245, 0.18);
          border-radius: 999px;
          color: var(--nx-purple);
          background: rgba(117, 81, 245, 0.07);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.02em;
          margin-bottom: 25px;
        }

        .nx-hero h1 {
          max-width: 650px;
          margin: 0;
          font-size: clamp(52px, 6vw, 82px);
          line-height: 0.97;
          letter-spacing: -0.065em;
          font-weight: 850;
        }

        .nx-hero h1 span {
          display: block;
          color: transparent;
          background: linear-gradient(
            100deg,
            #6845ef,
            #278eea
          );
          background-clip: text;
          -webkit-background-clip: text;
        }

        .nx-hero-description {
          max-width: 570px;
          margin: 27px 0 0;
          color: var(--nx-muted);
          font-size: 17px;
          line-height: 1.75;
        }

        .nx-hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 31px;
        }

        .nx-secondary {
          min-height: 46px;
          padding: 0 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: 1px solid var(--nx-border);
          border-radius: 13px;
          background: var(--nx-surface);
          color: var(--nx-text);
          font-size: 13px;
          font-weight: 750;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .nx-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(45, 36, 100, 0.08);
        }

        .nx-trust {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
        }

        .nx-avatars {
          display: flex;
        }

        .nx-avatars span {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          margin-left: -6px;
          border: 2px solid var(--nx-bg);
          border-radius: 50%;
          color: white;
          background: linear-gradient(135deg, #6d4bf2, #2595e8);
          font-size: 8px;
          font-weight: 800;
        }

        .nx-avatars span:first-child {
          margin-left: 0;
        }

        .nx-trust p {
          margin: 0;
          color: var(--nx-muted);
          font-size: 11px;
        }

        .nx-trust strong {
          color: var(--nx-text);
        }

        /* =========================================================
           HERO PREVIEW
        ========================================================= */

        .nx-hero-visual {
          position: relative;
          min-height: 510px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nx-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(5px);
          pointer-events: none;
        }

        .nx-orb-one {
          width: 330px;
          height: 330px;
          right: 20px;
          top: 60px;
          background: rgba(113, 75, 248, 0.17);
        }

        .nx-orb-two {
          width: 240px;
          height: 240px;
          left: 25px;
          bottom: 20px;
          background: rgba(44, 146, 241, 0.11);
        }

        .nx-preview-window {
          position: relative;
          z-index: 2;
          width: min(690px, 100%);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 22px;
          background: var(--nx-surface);
          box-shadow:
            0 35px 80px rgba(58, 45, 120, 0.16),
            0 8px 25px rgba(58, 45, 120, 0.08);
          transform: perspective(1200px) rotateY(-2deg) rotateX(1deg);
          animation: nxFloat 5s ease-in-out infinite;
        }

        @keyframes nxFloat {
          0%,
          100% {
            transform: perspective(1200px) rotateY(-2deg) rotateX(1deg)
              translateY(0);
          }

          50% {
            transform: perspective(1200px) rotateY(-2deg) rotateX(1deg)
              translateY(-9px);
          }
        }

        .nx-preview-top {
          height: 43px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 0 13px;
          border-bottom: 1px solid var(--nx-border);
          background: var(--nx-surface);
          color: var(--nx-muted);
        }

        .nx-preview-top b {
          font-size: 8px;
          font-weight: 700;
        }

        .nx-preview-dots {
          display: flex;
          gap: 5px;
        }

        .nx-preview-dots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d7dbe5;
        }

        .nx-preview-user {
          width: 24px;
          height: 24px;
          margin-left: auto;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: white;
          background: linear-gradient(135deg, #6e4df4, #328fe9);
          font-size: 7px;
          font-weight: 800;
        }

        .nx-preview-body {
          display: grid;
          grid-template-columns: 104px 1fr;
          min-height: 400px;
        }

        .nx-preview-sidebar {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 17px 10px;
          border-right: 1px solid var(--nx-border);
          background: var(--nx-surface-soft);
        }

        .nx-preview-sidebar strong {
          width: 27px;
          height: 27px;
          margin-bottom: 11px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          color: white;
          background: linear-gradient(135deg, #7950f6, #4c8cf1);
          font-size: 10px;
        }

        .nx-preview-sidebar span {
          color: var(--nx-muted);
          font-size: 9px;
          font-weight: 650;
          white-space: nowrap;
        }

        .nx-preview-sidebar span.active {
          color: var(--nx-purple);
          font-weight: 800;
        }

        .nx-preview-main {
          min-width: 0;
          padding: 25px 25px 20px;
        }

        .nx-preview-main > small {
          color: var(--nx-muted);
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .nx-preview-main h4 {
          margin: 10px 0 3px;
          color: var(--nx-text);
          font-size: 19px;
          letter-spacing: -0.03em;
        }

        .nx-preview-date {
          margin: 0 0 18px;
          color: var(--nx-muted);
          font-size: 8px;
        }

        .nx-preview-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .nx-preview-stats > div {
          min-width: 0;
          padding: 12px;
          border: 1px solid var(--nx-border);
          border-radius: 11px;
          background: var(--nx-surface);
        }

        .nx-preview-stats small,
        .nx-preview-bottom small {
          display: block;
          margin-bottom: 5px;
          color: var(--nx-muted);
          font-size: 7px;
        }

        .nx-preview-stats b {
          display: block;
          color: var(--nx-text);
          font-size: 15px;
        }

        .nx-preview-stats span {
          display: inline-block;
          margin-top: 5px;
          padding: 3px 5px;
          border-radius: 5px;
          color: #16845b;
          background: rgba(32, 179, 119, 0.09);
          font-size: 6px;
          font-weight: 800;
        }

        .nx-preview-chart {
          position: relative;
          height: 150px;
          margin-top: 13px;
          padding: 12px;
          overflow: hidden;
          border: 1px solid var(--nx-border);
          border-radius: 12px;
          background: var(--nx-surface);
        }

        .nx-preview-chart-head {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nx-preview-chart-head strong {
          color: var(--nx-text);
          font-size: 9px;
        }

        .nx-preview-chart-head span {
          color: var(--nx-muted);
          font-size: 7px;
        }

        .nx-chart-grid {
          position: absolute;
          inset: 42px 12px 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .nx-chart-grid i {
          display: block;
          width: 100%;
          height: 1px;
          background: var(--nx-border);
        }

        .nx-preview-bars {
          position: absolute;
          left: 15px;
          right: 15px;
          bottom: 13px;
          height: 88px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 10px;
        }

        .nx-preview-bars i {
          width: 100%;
          max-width: 22px;
          border-radius: 5px 5px 2px 2px;
          background: linear-gradient(
            180deg,
            #7652f4,
            #398eea
          );
          opacity: 0.88;
        }

        .nx-preview-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 12px;
        }

        .nx-preview-bottom > div {
          padding: 11px 12px;
          border: 1px solid var(--nx-border);
          border-radius: 10px;
          background: var(--nx-surface);
        }

        .nx-preview-bottom strong {
          display: inline-block;
          margin-right: 6px;
          color: var(--nx-text);
          font-size: 10px;
        }

        .nx-preview-bottom span {
          color: var(--nx-muted);
          font-size: 7px;
        }

        /* =========================================================
           LOGO STRIP
        ========================================================= */

        .nx-logo-strip {
          min-height: 96px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          border-top: 1px solid var(--nx-border);
          border-bottom: 1px solid var(--nx-border);
        }

        .nx-logo-strip span {
          color: var(--nx-muted);
          font-size: 11px;
          font-weight: 700;
        }

        .nx-logo-strip b {
          color: var(--nx-muted);
          font-size: 17px;
          letter-spacing: -0.04em;
          opacity: 0.75;
        }

        /* =========================================================
           GENERAL HEADINGS
        ========================================================= */

        .nx-eyebrow {
          display: inline-block;
          color: var(--nx-purple);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.16em;
        }

        .nx-center-heading {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
        }

        .nx-center-heading h2 {
          margin: 14px 0 16px;
          font-size: clamp(38px, 4vw, 57px);
          line-height: 1.02;
          letter-spacing: -0.055em;
        }

        .nx-center-heading p {
          margin: 0 auto;
          max-width: 590px;
          color: var(--nx-muted);
          font-size: 15px;
          line-height: 1.75;
        }

        /* =========================================================
           FEATURES
        ========================================================= */

        .nx-feature-section {
          padding: 125px 0 135px;
        }

        .nx-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 58px;
        }

        .nx-feature-card {
          position: relative;
          min-height: 285px;
          padding: 30px;
          overflow: hidden;
          border: 1px solid var(--nx-border);
          border-radius: 20px;
          background: var(--nx-surface);
          box-shadow: 0 8px 25px rgba(45, 36, 100, 0.035);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .nx-feature-card:hover {
          transform: translateY(-7px);
          border-color: rgba(117, 81, 245, 0.22);
          box-shadow: var(--nx-shadow);
        }

        .nx-feature-number {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-bottom: 48px;
          border-radius: 12px;
          color: var(--nx-purple);
          background: rgba(117, 81, 245, 0.09);
          font-size: 11px;
          font-weight: 850;
        }

        .nx-feature-card:nth-child(2) .nx-feature-number {
          color: #278eea;
          background: rgba(39, 142, 234, 0.09);
        }

        .nx-feature-card:nth-child(3) .nx-feature-number {
          color: #0c9d72;
          background: rgba(12, 157, 114, 0.09);
        }

        .nx-feature-card h3 {
          margin: 0 0 12px;
          color: var(--nx-text);
          font-size: 21px;
          letter-spacing: -0.035em;
        }

        .nx-feature-card p {
          max-width: 330px;
          margin: 0;
          color: var(--nx-muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .nx-feature-card a {
          position: absolute;
          left: 30px;
          bottom: 28px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--nx-text);
          font-size: 12px;
          font-weight: 800;
        }

        /* =========================================================
           WORKFLOW
        ========================================================= */

        .nx-workflow {
          min-height: 560px;
          padding: 82px 65px;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: center;
          gap: 80px;
          border: 1px solid var(--nx-border);
          border-radius: 30px;
          background:
            radial-gradient(
              circle at 80% 50%,
              rgba(117, 81, 245, 0.1),
              transparent 35%
            ),
            var(--nx-surface);
        }

        .nx-workflow-copy h2 {
          max-width: 550px;
          margin: 14px 0 18px;
          font-size: clamp(40px, 4vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.055em;
        }

        .nx-workflow-copy > p {
          max-width: 510px;
          margin: 0;
          color: var(--nx-muted);
          font-size: 15px;
          line-height: 1.75;
        }

        .nx-workflow-list {
          display: grid;
          gap: 13px;
          margin: 28px 0;
          padding: 0;
          list-style: none;
        }

        .nx-workflow-list li {
          display: flex;
          align-items: center;
          gap: 11px;
          color: var(--nx-text);
          font-size: 13px;
          font-weight: 700;
        }

        .nx-workflow-list svg {
          width: 22px;
          height: 22px;
          padding: 4px;
          border-radius: 50%;
          color: #138e68;
          background: rgba(19, 142, 104, 0.1);
        }

        .nx-workflow-visual {
          position: relative;
          min-height: 330px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 55px;
          padding: 20px;
        }

        .nx-flow-card {
          position: relative;
          z-index: 2;
          width: min(390px, 100%);
          margin-left: auto;
          padding: 23px;
          display: grid;
          grid-template-columns: 42px 1fr;
          column-gap: 13px;
          border: 1px solid var(--nx-border);
          border-radius: 18px;
          background: var(--nx-surface);
          box-shadow: 0 18px 45px rgba(45, 36, 100, 0.1);
        }

        .nx-flow-card svg {
          grid-row: span 2;
          width: 42px;
          height: 42px;
          padding: 11px;
          border-radius: 12px;
          color: white;
          background: linear-gradient(135deg, #7551f5, #398eea);
        }

        .nx-flow-card strong {
          align-self: end;
          color: var(--nx-text);
          font-size: 14px;
        }

        .nx-flow-card span {
          align-self: start;
          margin-top: 4px;
          color: var(--nx-muted);
          font-size: 11px;
        }

        .nx-flow-card.second {
          margin-left: 70px;
        }

        .nx-flow-card.second svg {
          background: rgba(22, 157, 111, 0.1);
          color: #138e68;
        }

        .nx-flow-line {
          position: absolute;
          z-index: 1;
          top: 95px;
          right: 188px;
          width: 2px;
          height: 125px;
          background: linear-gradient(
            180deg,
            rgba(117, 81, 245, 0.5),
            rgba(39, 142, 234, 0.1)
          );
        }

        /* =========================================================
           TESTIMONIALS
        ========================================================= */

        .nx-testimonials {
          padding: 135px 0;
        }

        .nx-testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 55px;
        }

        .nx-testimonial-card {
          min-height: 255px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--nx-border);
          border-radius: 20px;
          background: var(--nx-surface);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .nx-testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--nx-shadow);
        }

        .nx-stars {
          color: #f3a728;
          font-size: 13px;
          letter-spacing: 3px;
        }

        .nx-testimonial-card p {
          flex: 1;
          margin: 25px 0 30px;
          color: var(--nx-text);
          font-size: 15px;
          line-height: 1.7;
        }

        .nx-testimonial-card strong {
          display: block;
          color: var(--nx-text);
          font-size: 13px;
        }

        .nx-testimonial-card span {
          margin-top: 4px;
          color: var(--nx-muted);
          font-size: 11px;
        }

        /* =========================================================
           FAQ
        ========================================================= */

        .nx-faq {
          padding: 40px 0 130px;
        }

        .nx-faq-list {
          max-width: 880px;
          margin: 55px auto 0;
          display: grid;
          gap: 10px;
        }

        .nx-faq-item {
          width: 100%;
          padding: 22px 24px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 25px;
          border: 1px solid var(--nx-border);
          border-radius: 15px;
          background: var(--nx-surface);
          color: var(--nx-text);
          text-align: left;
          cursor: pointer;
          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .nx-faq-item:hover {
          border-color: rgba(117, 81, 245, 0.3);
        }

        .nx-faq-item.open {
          border-color: rgba(117, 81, 245, 0.28);
          background: var(--nx-surface-soft);
        }

        .nx-faq-item > div {
          flex: 1;
        }

        .nx-faq-item strong {
          display: block;
          font-size: 14px;
        }

        .nx-faq-item p {
          max-width: 730px;
          margin: 12px 0 0;
          color: var(--nx-muted);
          font-size: 13px;
          line-height: 1.7;
        }

        .nx-faq-item > svg {
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .nx-faq-item.open > svg {
          transform: rotate(180deg);
        }

        /* =========================================================
           CTA
        ========================================================= */

        .nx-final-cta {
          position: relative;
          overflow: hidden;
          margin-bottom: 0 !important;
          padding: 90px 40px;
          text-align: center;
          border-radius: 30px;
          color: white;
          background:
            radial-gradient(
              circle at 25% 20%,
              rgba(255, 255, 255, 0.17),
              transparent 27%
            ),
            radial-gradient(
              circle at 75% 70%,
              rgba(57, 142, 234, 0.28),
              transparent 30%
            ),
            linear-gradient(135deg, #6340e9, #4d6eea);
          box-shadow: 0 30px 70px rgba(87, 58, 205, 0.2);
        }

        .nx-final-cta > svg {
          margin-bottom: 14px;
        }

        .nx-final-cta h2 {
          margin: 0;
          font-size: clamp(38px, 5vw, 62px);
          letter-spacing: -0.055em;
          line-height: 1;
        }

        .nx-final-cta p {
          max-width: 550px;
          margin: 20px auto 28px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 15px;
          line-height: 1.7;
        }

        .nx-final-cta .nx-white-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 47px;
          padding: 0 20px;
          border-radius: 13px;
          color: #4f35d1;
          background: white;
          font-size: 13px;
          font-weight: 850;
          transition: transform 0.2s ease;
        }

        .nx-final-cta .nx-white-button:hover {
          transform: translateY(-2px);
        }

        /* =========================================================
           FOOTER OVERRIDES
        ========================================================= */

        .nx-landing .site-footer {
          width: min(1180px, calc(100% - 48px));
          margin: 80px auto 0;
          padding: 55px 0 25px;
          border-top: 1px solid var(--nx-border);
          color: var(--nx-text);
          background: transparent;
        }

        .nx-landing .footer-inner {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 0.6fr;
          gap: 45px;
          align-items: start;
        }

        .nx-landing .footer-brand p {
          color: var(--nx-muted);
          font-size: 12px;
          line-height: 1.7;
        }

        .nx-landing .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-weight: 800;
        }

        .nx-landing .footer-logo-mark {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          color: white;
          background: linear-gradient(135deg, #7551f5, #3e91eb);
        }

        .nx-landing .footer-links {
          grid-column: span 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }

        .nx-landing .footer-link-group {
          display: grid;
          align-content: start;
          gap: 11px;
        }

        .nx-landing .footer-heading {
          margin-bottom: 3px;
          color: var(--nx-text);
          font-size: 11px;
          font-weight: 850;
        }

        .nx-landing .footer-link-group a,
        .nx-landing .footer-link-group button {
          padding: 0;
          border: 0;
          color: var(--nx-muted);
          background: transparent;
          text-align: left;
          font-size: 11px;
          cursor: pointer;
        }

        .nx-landing .footer-link-group a:hover,
        .nx-landing .footer-link-group button:hover {
          color: var(--nx-text);
        }

        .nx-landing .back-top {
          justify-self: end;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 0;
          border: 0;
          color: var(--nx-muted);
          background: transparent;
          font-size: 11px;
          cursor: pointer;
        }

        .nx-landing .footer-bottom {
          margin-top: 50px;
          padding-top: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--nx-border);
          color: var(--nx-muted);
          font-size: 10px;
        }

        .nx-landing .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        /* =========================================================
           RESPONSIVE
        ========================================================= */

        @media (max-width: 1050px) {
          .nx-nav-links {
            gap: 20px;
            margin-right: 20px;
          }

          .nx-hero {
            grid-template-columns: 1fr;
            padding-top: 55px;
          }

          .nx-hero-copy {
            max-width: 750px;
            margin: 0 auto;
            text-align: center;
          }

          .nx-pill {
            margin-left: auto;
            margin-right: auto;
          }

          .nx-hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .nx-hero-actions,
          .nx-trust {
            justify-content: center;
          }

          .nx-hero-visual {
            min-height: 480px;
          }

          .nx-preview-window {
            width: min(720px, 100%);
          }

          .nx-workflow {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .nx-workflow-copy {
            text-align: center;
          }

          .nx-workflow-copy > p {
            margin-left: auto;
            margin-right: auto;
          }

          .nx-workflow-list {
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
          }

          .nx-workflow-visual {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
          }
        }

        @media (max-width: 820px) {
          .nx-nav-links,
          .nx-nav-actions .nx-login,
          .nx-nav-actions > .nx-primary {
            display: none;
          }

          .nx-nav-actions {
            gap: 8px;
          }

          .nx-menu-button {
            display: inline-flex;
          }

          .nx-mobile-menu {
            position: absolute;
            z-index: 90;
            top: 74px;
            left: 24px;
            right: 24px;
            display: grid;
            gap: 5px;
            padding: 12px;
            border: 1px solid var(--nx-border);
            border-radius: 17px;
            background: var(--nx-surface);
            box-shadow: var(--nx-shadow);
          }

          .nx-mobile-menu a {
            padding: 13px 14px;
            border-radius: 10px;
            color: var(--nx-muted);
            font-size: 13px;
            font-weight: 700;
          }

          .nx-mobile-menu a:hover {
            color: var(--nx-text);
            background: var(--nx-surface-soft);
          }

          .nx-mobile-login {
            margin-top: 4px;
            border-top: 1px solid var(--nx-border);
            color: var(--nx-text) !important;
          }

          .nx-feature-grid,
          .nx-testimonial-grid {
            grid-template-columns: 1fr;
          }

          .nx-feature-card {
            min-height: 250px;
          }

          .nx-landing .footer-inner {
            grid-template-columns: 1fr 1fr;
          }

          .nx-landing .footer-links {
            grid-column: span 1;
            grid-template-columns: 1fr;
          }

          .nx-landing .back-top {
            justify-self: start;
          }
        }

        @media (max-width: 600px) {
          .nx-landing section {
            width: min(100% - 30px, 1180px);
          }

          .nx-nav {
            width: calc(100% - 30px);
            height: 70px;
          }

          .nx-brand {
            font-size: 19px;
          }

          .nx-brand-mark {
            width: 31px;
            height: 31px;
          }

          .nx-theme-button {
            width: 40px;
            padding: 0;
          }

          .nx-theme-button span {
            display: none;
          }

          .nx-hero {
            min-height: auto;
            padding: 48px 0 60px;
            gap: 45px;
          }

          .nx-hero h1 {
            font-size: clamp(45px, 14vw, 66px);
          }

          .nx-hero-description {
            font-size: 15px;
            line-height: 1.65;
          }

          .nx-hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .nx-primary,
          .nx-secondary {
            width: 100%;
          }

          .nx-trust {
            flex-direction: column;
            gap: 8px;
          }

          .nx-hero-visual {
            min-height: 340px;
          }

          .nx-preview-window {
            border-radius: 16px;
            transform: none;
          }

          .nx-preview-body {
            grid-template-columns: 62px 1fr;
            min-height: 300px;
          }

          .nx-preview-sidebar {
            padding: 12px 7px;
          }

          .nx-preview-sidebar span {
            font-size: 6px;
          }

          .nx-preview-main {
            padding: 17px 12px;
          }

          .nx-preview-main h4 {
            font-size: 14px;
          }

          .nx-preview-stats {
            gap: 5px;
          }

          .nx-preview-stats > div {
            padding: 7px;
          }

          .nx-preview-stats small {
            font-size: 5px;
          }

          .nx-preview-stats b {
            font-size: 10px;
          }

          .nx-preview-chart {
            height: 110px;
          }

          .nx-preview-bottom {
            gap: 5px;
          }

          .nx-preview-bottom > div {
            padding: 7px;
          }

          .nx-preview-bottom strong {
            font-size: 8px;
          }

          .nx-logo-strip {
            min-height: auto;
            padding: 25px 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
          }

          .nx-logo-strip span {
            grid-column: 1 / -1;
          }

          .nx-feature-section,
          .nx-testimonials {
            padding: 90px 0;
          }

          .nx-center-heading h2,
          .nx-workflow-copy h2 {
            font-size: 39px;
          }

          .nx-feature-grid,
          .nx-testimonial-grid {
            margin-top: 38px;
          }

          .nx-workflow {
            width: calc(100% - 30px);
            padding: 50px 22px;
            border-radius: 22px;
          }

          .nx-workflow-visual {
            min-height: 300px;
            padding: 0;
          }

          .nx-flow-card {
            padding: 17px;
          }

          .nx-flow-card.second {
            margin-left: 15px;
          }

          .nx-flow-line {
            right: 50%;
            top: 90px;
          }

          .nx-faq {
            padding: 20px 0 90px;
          }

          .nx-faq-list {
            margin-top: 35px;
          }

          .nx-faq-item {
            padding: 18px;
          }

          .nx-final-cta {
            width: calc(100% - 30px) !important;
            padding: 65px 20px;
            border-radius: 22px;
          }

          .nx-final-cta h2 {
            font-size: 39px;
          }

          .nx-landing .site-footer {
            width: calc(100% - 30px);
            margin-top: 55px;
          }

          .nx-landing .footer-inner {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .nx-landing .footer-links {
            grid-template-columns: repeat(3, 1fr);
          }

          .nx-landing .back-top {
            justify-self: start;
          }

          .nx-landing .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

        @media (max-width: 430px) {
          .nx-landing .footer-links {
            grid-template-columns: 1fr 1fr;
          }

          .nx-hero h1 {
            font-size: 45px;
          }

          .nx-preview-top {
            height: 36px;
          }

          .nx-preview-dots {
            display: none;
          }

          .nx-preview-top b {
            font-size: 6px;
          }
        }

        /* =========================================================
           ACCESSIBILITY / REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          .nx-preview-window {
            animation: none;
          }

          .nx-landing *,
          .nx-landing *::before,
          .nx-landing *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav className="nx-nav">
        <Link to="/" className="nx-brand" onClick={closeMenu}>
          <span className="nx-brand-mark">
            <Zap size={18} fill="currentColor" />
          </span>

          <span>Nexora</span>
        </Link>

        <div className="nx-nav-links">
          <a href="#features">Features</a>
          <a href="#workflow">How it works</a>
          <a href="#testimonials">Customers</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="nx-nav-actions">
          <ThemeButton />

          <Link to="/login" className="nx-login">
            Sign in
          </Link>

          <Link to="/login" className="nx-primary small">
            Get started
            <ArrowRight size={15} />
          </Link>

          <button
            type="button"
            className="nx-menu-button"
            onClick={() => setMenu((current) => !current)}
            aria-label={menu ? "Close menu" : "Open menu"}
          >
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menu && (
        <div className="nx-mobile-menu">
          <a href="#features" onClick={closeMenu}>
            Features
          </a>

          <a href="#workflow" onClick={closeMenu}>
            How it works
          </a>

          <a href="#testimonials" onClick={closeMenu}>
            Customers
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <Link
            to="/login"
            className="nx-mobile-login"
            onClick={closeMenu}
          >
            Sign in
          </Link>
        </div>
      )}

      {/* =========================================================
          HERO
      ========================================================= */}

      <main>
        <section className="nx-hero">
          <div className="nx-hero-copy">
            <div className="nx-pill">
              <Sparkles size={14} />
              AI-powered workspace
            </div>

            <h1>
              Make work feel
              <span>effortless.</span>
            </h1>

            <p className="nx-hero-description">
              Plan projects, organize tasks and move your team forward
              with a workspace built for modern productivity.
            </p>

            <div className="nx-hero-actions">
              <Link to="/login" className="nx-primary">
                Start for free
                <ArrowRight size={17} />
              </Link>

              <a href="#features" className="nx-secondary">
                <Play size={15} fill="currentColor" />
                Explore features
              </a>
            </div>

            <div className="nx-trust">
              <div className="nx-avatars">
                <span>AM</span>
                <span>JD</span>
                <span>SK</span>
                <span>RK</span>
              </div>

              <p>
                <strong>18k+</strong> productive teams use Nexora
              </p>
            </div>
          </div>

          <div className="nx-hero-visual">
            <div className="nx-orb nx-orb-one" />
            <div className="nx-orb nx-orb-two" />

            <DashboardPreview />
          </div>
        </section>

        {/* =========================================================
            TRUSTED TEAMS
        ========================================================= */}

        <section className="nx-logo-strip">
          <span>Trusted by modern teams</span>
          <b>ARC</b>
          <b>northstar</b>
          <b>MONO</b>
          <b>Vertex</b>
          <b>orbit</b>
        </section>

        {/* =========================================================
            FEATURES
        ========================================================= */}

        <section id="features" className="nx-feature-section">
          <div className="nx-center-heading">
            <span className="nx-eyebrow">EVERYTHING IN ONE PLACE</span>

            <h2>
              Less managing.
              <br />
              More creating.
            </h2>

            <p>
              Everything your team needs to plan, execute and improve
              without switching between a dozen tools.
            </p>
          </div>

          <div className="nx-feature-grid">
            {features.map((feature) => (
              <article className="nx-feature-card" key={feature.title}>
                <div className="nx-feature-number">
                  {feature.number}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <a href="#workflow">
                  Learn more
                  <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================
            WORKFLOW
        ========================================================= */}

        <section id="workflow" className="nx-workflow">
          <div className="nx-workflow-copy">
            <span className="nx-eyebrow">BUILT FOR FLOW</span>

            <h2>
              From idea to done,
              <br />
              without the chaos.
            </h2>

            <p>
              Nexora turns scattered work into a simple visual flow
              so everyone knows what matters next.
            </p>

            <ul className="nx-workflow-list">
              <li>
                <Check size={17} />
                One shared source of truth
              </li>

              <li>
                <Check size={17} />
                Clear ownership and deadlines
              </li>

              <li>
                <Check size={17} />
                AI insights when you need them
              </li>
            </ul>

            <Link to="/login" className="nx-primary">
              Try Nexora
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="nx-workflow-visual">
            <div className="nx-flow-card">
              <Zap size={20} />

              <strong>AI Sprint Plan</strong>

              <span>Created in 8 seconds</span>
            </div>

            <div className="nx-flow-line" />

            <div className="nx-flow-card second">
              <Check size={20} />

              <strong>12 tasks organized</strong>

              <span>Ready for your team</span>
            </div>
          </div>
        </section>

        {/* =========================================================
            TESTIMONIALS
        ========================================================= */}

        <section
          id="testimonials"
          className="nx-testimonials"
        >
          <div className="nx-center-heading">
            <span className="nx-eyebrow">LOVED BY TEAMS</span>

            <h2>
              Less busywork.
              <br />
              More meaningful work.
            </h2>

            <p>
              See how teams use Nexora to create a calmer and more
              productive way of working.
            </p>
          </div>

          <div className="nx-testimonial-grid">
            <article className="nx-testimonial-card">
              <div className="nx-stars">★★★★★</div>

              <p>
                "Nexora helped our team replace scattered tools with
                one simple workspace."
              </p>

              <strong>Sarah Mitchell</strong>
              <span>Product Manager</span>
            </article>

            <article className="nx-testimonial-card">
              <div className="nx-stars">★★★★★</div>

              <p>
                "The dashboard gives us exactly the information we
                need without making the interface feel complicated."
              </p>

              <strong>Daniel Carter</strong>
              <span>Engineering Lead</span>
            </article>

            <article className="nx-testimonial-card">
              <div className="nx-stars">★★★★★</div>

              <p>
                "The clean interface and productivity insights have
                made planning our projects much easier."
              </p>

              <strong>Emily Johnson</strong>
              <span>Creative Director</span>
            </article>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================= */}

        <section id="faq" className="nx-faq">
          <div className="nx-center-heading">
            <span className="nx-eyebrow">QUESTIONS</span>

            <h2>
              Frequently asked
              <br />
              questions.
            </h2>

            <p>
              Everything you need to know before getting started with
              Nexora.
            </p>
          </div>

          <div className="nx-faq-list">
            {faqs.map((item, index) => (
              <button
                type="button"
                key={item.question}
                className={`nx-faq-item ${
                  faq === index ? "open" : ""
                }`}
                onClick={() =>
                  setFaq((current) =>
                    current === index ? -1 : index
                  )
                }
              >
                <div>
                  <strong>{item.question}</strong>

                  {faq === index && <p>{item.answer}</p>}
                </div>

                <ChevronDown size={19} />
              </button>
            ))}
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="nx-final-cta">
          <Sparkles size={22} />

          <h2>Ready to make work simpler?</h2>

          <p>
            Build your next great project with a workspace your team
            will actually enjoy using.
          </p>

          <Link to="/login" className="nx-white-button">
            Get started free
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}