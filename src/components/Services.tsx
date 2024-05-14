import { FunctionComponent } from "react";
import styles from "./Services.module.css";

const Services: FunctionComponent = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.services1}>
        <img
          className={styles.asset11}
          loading="lazy"
          alt=""
          src="/asset-1-1.svg"
        />
        <div className={styles.content}>
          <div className={styles.sectionTitle}>
            <div className={styles.contentWrapper}>
              <div className={styles.content1}>
                <h1 className={styles.heading}>
                  Our Services Tailored for You
                </h1>
                <div className={styles.description}>
                  Offering a full spectrum of mental health solutions, from
                  counselling to community support and educational assessments,
                  catering to individuals, couples, and families.
                </div>
                <div className={styles.actions}>
                <button className={styles.button}>
  <a href="tel:+917303113594" className={styles.button1}>
    Call Us
  </a>
</button>

<button className={styles.button2}>
  <a
    href="https://wa.me/917303113594?text=I%20would%20like%20to%20book%20an%20appointment"
    className={styles.button3}
    target="_blank"
    rel="noopener noreferrer"
  >
    Book Appointment
  </a>
</button>

                </div>
              </div>
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
                <h1 className={styles.heading1}>Adult Therapy</h1>
                <div className={styles.itemDescription}>
                  Specialized counselling services focused on adult mental
                  health, addressing issues like anxiety, depression, and stress
                  with tailored strategies to promote personal growth and
                  emotional resilience.
                </div>
              </div>
              <div className={styles.listItem1}>
                <img
                  className={styles.listIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <h1 className={styles.heading2}>Adult Psychiatry</h1>
                <div className={styles.text}>
                  <p className={styles.comprehensiveEvaluationsAnd}>
                    Comprehensive evaluations and helping adults manage mental
                    health conditions with personalized meditation management
                    and interventions.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.list1}>
              <div className={styles.listItem2}>
                <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
                <h1 className={styles.heading3}>Children First Services</h1>
                <div className={styles.text1}>
                  Dedicated to enhancing children's mental and emotional health
                  through targeted interventions, supportive counseling, and
                  holistic care tailored to young minds and their unique needs.
                </div>
              </div>
              <div className={styles.listItem3}>
                <img
                  className={styles.emojioneMonotonecoupleWithIcon}
                  loading="lazy"
                  alt=""
                  src="/emojionemonotonecouplewithheart.svg"
                />
                <h1 className={styles.heading4}>Couples Counselling</h1>
                <div className={styles.text2}>
                  Strengthen your partnership; designed to improve
                  communication, resolve conflicts, and deepen understanding
                  between partners for a healthier, more fulfilling
                  relationship.
                </div>
              </div>
            </div>
            <div className={styles.list2}>
              <div className={styles.listItem4}>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
                <h1 className={styles.heading5}>Self-Care</h1>
                <div className={styles.text3}>
                  Embrace self-care with our guided programs that focus on
                  stress reduction, emotional wellness, and personal
                  development, helping you maintain balance and wellbeing in
                  your daily life.
                </div>
              </div>
              <div className={styles.listItem5}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-2.svg"
                />
                <h1 className={styles.heading6}>Community</h1>
                <div className={styles.text4}>
                  Building a vibrant community through workshops and support
                  groups that promote mental health awareness, foster
                  connections, and offer support in a welcoming environment.
                </div>
              </div>
            </div>
            <div className={styles.list3}>
              <div className={styles.listItem6}>
                <img
                  className={styles.singleListIcon}
                  alt=""
                  src="/vector-3.svg"
                />
                <h1 className={styles.heading7}>Psychometric Assessments</h1>
                <div className={styles.text5}>
                  Detailed psychometric evaluations to accurately assess
                  cognitive abilities, personality traits, and emotional
                  functioning, providing insights that help tailor educational
                  and therapeutic approaches.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
