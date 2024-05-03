import { FunctionComponent } from "react";
import styles from "./Weoffer.module.css";

const Weoffer: FunctionComponent = () => {
  return (
    <section className={styles.weoffer}>
      <div className={styles.shapeQuartet}>
        <div className={styles.sectionTitle}>
          <h1 className={styles.heading}>We Offer</h1>
        </div>
      </div>
      <div className={styles.imageOctetParent}>
        <div className={styles.imageOctet}>
          <div className={styles.listItem}>
            <img
              className={styles.mdicertificateIcon}
              loading="lazy"
              alt=""
              src="/mdicertificate.svg"
            />
            <h1 className={styles.heading1}>
              <p className={styles.highly}>Highly</p>
              <p className={styles.qualifiedExperts}>Qualified Experts</p>
            </h1>
            <div className={styles.text}>
              Our mental health therapist are qualified and trained to deliver
              quality care and clinically validated treatment interventions for
              all kinds of mental health concerns.
            </div>
          </div>
          <div className={styles.listItem1}>
            <img
              className={styles.materialSymbolsshieldWithHIcon}
              loading="lazy"
              alt=""
              src="/materialsymbolsshieldwithheartrounded.svg"
            />
            <h1 className={styles.heading2}>
              <p className={styles.focusOn}>{`Focus on `}</p>
              <p className={styles.confidentiality}>Confidentiality</p>
            </h1>
            <div className={styles.text1}>
              We uphold the hightest standards of data security and maintain
              100% client confidentiality in line with global best practices.
            </div>
          </div>
          <div className={styles.listItem2}>
            <img
              className={styles.materialSymbolspottedPlantIcon}
              alt=""
              src="/materialsymbolspottedplant.svg"
            />
            <h1 className={styles.heading3}>
              <p className={styles.ongoing}>Ongoing</p>
              <p
                className={styles.monitoringSupport}
              >{`Monitoring & Support`}</p>
            </h1>
            <div className={styles.pathQuaragintasixteen}>
              Our mental health therapist monitor your progress and support you
              even between sessions through regular check-ins, self-care tools,
              and more.
            </div>
          </div>
        </div>
        <div className={styles.imageOctet1}>
          <div className={styles.listItem3}>
            <img
              className={styles.materialSymbolsfactCheckIcon}
              loading="lazy"
              alt=""
              src="/materialsymbolsfactcheck.svg"
            />
            <h1 className={styles.heading4}>
              <p className={styles.proprietary}>Proprietary</p>
              <p className={styles.clinicalProtocols}>Clinical Protocols</p>
            </h1>
            <div className={styles.text2}>
              Our mental health therapist monitor your progress and support you
              even between sessions through regular check-ins, self-care tools,
              and more.
            </div>
          </div>
          <div className={styles.listItem4}>
            <img
              className={styles.materialSymbolsinteractiveSIcon}
              loading="lazy"
              alt=""
              src="/materialsymbolsinteractivespace.svg"
            />
            <h1 className={styles.heading5}>
              <p className={styles.integrationWith}>{`Integration with `}</p>
              <p className={styles.psychiatry}>Psychiatry</p>
            </h1>
            <div className={styles.text3}>
              Our mental health therapists work closely with our psychiatrists
              when needed, to build an integrated care management plan to
              deliver the best outcomes for each client.
            </div>
          </div>
          <div className={styles.listItem5}>
            <img
              className={styles.materialSymbolssupervisedUsIcon}
              alt=""
              src="/materialsymbolssupervisedusercircleoutline.svg"
            />
            <h1 className={styles.heading6}>
              <p className={styles.personalAnd}>Personal and</p>
              <p className={styles.peerSupervision}>Peer Supervision</p>
            </h1>
            <div className={styles.text4}>
              We’ve developed clinical supervision guidelines and auditing
              processes to ensure our team of therapists is able to help each
              client move towards their goals.
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.heading7}>Connect with us on</h1>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.column}>
              <div className={styles.avatar}>
                <img
                  className={styles.materialSymbolscontactPhoneIcon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolscontactphone.svg"
                />
                <div className={styles.avatarContent}>
                  <h3 className={styles.pathSeptilliard}>Phone Call</h3>
                </div>
              </div>
            </div>
            <div className={styles.column1}>
              <div className={styles.avatar1}>
                <img
                  className={styles.materialSymbolsmarkChatReaIcon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolsmarkchatread.svg"
                />
                <div className={styles.avatarContent1}>
                  <h3 className={styles.text5}>Outside Counselling</h3>
                </div>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.avatar2}>
                <img
                  className={styles.materialSymbolsvideoChatIcon}
                  alt=""
                  src="/materialsymbolsvideochat.svg"
                />
                <div className={styles.avatarContent2}>
                  <h3 className={styles.text6}>Video Call</h3>
                </div>
              </div>
            </div>
            <div className={styles.column3}>
              <div className={styles.avatar3}>
                <img
                  className={styles.materialSymbolsassignmentTuIcon}
                  alt=""
                  src="/materialsymbolsassignmentturnedin.svg"
                />
                <div className={styles.avatarContent3}>
                  <h3 className={styles.text7}>Assessment</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weoffer;
