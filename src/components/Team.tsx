import { FunctionComponent } from "react";
import styles from "./Team.module.css";

const Team: FunctionComponent = () => {
  return (
    <section className={styles.team}>
      <div className={styles.shapeNonilliard}>
        <div className={styles.sectionTitle}>
          <div className={styles.content}>
            <h1 className={styles.heading}>Our Experts</h1>
          </div>
        </div>
        <div className={styles.imageMillilliard}>
          <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.row}>
          <div className={styles.content2}>
            <div className={styles.card}>
              <div className={styles.wrapperPlaceholderImage}>
                <img
                  className={styles.placeholderImageIcon}
                  alt=""
                  src="/placeholder-image-8@2x.png"
                />
              </div>
              <div className={styles.content3}>
                <div className={styles.title}>
                  <div className={styles.name}>Jane Doe</div>
                  <div className={styles.imageGallery}>Experience 5+ Years</div>
                  <div className={styles.jobTitle}>Therapist</div>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.wrapperPlaceholderImage1}>
                <img
                  className={styles.placeholderImageIcon1}
                  alt=""
                  src="/placeholder-image-8@2x.png"
                />
              </div>
              <div className={styles.content4}>
                <div className={styles.title1}>
                  <div className={styles.name1}>Full name</div>
                  <div className={styles.text}>Experience 5+ Years</div>
                  <div className={styles.jobTitle1}>Job title</div>
                </div>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.wrapperPlaceholderImage2}>
                <img
                  className={styles.placeholderImageIcon2}
                  alt=""
                  src="/placeholder-image-8@2x.png"
                />
              </div>
              <div className={styles.content5}>
                <div className={styles.title2}>
                  <div className={styles.name2}>Full name</div>
                  <div className={styles.text1}>Experience 5+ Years</div>
                  <div className={styles.jobTitle2}>Job title</div>
                </div>
              </div>
            </div>
            <div className={styles.card3}>
              <div className={styles.wrapperPlaceholderImage3}>
                <img
                  className={styles.placeholderImageIcon3}
                  alt=""
                  src="/placeholder-image-8@2x.png"
                />
              </div>
              <div className={styles.content6}>
                <div className={styles.title3}>
                  <div className={styles.name3}>Full name</div>
                  <div className={styles.loremIpsumDolor}>
                    Experience 5+ Years
                  </div>
                  <div className={styles.jobTitle3}>Job title</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content7}>
            <div className={styles.buttonBar}>
              <div className={styles.sliderDots}>
                <div className={styles.dot} />
                <div className={styles.dot1} />
                <div className={styles.dot2} />
                <div className={styles.dot3} />
                <div className={styles.dot4} />
              </div>
            </div>
            <div className={styles.sliderButtons}>
              <button className={styles.button}>
                <img className={styles.icon} alt="" src="/icon.svg" />
              </button>
              <button className={styles.button1}>
                <img className={styles.icon1} alt="" src="/icon-1.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
