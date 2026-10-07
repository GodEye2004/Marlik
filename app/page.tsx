"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Optimization: Using simpler spring transitions for better performance
  const springTransition = { type: "spring", damping: 25, stiffness: 120 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced stagger for faster feel
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }, // Simple ease for better perf
    },
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className={styles.main}>
      {/* ═══════ Floating Navbar ═══════ */}
      <motion.nav
        className={styles.navbar}
        initial={{ y: -50, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ ...springTransition, delay: 0.4 }}
      >
        <div className={styles.logo}>
          <span className="gold-gradient" style={{ fontWeight: 900 }}>
            MARLIK.AI
          </span>
        </div>
        <div className={styles.navLinks}>
          <a href="#services">خدمات</a>
          <a href="#about">داستان ما</a>
          <a href="#plans">پلن‌ها</a>
        </div>
        <motion.a
          href="#contact"
          className={`btn-primary ${styles.navCta}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          شروع پروژه
        </motion.a>
        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <a href="#services" onClick={closeMenu}>
                خدمات
              </a>
              <a href="#about" onClick={closeMenu}>
                داستان ما
              </a>
              <a href="#plans" onClick={closeMenu}>
                پلن‌ها
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className={styles.mobileMenuCta}
              >
                شروع پروژه
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ═══════ Hero Section ═══════ */}
      <section className={styles.hero}>
        <motion.div
          className="container"
          style={{ position: "relative", zIndex: 10 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.heroContent}>
            <motion.div
              variants={itemVariants}
              className={`badge ${styles.heroBadge}`}
            >
              <span className={styles.ornamentDot}></span>
              میراث شکوه پارس در دنیای الگوریتم‌ها
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`section-title ${styles.heroTitle}`}
            >
              دپارتمان هوش مصنوعی <br />
              <span
                className="gold-gradient"
                style={{ fontSize: "1.1em", display: "inline-block" }}
              >
                MARLIK.AI
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`section-subtitle ${styles.heroSub}`}
            >
              ترکیب شکوه تمدن کهن با قدرت الگوریتم‌های مدرن. ما آینده شما را با
              دقت هنرمندان باستان و سرعت تکنولوژی فردا می‌سازیم.
            </motion.p>

            <motion.div variants={itemVariants} className={styles.heroButtons}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`btn-primary ${styles.pillBtn}`}
              >
                درخواست دمو
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`btn-outline ${styles.pillBtn} ${styles.pillOutline}`}
              >
                داستان ما
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroScroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span></span>
        </motion.div>
      </section>

      {/* ═══════ Services Section ═══════ */}
      <motion.section
        id="services"
        className="section"
        style={{ background: "var(--bg-secondary)", overflow: "hidden" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
      >
        <div className="container">
          <div className="section-head">
            <span className="section-label">EXPERT SOLUTIONS</span>
            <h2 className="section-title">خدمات تخصصی مارلیک</h2>
            <div className="gold-line"></div>
          </div>

          <div className="grid-3">
            {[
              {
                icon: "🧠",
                title: "هوش مصنوعی",
                text: "مدل‌های یادگیری عمیق و سیستم‌های خبره برای خودکارسازی فرآیندهای پیچیده سازمانی.",
              },
              {
                icon: "📱",
                title: "توسعه پیشرفته",
                text: "ساخت اپلیکیشن‌های موبایل و وب با آخرین استانداردهای جهانی و تجربه کاربری لوکس.",
              },
              {
                icon: "🛡️",
                title: "امنیت هوشمند",
                text: "حفاظت یکپارچه از دارایی‌های دیجیتال با استفاده از هوش مصنوعی در شناسایی تهدیدها.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="card glass-card"
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ willChange: "transform, opacity" }}
              >
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ═══════ About / Story Section ═══════ */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid-2 grid-loose grid-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className={styles.aboutImageWrapper}>
                <Image
                  src="/tech-fusion.png"
                  alt="Marlik Tech-Heritage Fusion"
                  width={600}
                  height={600}
                  sizes="(max-width: 900px) 90vw, 560px"
                  className={styles.aboutImage}
                  priority
                />
                <div className={styles.imageFrame}></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ willChange: "transform, opacity" }}
            >
              <span className="section-label">OUR PHILOSOPHY</span>
              <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                اصالت در کد، شکوه در اجرا
              </h2>
              <h3 className={`gold-gradient ${styles.aboutSubtitle}`}>
                پیوند هنر و تکنولوژی
              </h3>
              <p className={styles.bodyText}>
                ما در مارلیک معتقدیم که هر محصول دیجیتال یک اثر هنری است.
                همان‌طور که هنرمندان باستان با دقت و عشق بر جام‌های زرین نقش
                می‌زدند، ما نیز هر خط کد را با وسواس و مهندسی دقیق خلق می‌کنیم.
              </p>
              <p className={`${styles.bodyText} ${styles.bodyTextLast}`}>
                هدف ما فراتر از توسعه نرم‌افزار است؛ ما به دنبال خلق تجربه‌ای
                هستیم که شکوه میراث ما را در دنیای مدرن زنده نگه دارد.
              </p>
              <div className="ornament-bar ornament-bar-start">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ Stats Section ═══════ */}
      <section
        className="section"
        style={{
          background:
            "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)",
        }}
      >
        <div className="container">
          <div className="grid-2 grid-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="section-label">PERFORMANCE</span>
              <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
                نتایجی که هوش مصنوعی رقم می‌زند
              </h2>
              <p className={`${styles.bodyText} ${styles.bodyTextLast}`}>
                مقایسه عملکرد سیستم‌های مجهز به هوش مصنوعی مارلیک در برابر
                روش‌های سنتی بازار.
              </p>
              <div className="ornament-bar ornament-bar-start">
                <span></span>
                <span></span>
              </div>
            </motion.div>
            <div className={styles.statsContainer}>
              <motion.div
                className={styles.statCard}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ willChange: "transform, opacity" }}
              >
                <div className={styles.statRow}>
                  <span style={{ fontWeight: 800 }}>بهره‌وری MARLIK.AI</span>
                  <span className={`gold-gradient ${styles.statValue}`}>
                    92%
                  </span>
                </div>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>

              <motion.div
                className={styles.statCard}
                style={{
                  opacity: 0.8,
                  transform: "scale(0.95)",
                  willChange: "transform, opacity",
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className={styles.statRow}>
                  <span style={{ color: "var(--text-muted)" }}>
                    میانگین بازار فناوری
                  </span>
                  <span style={{ color: "var(--text-muted)", fontWeight: 800 }}>
                    65%
                  </span>
                </div>
                <div
                  className={styles.progressBar}
                  style={{ background: "var(--bg-tertiary)" }}
                >
                  <motion.div
                    className={styles.progressFill}
                    style={{ background: "var(--text-muted)" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Plans Section ═══════ */}
      <section
        id="plans"
        className="section"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="container">
          <div className="section-head">
            <span className="section-label">PRICING</span>
            <h2 className="section-title">پلن‌های همکاری هوشمند</h2>
            <div className="gold-line"></div>
          </div>

          <div className="grid-2">
            <motion.div
              className={`${styles.planCard} glass-card`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }}
            >
              <h3 className={styles.planTitle}>پلن پایه</h3>
              <ul className={styles.planList}>
                <li>تحلیل هوشمند داده‌های محدود</li>
                <li>توسعه اپلیکیشن تک پلتفرم (Android)</li>
                <li>پشتیبانی فنی ۶ ماهه</li>
              </ul>
              <button className={`btn-outline ${styles.planBtn}`}>
                مشاوره اولیه
              </button>
            </motion.div>
            <motion.div
              className={`${styles.planCard} ${styles.planFeatured} glass-card`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className={styles.featuredBadge}>انتخاب اول سازمان‌ها</div>
              <h3
                className={`gold-gradient ${styles.planTitle} ${styles.planTitleFeatured}`}
              >
                پلن پیشرفته
              </h3>
              <ul className={styles.planList}>
                <li>سیستم‌های اختصاصی هوش مصنوعی</li>
                <li>توسعه چند پلتفرم (iOS, Android, Web)</li>
                <li>امنیت اختصاصی و سرور مارلیک</li>
                <li>پشتیبانی VIP بیست و چهار ساعته</li>
              </ul>
              <button className={`btn-primary ${styles.planBtn}`}>
                شروع همکاری استراتژیک
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ Contact Section ═══════ */}
      <section id="contact" className="section">
        <div className="container">
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="grid-2 grid-center">
              <div className={styles.ctaText}>
                <h2 className={`section-title ${styles.ctaTitle}`}>
                  ایده‌هایتان را به واقعیت تبدیل کنید
                </h2>
                <p className={styles.ctaParagraph}>
                  تیم متخصص مارلیک آماده است تا در تمامی مراحل تحول دیجیتال در
                  کنار شما باشد. برای دریافت مشاوره اختصاصی با ما در ارتباط
                  باشید.
                </p>
                <div className={styles.contactList}>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactIcon}>📧</span>
                    <span className={styles.contactValue}>tech@marlik.ai</span>
                  </div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactIcon}>📞</span>
                    <span className={styles.contactValue}>۰۲۱-۸۸۹۹۰۰۱۱</span>
                  </div>
                </div>
              </div>
              <div className={styles.ctaAction}>
                <button className={`btn-primary ${styles.ctaButton}`}>
                  ارسال پیام به کارشناسان
                </button>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  پاسخگویی در کمتر از ۲۴ ساعت
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ Footer ═══════ */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <div className={styles.logo}>
              <span className={`gold-gradient ${styles.footerLogo}`}>
                MARLIK.AI
              </span>
            </div>
            <div className={styles.footerText}>
              <p className={styles.footerTagline}>
                شکوه دیروز، هوش امروز، آینده‌ای درخشان
              </p>
              <p className={styles.footerCopy}>
                © ۲۰۲۶ تمامی حقوق برای شرکت مارلیک محفوظ است.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
