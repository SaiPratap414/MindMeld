import { FunctionComponent, useState } from "react";
import styles from "./Mob.module.css";

const Mob: FunctionComponent = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

   const handleClick = () => {
    // Toggle the state of the navbar
    setIsNavbarOpen((prevState) => !prevState);
  };
  return (
    <div className={styles.mob}>
      <section className={styles.homepage}>
        <img
          className={styles.placeholderImageIcon}
          loading="lazy"
          alt=""
          src="/placeholder-image@2x.png"
        />
        <header className={styles.container}>
          <div className={styles.asset21Parent}>
            <img
              className={styles.asset21}
              loading="lazy"
              alt=""
              src="/asset-2-1.svg"
            />
            <div className={styles.mindmelddParent}>
              <img
                className={styles.mindmelddIcon}
                loading="lazy"
                alt=""
                src="/mindmeldd.svg"
              />
              <div className={styles.loremIpsumDolor}>Untangled Thoughts</div>
            </div>
          </div>
          <button className={styles.icon} onClick={handleClick} aria-label="Open navigation menu">
            {/* Hamburger Icon */}
            <img
              className={styles.cihamburgerMdIcon}
              loading="lazy"
              alt=""
              src="/cihamburgermd.svg"
            />
          </button>
          {isNavbarOpen && (
            <div className={styles.dropdownMenu}>
              <button className={styles.dropdownButton}>Services</button>
              <button className={styles.dropdownButton}>Experts</button>
              <button className={styles.dropdownButton}>Offerings</button>
              <button className={styles.dropdownButtonLogin}>
              <div className={styles.button1}>Login</div>
              </button>

            </div>
          )}

        </header>
        <div className={styles.content}>
          <div className={styles.column}>
            <b className={styles.mediumLengthHero}>
              Empower Your Mind, Embrace Your Journey
            </b>
          </div>
          <div className={styles.column1}>
            <div className={styles.loremIpsumDolor1}>
              Personalized therapy and support for everyone.
            </div>
            <div className={styles.actions}>
            <button className={styles.button}>
  <a href="tel:+917303113594" className={styles.button1}>
    Call Us
  </a>
</button>
              <button className={styles.button2}>
                <div className={styles.button3}>Sign Up</div>
              </button>
            </div>
          </div>
        </div>
        <img
          className={styles.layer2Icon}
          loading="lazy"
          alt=""
          src="/layer-2.svg"
        />
      </section>
      <section className={styles.services}>
        <div className={styles.content1}>
          <div className={styles.sectionTitle}>
            <div className={styles.contentWrapper}>
              <div className={styles.content2}>
                <h3 className={styles.heading}>
                  Our Services Tailored for You
                </h3>
                <div className={styles.servicesDescription}>
                  Offering a full spectrum of mental health solutions, from
                  counselling to community support and educational assessments,
                  catering to individuals, couples, and families.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.actions1}>
          <button className={styles.button4}>
  <a href="tel:+917303113594" className={styles.button5}>
    Call Us
  </a>
</button>
<button className={styles.button6}>
  <a
    href="https://wa.me/917303113594?text=I%20would%20like%20to%20book%20an%20appointment"
    className={styles.button7}
    target="_blank"
    rel="noopener noreferrer"
  >
    Book Appointment
  </a>
</button>
          </div>
          <div className={styles.listItemParent}>
            <div className={styles.listItem}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group.svg"
              />
              <b className={styles.heading1}>Adult Therapy</b>
              <div className={styles.servicesListDescriptions}>
                Specialized counselling services focused on adult mental health,
                addressing issues like anxiety, depression, and stress with
                tailored strategies to promote personal growth and emotional
                resilience.
              </div>
            </div>
            <div className={styles.listItem1}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <b className={styles.heading2}>Adult Psychiatry</b>
              <div className={styles.text}>
                Comprehensive evaluations and helping adults manage mental
                health conditions with personalized meditation management and
                interventions.
              </div>
            </div>
            <div className={styles.listItem2}>
              <img
                className={styles.groupIcon1}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
              <b className={styles.heading3}>Children First Services</b>
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
              <b className={styles.heading4}>Couples Counselling</b>
              <div className={styles.text2}>
                Strengthen your partnership; designed to improve communication,
                resolve conflicts, and deepen understanding between partners for
                a healthier, more fulfilling relationship.
              </div>
            </div>
            <div className={styles.listItem4}>
              <img
                className={styles.vectorIcon1}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <b className={styles.heading5}>Self-Care</b>
              <div className={styles.text3}>
                Embrace self-care with our guided programs that focus on stress
                reduction, emotional wellness, and personal development, helping
                you maintain balance and wellbeing in your daily life.
              </div>
            </div>
            <div className={styles.listItem5}>
              <img
                className={styles.vectorIcon2}
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
              <b className={styles.heading6}>Community</b>
              <div className={styles.text4}>
                Building a vibrant community through workshops and support
                groups that promote mental health awareness, foster connections,
                and offer support in a welcoming environment.
              </div>
            </div>
            <div className={styles.listItem6}>
              <img
                className={styles.vectorIcon3}
                loading="lazy"
                alt=""
                src="/vector-3.svg"
              />
              <b className={styles.heading7}>Psychometric Assessments</b>
              <div className={styles.text5}>
                Detailed psychometric evaluations to accurately assess cognitive
                abilities, personality traits, and emotional functioning,
                providing insights that help tailor educational and therapeutic
                approaches.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.conditions}>
        <div className={styles.content3}>
          <div className={styles.sectionTitle1}>
            <div className={styles.contentContainer}>
              <div className={styles.content4}>
                <h3 className={styles.heading8}>
                  Comprehensive Care for Various Conditions
                </h3>
                <div className={styles.conditionsDescription}>
                  Providing expert care and tailored treatment plans for a range
                  of mental health conditions, helping you navigate and overcome
                  your unique challenges.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.conditionsGridRowParent}>
            <div className={styles.conditionsGridRow}>
              <div className={styles.conditionsGridItem}>
                <div className={styles.bipolarDisorder}>
                  <p className={styles.bipolar}>Bipolar</p>
                  <p className={styles.disorder}>Disorder</p>
                </div>
              </div>
              <div className={styles.ocdWrapper}>
                <div className={styles.ocd}>OCD</div>
              </div>
            </div>
            <div className={styles.conditionsGridRow1}>
              <div className={styles.anxietyWrapper}>
                <div className={styles.anxiety}>Anxiety</div>
              </div>
              <div className={styles.ptsdWrapper}>
                <div className={styles.ptsd}>PTSD</div>
              </div>
            </div>
            <div className={styles.conditionsGridRow2}>
              <div className={styles.socialAnxietyWrapper}>
                <div className={styles.socialAnxiety}>
                  <p className={styles.social}>Social</p>
                  <p className={styles.anxiety1}>Anxiety</p>
                </div>
              </div>
              <div className={styles.womensHealthWrapper}>
                <div className={styles.womensHealth}>
                  <p className={styles.womens}>Women’s</p>
                  <p className={styles.health}>Health</p>
                </div>
              </div>
            </div>
            <div className={styles.conditionsGridRow3}>
              <div className={styles.depressionWrapper}>
                <div className={styles.depression}>Depression</div>
              </div>
              <div className={styles.adultAdhdWrapper}>
                <div className={styles.adultAdhd}>
                  <p className={styles.adult}>Adult</p>
                  <p className={styles.adhd}>ADHD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className={styles.content5}>
          <div className={styles.sectionTitle2}>
            <div className={styles.contentFrame}>
              <div className={styles.content6}>
                <h3 className={styles.heading9}>What Makes us Unique</h3>
              </div>
            </div>
          </div>
          <div className={styles.listItem7}>
            <img
              className={styles.mdicertificateIcon}
              loading="lazy"
              alt=""
              src="/mdicertificate.svg"
            />
            <b className={styles.heading10}>
              <p className={styles.highly}>Highly</p>
              <p className={styles.qualifiedExperts}>Qualified Experts</p>
            </b>
            <div className={styles.featuresListDescription}>
              Our mental health therapist are qualified and trained to deliver
              quality care and clinically validated treatment interventions for
              all kinds of mental health concerns.
            </div>
          </div>
          <div className={styles.listItem8}>
            <img
              className={styles.mdicertificateIcon1}
              loading="lazy"
              alt=""
              src="/mdicertificate.svg"
            />
            <b className={styles.heading11}>
              <p className={styles.focusOn}>{`Focus on `}</p>
              <p className={styles.confidentiality}>Confidentiality</p>
            </b>
            <div className={styles.text6}>
              We uphold the hightest standards of data security and maintain
              100% client confidentiality in line with global best practices.
            </div>
          </div>
          <div className={styles.listItem9}>
            <img
              className={styles.mdicertificateIcon2}
              loading="lazy"
              alt=""
              src="/mdicertificate.svg"
            />
            <b className={styles.heading12}>
              <p className={styles.ongoing}>Ongoing</p>
              <p
                className={styles.monitoringSupport}
              >{`Monitoring & Support`}</p>
            </b>
            <div className={styles.text7}>
              Our mental health therapist monitor your progress and support you
              even between sessions through regular check-ins, self-care tools,
              and more.
            </div>
          </div>
          <div className={styles.listItem10}>
            <img
              className={styles.mdicertificateIcon3}
              loading="lazy"
              alt=""
              src="/mdicertificate.svg"
            />
            <b className={styles.heading13}>
              <p className={styles.proprietary}>Proprietary</p>
              <p className={styles.clinicalProtocols}>Clinical Protocols</p>
            </b>
            <div className={styles.text8}>
              Our mental health therapist monitor your progress and support you
              even between sessions through regular check-ins, self-care tools,
              and more.
            </div>
          </div>
          <div className={styles.listItem11}>
            <img
              className={styles.mdicertificateIcon4}
              loading="lazy"
              alt=""
              src="/mdicertificate.svg"
            />
            <b className={styles.heading14}>
              <p className={styles.integrationWith}>{`Integration with `}</p>
              <p className={styles.psychiatry}>Psychiatry</p>
            </b>
            <div className={styles.text9}>
              Our mental health therapists work closely with our psychiatrists
              when needed, to build an integrated care management plan to
              deliver the best outcomes for each client.
            </div>
          </div>
          <div className={styles.listItem12}>
            <img
              className={styles.mdicertificateIcon5}
              loading="lazy"
              alt=""
              src="/mdicertificate.svg"
            />
            <b className={styles.heading15}>
              <p className={styles.personalAnd}>Personal and</p>
              <p className={styles.peerSupervision}>Peer Supervision</p>
            </b>
            <div className={styles.text10}>
              We’ve developed clinical supervision guidelines and auditing
              processes to ensure our team of therapists is able to help each
              client move towards their goals.
            </div>
          </div>
        </div>
        <h3 className={styles.heading16}>
          <p className={styles.connectWith}>Connect with</p>
          <p className={styles.usOn}>us on</p>
        </h3>
        <div className={styles.featuresAvatarGridRowParent}>
          <div className={styles.featuresAvatarGridRow}>
            <div className={styles.featuresAvatarGridItem}>
              <div className={styles.column2}>
                <div className={styles.avatar}>
                  <img
                    className={styles.materialSymbolsvideoChatIcon}
                    loading="lazy"
                    alt=""
                    src="/materialsymbolsvideochat.svg"
                  />
                  <div className={styles.avatarContent}>
                    <div className={styles.text11}>Video Call</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column3}>
              <div className={styles.avatar1}>
                <img
                  className={styles.materialSymbolsassignmentTuIcon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolsassignmentturnedin.svg"
                />
                <div className={styles.avatarContent1}>
                  <div className={styles.text12}>Assessment</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.columnParent}>
            <div className={styles.column4}>
              <div className={styles.avatar2}>
                <img
                  className={styles.materialSymbolscontactPhoneIcon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolscontactphone.svg"
                />
                <div className={styles.avatarContent2}>
                  <div className={styles.text13}>Phone Call</div>
                </div>
              </div>
            </div>
            <div className={styles.column5}>
              <div className={styles.avatar3}>
                <img
                  className={styles.materialSymbolsmarkChatReaIcon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolsmarkchatread.svg"
                />
                <div className={styles.avatarContent3}>
                  <div className={styles.text14}>
                    <p className={styles.outside}>{`Outside `}</p>
                    <p className={styles.counselling}>Counselling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.team}>
        <div className={styles.sectionTitle3}>
          <div className={styles.content7}>
            <h3 className={styles.heading17}>Our Founders</h3>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.wrapperPlaceholderImage}>
            <img
              className={styles.placeholderImageIcon1}
              loading="lazy"
              alt=""
              src="/team1.jpg"
            />
          </div>
          <div className={styles.content8}>
            <div className={styles.title}>
              <div className={styles.name}>Ektaa Chaudhary</div>
              <div className={styles.teamBio}>Founder</div>
            </div>
          </div>
        </div>
        <div className={styles.card1}>
          <div className={styles.wrapperPlaceholderImage1}>
            <img
              className={styles.placeholderImageIcon2}
              loading="lazy"
              alt=""
              src="/team2.jpg"
            />
          </div>
          <div className={styles.content9}>
            <div className={styles.title1}>
              <div className={styles.name1}>Simran</div>
              <div className={styles.text15}>Co-Founder</div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.cta}>
        <div className={styles.column6}>
          <div className={styles.content10}>
            <h3 className={styles.heading18}>Start your journey with us</h3>
            <div className={styles.actions2}>
            <button className={styles.button8}>
  <a href="tel:+917303113594" className={styles.button9}>
    Call Us
  </a>
</button>
<button className={styles.button10}>
  <a
    href="https://wa.me/917303113594?text=I%20would%20like%20to%20book%20an%20appointment"
    className={styles.button11}
    target="_blank"
    rel="noopener noreferrer"
  >
    Book Appointment
  </a>
</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}>
            <img
              className={styles.asset211}
              loading="lazy"
              alt=""
              src="/asset-2-1-1.svg"
            />
            <div className={styles.footerLinks}>
              <div className={styles.servicesWrapper}>
                <div className={styles.services1}>Services</div>
              </div>
              <div className={styles.expertsWrapper}>
                <div className={styles.experts}>Experts</div>
              </div>
              <div className={styles.offerings}>Offerings</div>
            </div>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerContent}>
            <div className={styles.footerParagraph}>
              <div className={styles.text16}>
                <span>Contact</span>
                <span className={styles.span}>{` `}</span>
                <span>:</span>
                <span className={styles.span1}> 73031 13594</span>
              </div>
            </div>
            <div className={styles.text17}>
              <span>Address</span>
              <span className={styles.span2}>{` `}</span>
              <span>:</span>
              <span className={styles.sector116Noida}> Sector 116, Noida</span>
            </div>
          </div>
        </div>
        <div className={styles.credits}>
          <div className={styles.divider} />
        </div>
      </section>
    </div>
  );
};

export default Mob;
