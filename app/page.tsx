'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
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
          <span className="gold-gradient" style={{ fontWeight: 900 }}>MARLIK.AI</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#services">خدمات</a>
          <a href="#about">داستان ما</a>
          <a href="#plans">پلن‌ها</a>
        </div>
        <motion.a
          href="#contact"
          className="btn-primary"
          style={{ padding: '0.6rem 1.8rem', borderRadius: '99px', fontSize: '0.85rem' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          شروع پروژه
        </motion.a>
      </motion.nav>

      {/* ═══════ Hero Section ═══════ */}
      <section className={styles.hero}>
        <motion.div
          className="container"
          style={{ position: 'relative', zIndex: 10 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.heroContent}>
            <motion.div variants={itemVariants} className="badge" style={{ background: 'white', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
              <span className={styles.ornamentDot}></span>
              میراث شکوه پارس در دنیای الگوریتم‌ها
            </motion.div>

            <motion.h1 variants={itemVariants} className="section-title" style={{ marginTop: '2.5rem', letterSpacing: '-0.02em' }}>
              دپارتمان هوش مصنوعی <br />
              <span className="gold-gradient" style={{ fontSize: '1.1em', display: 'inline-block' }}>
                MARLIK.AI
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="section-subtitle" style={{ margin: '2.5rem auto', fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              ترکیب شکوه تمدن کهن با قدرت الگوریتم‌های مدرن. ما آینده شما را با دقت هنرمندان باستان و سرعت تکنولوژی فردا می‌سازیم.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center' }}>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="btn-primary" style={{ borderRadius: '99px', padding: '1rem 2.5rem' }}>درخواست دمو</motion.button>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="btn-outline" style={{ borderRadius: '99px', padding: '1rem 2.5rem', border: '1px solid var(--border-gold)' }}>داستان ما</motion.button>
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
        style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="section-label">EXPERT SOLUTIONS</span>
            <h2 className="section-title">خدمات تخصصی مارلیک</h2>
            <div className="gold-line"></div>
          </div>

          <div className="grid-3">
            {[
              { icon: '🧠', title: 'هوش مصنوعی', text: 'مدل‌های یادگیری عمیق و سیستم‌های خبره برای خودکارسازی فرآیندهای پیچیده سازمانی.' },
              { icon: '📱', title: 'توسعه پیشرفته', text: 'ساخت اپلیکیشن‌های موبایل و وب با آخرین استانداردهای جهانی و تجربه کاربری لوکس.' },
              { icon: '🛡️', title: 'امنیت هوشمند', text: 'حفاظت یکپارچه از دارایی‌های دیجیتال با استفاده از هوش مصنوعی در شناسایی تهدیدها.' }
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
                <h3 style={{ margin: '1.25rem 0', textAlign: 'center', fontWeight: 800 }}>{service.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.7' }}>
                  {service.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ═══════ About / Story Section ═══════ */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
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
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>اصالت در کد، شکوه در اجرا</h2>
              <h3 className="gold-gradient" style={{ marginBottom: '1.25rem', fontSize: '2rem', fontWeight: 900 }}>پیوند هنر و تکنولوژی</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                ما در مارلیک معتقدیم که هر محصول دیجیتال یک اثر هنری است. همان‌طور که هنرمندان باستان با دقت و عشق بر جام‌های زرین نقش می‌زدند، ما نیز هر خط کد را با وسواس و مهندسی دقیق خلق می‌کنیم.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                هدف ما فراتر از توسعه نرم‌افزار است؛ ما به دنبال خلق تجربه‌ای هستیم که شکوه میراث ما را در دنیای مدرن زنده نگه دارد.
              </p>
              <div className="ornament-bar">
                <span></span><span></span><span></span><span></span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ Stats Section ═══════ */}
      <section className="section" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="section-label">PERFORMANCE</span>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>نتایجی که هوش مصنوعی رقم می‌زند</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
                مقایسه عملکرد سیستم‌های مجهز به هوش مصنوعی مارلیک در برابر روش‌های سنتی بازار.
              </p>
              <div className="ornament-bar" style={{ marginBottom: '2rem' }}>
                <span></span><span></span>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontWeight: 800 }}>بهره‌وری MARLIK.AI</span>
                  <span className="gold-gradient" style={{ fontSize: '1.75rem', fontWeight: 900 }}>92%</span>
                </div>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>

              <motion.div
                className={styles.statCard}
                style={{ opacity: 0.8, transform: 'scale(0.95)', willChange: "transform, opacity" }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>میانگین بازار فناوری</span>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 800 }}>65%</span>
                </div>
                <div className={styles.progressBar} style={{ background: 'var(--bg-tertiary)' }}>
                  <motion.div
                    className={styles.progressFill}
                    style={{ background: 'var(--text-muted)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '65%' }}
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
      <section id="plans" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
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
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 800 }}>پلن پایه</h3>
              <ul className={styles.planList}>
                <li>تحلیل هوشمند داده‌های محدود</li>
                <li>توسعه اپلیکیشن تک پلتفرم (Android)</li>
                <li>پشتیبانی فنی ۶ ماهه</li>
              </ul>
              <button className="btn-outline" style={{ marginTop: '2.5rem', width: '100%', borderRadius: '99px' }}>مشاوره اولیه</button>
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
              <h3 className="gold-gradient" style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 900 }}>پلن پیشرفته</h3>
              <ul className={styles.planList}>
                <li>سیستم‌های اختصاصی هوش مصنوعی</li>
                <li>توسعه چند پلتفرم (iOS, Android, Web)</li>
                <li>امنیت اختصاصی و سرور مارلیک</li>
                <li>پشتیبانی VIP بیست و چهار ساعته</li>
              </ul>
              <button className="btn-primary" style={{ marginTop: '2.5rem', width: '100%', borderRadius: '99px' }}>شروع همکاری استراتژیک</button>
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
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div style={{ textAlign: 'right' }}>
                <h2 className="section-title" style={{ fontSize: '2.75rem' }}>ایده‌هایتان را به واقعیت تبدیل کنید</h2>
                <p style={{ margin: '2rem 0', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                  تیم متخصص مارلیک آماده است تا در تمامی مراحل تحول دیجیتال در کنار شما باشد. برای دریافت مشاوره اختصاصی با ما در ارتباط باشید.
                </p>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactIcon}>📧</span>
                    <span style={{ fontWeight: 700 }}>tech@marlik.ai</span>
                  </div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactIcon}>📞</span>
                    <span style={{ fontWeight: 700 }}>۰۲۱-۸۸۹۹۰۰۱۱</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <button className="btn-primary" style={{ width: '100%', padding: '1.25rem', borderRadius: '99px', fontSize: '1.1rem' }}>ارسال پیام به کارشناسان</button>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>پاسخگویی در کمتر از ۲۴ ساعت</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ Footer ═══════ */}
      <footer className={styles.footer}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '3rem' }}>
            <div className={styles.logo}>
              <span className="gold-gradient" style={{ fontWeight: 900, fontSize: '1.75rem' }}>MARLIK.AI</span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                شکوه دیروز، هوش امروز، آینده‌ای درخشان
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                © ۲۰۲۶ تمامی حقوق برای شرکت مارلیک محفوظ است.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
