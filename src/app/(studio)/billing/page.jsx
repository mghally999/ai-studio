"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

import styles from "./billing.module.css";

export default function BillingPage() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-anim='b']", {
        y: 12,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.page} ref={ref}>
      <Card className={styles.top} data-anim="b">
        <div className={styles.title}>Billing</div>
        <div className={styles.sub}>
          UI now. Later we connect payments + subscriptions + usage limits.
        </div>
      </Card>

      <div className={styles.grid}>
        <Card className={styles.plan} data-anim="b">
          <div className={styles.planName}>Starter</div>
          <div className={styles.price}>
            $19<span>/mo</span>
          </div>
          <ul className={styles.list}>
            <li>Prompt Library</li>
            <li>Basic generators UI</li>
            <li>Projects history (UI)</li>
          </ul>
          <Button variant="secondary" full>
            Choose Starter
          </Button>
        </Card>

        <Card className={styles.plan} data-anim="b">
          <div className={styles.planName}>Creator</div>
          <div className={styles.price}>
            $49<span>/mo</span>
          </div>
          <ul className={styles.list}>
            <li>All Starter features</li>
            <li>Batch tools</li>
            <li>Export presets</li>
          </ul>
          <Button variant="primary" glow full>
            Choose Creator
          </Button>
        </Card>

        <Card className={styles.plan} data-anim="b">
          <div className={styles.planName}>Team</div>
          <div className={styles.price}>
            $199<span>/mo</span>
          </div>
          <ul className={styles.list}>
            <li>Workspaces</li>
            <li>Roles + audit logs</li>
            <li>Shared prompt packs</li>
          </ul>
          <Button variant="outline" full>
            Contact Sales
          </Button>
        </Card>
      </div>

      <Card className={styles.usage} data-anim="b">
        <div className={styles.usageTop}>
          <div>
            <div className={styles.usageTitle}>Usage</div>
            <div className={styles.usageSub}>
              Credits & limits will be enforced after API wiring.
            </div>
          </div>
          <Button variant="secondary" size="sm">
            View Invoices
          </Button>
        </div>

        <div className={styles.barWrap}>
          <div className={styles.bar}>
            <div className={styles.fill} style={{ width: "38%" }} />
          </div>
          <div className={styles.barMeta}>
            <span>Used: 380</span>
            <span>Limit: 1000</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
