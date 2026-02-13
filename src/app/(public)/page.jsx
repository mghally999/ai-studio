import Link from "next/link";
import styles from "./public.module.css";

export default function PublicLanding() {
  return (
    <div className={styles.page}>
      <div className={styles.bg} aria-hidden="true" />
      <header className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo} />
          <div>
            <div className={styles.brandName}>AI STUDIO</div>
            <div className={styles.brandSub}>
              Agnostic generator platform UI
            </div>
          </div>
        </div>

        <div className={styles.nav}>
          <Link className={styles.link} href="/studio">
            Studio
          </Link>
          <Link className={styles.link} href="/prompts">
            Prompts
          </Link>
          <Link className={styles.link} href="/billing">
            Pricing
          </Link>
        </div>
      </header>

      <main className={styles.hero}>
        <div className={styles.left}>
          <div className={styles.kicker}>ONE UI • MANY TOOLS</div>
          <h1 className={styles.h1}>
            Create content, images, and videos — inside one premium studio.
          </h1>
          <p className={styles.p}>
            We build the product-grade frontend first (templates, prompt packs,
            projects, billing). Then we wire APIs at the end.
          </p>

          <div className={styles.ctaRow}>
            <Link className={styles.primary} href="/studio">
              Open Studio
            </Link>
            <Link className={styles.secondary} href="/prompts">
              Browse Prompt Packs
            </Link>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureTitle}>Templates</div>
              <div className={styles.featureSub}>
                Click-to-fill prompts for real workflows.
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureTitle}>Identity Themes</div>
              <div className={styles.featureSub}>
                5 brand modes: mono/noir/cobalt/ultra/ice.
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureTitle}>Projects</div>
              <div className={styles.featureSub}>
                History, folders, exports (UI now).
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.previewCard}>
            <div className={styles.previewTop}>
              <div className={styles.previewDot} />
              <div className={styles.previewDot} />
              <div className={styles.previewDot} />
            </div>
            <div className={styles.previewBody}>
              <div className={styles.previewTitle}>Studio Preview</div>
              <div className={styles.previewText}>
                Sidebar + Topbar + Dashboard + Generators
              </div>
              <div className={styles.previewGrid}>
                <div className={styles.previewTile} />
                <div className={styles.previewTile} />
                <div className={styles.previewTile} />
                <div className={styles.previewTile} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
