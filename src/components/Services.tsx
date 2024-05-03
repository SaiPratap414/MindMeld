import { FunctionComponent } from "react";
import ListItem from "./ListItem";
import styles from "./Services.module.css";

const Services: FunctionComponent = () => {
  return (
    <section className={styles.services}>
      <img
        className={styles.asset11}
        loading="lazy"
        alt=""
        src="/asset-1-1.svg"
      />
      <div className={styles.content}>
        <div className={styles.sectionTitle}>
          <div className={styles.collapsiblePanel}>
            <div className={styles.content1}>
              <h1 className={styles.heading}>Our Services Tailored for You</h1>
              <div className={styles.imageCarousel}>
                Offering a full spectrum of mental health solutions, from
                counselling to community support and educational assessments,
                catering to individuals, couples, and families.
              </div>
              <div className={styles.actions}>
                <button className={styles.button}>
                  <div className={styles.button1}>Call Us</div>
                </button>
                <button className={styles.button2}>
                  <div className={styles.button3}>Book Appointment</div>
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
              <div className={styles.cardStack}>
                Specialized counselling services focused on adult mental health,
                addressing issues like anxiety, depression, and stress with
                tailored strategies to promote personal growth and emotional
                resilience.
              </div>
            </div>
            <div className={styles.listItem1}>
              <img
                className={styles.bannerAdIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <h1 className={styles.heading2}>Adult Psychiatry</h1>
              <div className={styles.text}>
                <p className={styles.comprehensiveEvaluationsAnd}>
                  Comprehensive evaluations and helping adults manage mental
                  health conditions with personalized meditation management and
                  interventions.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.list1}>
            <ListItem
              group="/group-1.svg"
              heading="Children First Services"
              text="Dedicated to enhancing children's mental and emotional health through targeted interventions, supportive counseling, and holistic care tailored to young minds and their unique needs."
            />
            <ListItem
              group="/emojionemonotonecouplewithheart.svg"
              heading="Couples Counselling"
              text="Strengthen your partnership; designed to improve communication, resolve conflicts, and deepen understanding between partners for a healthier, more fulfilling relationship."
              propWidth="64px"
              propHeight="64px"
              propOverflow="hidden"
            />
          </div>
          <div className={styles.list2}>
            <ListItem
              group="/vector-1.svg"
              heading="Self-Care"
              text="Embrace self-care with our guided programs that focus on stress reduction, emotional wellness, and personal development, helping you maintain balance and wellbeing in your daily life."
              propWidth="57.1px"
              propHeight="60px"
              propOverflow="unset"
            />
            <ListItem
              group="/vector-2.svg"
              heading="Community"
              text="Building a vibrant community through workshops and support groups that promote mental health awareness, foster connections, and offer support in a welcoming environment."
              propWidth="62.2px"
              propHeight="60px"
              propOverflow="unset"
            />
          </div>
          <div className={styles.list3}>
            <div className={styles.listItem2}>
              <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
              <h1 className={styles.heading3}>Psychometric Assessments</h1>
              <div className={styles.shapeSet}>
                Detailed psychometric evaluations to accurately assess cognitive
                abilities, personality traits, and emotional functioning,
                providing insights that help tailor educational and therapeutic
                approaches.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
