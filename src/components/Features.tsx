import { FunctionComponent } from "react";
import Column from "./Column";
import styles from "./Features.module.css";

const Features: FunctionComponent = () => {
  return (
    <section className={styles.features} id="features">
      <div className={styles.featureTitle}>
        <div className={styles.sectionTitle}>
          <h1 className={styles.heading}>What Makes us Unique</h1>
        </div>
      </div>
      <div className={styles.featureLists}>
        <div className={styles.listItemParent}>
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
            <div className={styles.text2}>
              Our mental health therapist monitor your progress and support you
              even between sessions through regular check-ins, self-care tools,
              and more.
            </div>
          </div>
        </div>
        <div className={styles.listItemGroup}>
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
            <div className={styles.text3}>
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
            <div className={styles.text4}>
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
            <div className={styles.text5}>
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
            <Column
              materialSymbolscontactPho="/materialsymbolscontactphone.svg"
              text="Phone Call"
            />
            <Column
              materialSymbolscontactPho="/materialsymbolsmarkchatread.svg"
              text="Outside Counselling"
            />
            <Column
              materialSymbolscontactPho="/materialsymbolsvideochat.svg"
              text="Video Call"
            />
            <Column
              materialSymbolscontactPho="/materialsymbolsassignmentturnedin.svg"
              text="Assessment"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
