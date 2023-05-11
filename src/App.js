import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header>
        <nav className={styles.navBar}>
          <div className={styles.navBox}>
            <div className={styles.navWrap}>
              <img
                className={styles.navLogo}
                alt="alignable"
                src="./images/logo-alignable-v3.svg"
              />
              <ul className={styles.navHeader}>
                <li>
                  <a className={styles.button} href="/#">
                    Learn
                  </a>
                </li>
                <li>
                  <a className={styles.button} href="/#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className={styles.button} href="/#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className={styles.button} href="/#">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className={styles.button} href="/#">
                    About
                  </a>
                </li>
                <li>
                  <a
                    className={`${styles.button} ${styles.buttonSignin}`}
                    href="/#"
                  >
                    Sign In
                  </a>
                </li>
                <li>
                  <a
                    className={`${styles.button} ${styles.buttonSignup}`}
                    href="/#"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.mainWebsite}>
        <section className={styles.mainBox}>
          <div className={styles.mainContainer}>
            <div className={styles.mainContainerCenterBox}>
              <h2 className={styles.bigText}>
                Build Your Network. Build Your Business.
              </h2>
              <div className={styles.signupFormWrapper}>
                <form className={styles.signupForm}>
                  <div className={styles.signupInputWrapper}>
                    <input
                      className={styles.inputMail}
                      label="false"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <input
                      className={styles.inputButton}
                      type="submit"
                      name="signup"
                      value="Sign Up For Free!"
                    />
                  </div>

                  <div className={styles.signupTerms}>
                    By submitting, you agree to the{' '}
                    <a href="/#">Alignable terms of use</a>
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.mainContainerPictureBox}>
              <div className={styles.mainContainerPictureBoxWrapper}>
                <img
                  alt="Jane and Ramon"
                  src="./images/story-2.png"
                  width="660"
                  height="615"
                />
              </div>
              <div className={styles.mainContainerPictureBoxTextLeft}>
                Jane and Ramon grew their businesses by growing their
                relationship on Alignable.
              </div>
              <div className={styles.mainContainerPictureBoxTextTop}>
                <div className={styles.mainContainerPictureBoxTextBig}>
                  Jane
                </div>
                <div className={styles.mainContainerPictureBoxTextSmall}>
                  Interior Designer
                </div>
              </div>
              <div className={styles.mainContainerPictureBoxTextRight}>
                <div className={styles.mainContainerPictureBoxTextBig}>
                  Ramon
                </div>
                <div className={styles.mainContainerPictureBoxTextSmall}>
                  Home Renovator
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mainDividerBox}>
          <div className={styles.mainDividerBoxWrapper}>
            <div className={styles.mainDividerBoxElement}>
              <img
                alt="Wall Street Journal"
                src="./images/wsj.svg"
                width="276"
                height="40"
              />
            </div>
            <div className={styles.mainDividerBoxElement}>
              <img
                alt="Forbes"
                src="./images/forbes.svg"
                width="118"
                height="40"
              />
            </div>
            <div className={styles.mainDividerBoxElement}>
              <img
                alt="Fast Company"
                src="./images/fast-company.svg"
                width="197"
                height="40"
              />
            </div>
            <div className={styles.mainDividerBoxElement}>
              <img
                alt="TechCrunch"
                src="./images/tech-crunch.svg"
                width="202"
                height="40"
              />
            </div>
            <div className={styles.mainDividerBoxElement}>
              <img
                alt="The Huffington Post"
                src="./images/huff-post.svg"
                width="86"
                height="40"
              />
            </div>
          </div>
        </section>
        <section className={styles.mainTestimonials}>
          <div className={styles.mainTestimonialsWrapper}>
            <div className={styles.mainTestimonialsQuoteRow}>
              <div className={styles.mainTestimonialsQuote}>
                <div className={styles.mainTestimonialsQuoteBubble}>
                  <div className={styles.mainTestimonialsQuoteBubbleStripe} />
                  <div className={styles.mainTestimonialsQuoteBubbleText}>
                    “34 requests for quotes and 14 sales in my first 3 days on
                    Alignable!”
                  </div>
                </div>
                <div className={styles.mainTestimonialsQuoteUser}>
                  <img alt="quote user" src="./images/icon-user1.png" />
                  <div className={styles.mainTestimonialsQuoteUserText}>
                    <div className={styles.mainTestimonialsQuoteUserTextOwner}>
                      Danielle Cuddie
                    </div>
                    <div
                      className={styles.mainTestimonialsQuoteUserTextBusiness}
                    >
                      Velocity Printing
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mainTestimonialsQuote}>
                <div className={styles.mainTestimonialsQuoteBubble}>
                  <div className={styles.mainTestimonialsQuoteBubbleStripe} />
                  <div className={styles.mainTestimonialsQuoteBubbleText}>
                    “Great resource for small businesses to network and get
                    referrals”
                  </div>
                </div>
                <div className={styles.mainTestimonialsQuoteUser}>
                  <img alt="quote user" src="./images/icon-user2.png" />
                  <div className={styles.mainTestimonialsQuoteUserText}>
                    <div className={styles.mainTestimonialsQuoteUserTextOwner}>
                      Felix L. Griffin
                    </div>
                    <div
                      className={styles.mainTestimonialsQuoteUserTextBusiness}
                    >
                      Lord & Griffin IT Solutions
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mainTestimonialsQuote}>
                <div className={styles.mainTestimonialsQuoteBubble}>
                  <div className={styles.mainTestimonialsQuoteBubbleStripe} />
                  <div className={styles.mainTestimonialsQuoteBubbleText}>
                    “Alignable is a fantastic way to promote your business”
                  </div>
                </div>
                <div className={styles.mainTestimonialsQuoteUser}>
                  <img alt="quote user" src="./images/icon-user3.png" />
                  <div className={styles.mainTestimonialsQuoteUserText}>
                    <div className={styles.mainTestimonialsQuoteUserTextOwner}>
                      Wouter Schipper
                    </div>
                    <div
                      className={styles.mainTestimonialsQuoteUserTextBusiness}
                    >
                      Chef Lekker Catering
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mainTestimonialsSeeMore}>
              <a href="/#" className={styles.mainTestimonialsSeeMoreTextLink}>
                <span> See what others have to say {`>`}</span>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.mainTrusted}>
          <div className={styles.mainTrustedWrapper}>
            <h2> Why Use Alignable?</h2>
            <div className={styles.mainTrustedFlexRow}>
              <div className={styles.mainTrustedFlexItem}>
                <div className={styles.mainTrustedFlexIcon}>
                  <img alt="referrals" src="./images/icon-more-referrals.svg" />
                </div>
                <h3>Get More Referrals</h3>
                <p>From small business owners like you</p>
              </div>
              <div className={styles.mainTrustedFlexItem}>
                <div className={styles.mainTrustedFlexIcon}>
                  <img
                    alt="visibility"
                    src="./images/icon-increase-visibility.svg"
                  />
                </div>
                <h3>Increase Visibility</h3>
                <p>Get found and be seen by future customers</p>
              </div>
              <div className={styles.mainTrustedFlexItem}>
                <div className={styles.mainTrustedFlexIcon}>
                  <img
                    alt="relationships"
                    src="./images/icon-build-relationships.svg"
                  />
                </div>
                <h3>Build Trusted Relationships</h3>
                <p>With partners, prospects, and local leaders</p>
              </div>
            </div>
            <div className={styles.mainTrustedFlexRow}>
              <div className={styles.mainTrustedFlexItem}>
                <div className={styles.mainTrustedFlexIcon}>
                  <img
                    alt="expert advice"
                    src="./images/icon-expert-advice.svg"
                  />
                </div>
                <h3>Get Expert Advice</h3>
                <p>From small business leaders and top brands</p>
              </div>
              <div className={styles.mainTrustedFlexItem}>
                <div className={styles.mainTrustedFlexIcon}>
                  <img
                    alt="services and events"
                    src="./images/icon-services-and-events.svg"
                  />
                </div>
                <h3>Promote Your Buisness</h3>
                <p>Feature your services, products, and events</p>
              </div>
              <div className={styles.mainTrustedFlexItem}>
                <div className={styles.mainTrustedFlexIcon}>
                  <img alt="connect" src="./images/icon-connect.svg" />
                </div>
                <h3>Connect With Peers</h3>
                <p>In your industry, in your area, or nation-wide</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mainReinventing}>
          <div className={styles.mainReinventingWrapper}>
            <h2>Three Steps to Success on Alignable</h2>
            <div className={styles.mainReinventingText}>
              With over 7 million business owners, you can reach more customers,
              and get trusted referrals from your peers.
            </div>
            <div className={styles.mainReinventingContent}>
              <div className={styles.mainReinventingItemBox}>
                <div className={styles.mainReinventingItemWrap}>
                  <div className={styles.mainReinventingItem}>
                    <div>
                      <h3>Build Your Business Profile</h3>
                      <div>
                        Tell us about your business and the types of customers
                        you want referrals to.
                      </div>
                    </div>
                  </div>
                  <div className={styles.mainReinventingItem}>
                    <div>
                      <h3>Grow Your Network</h3>
                      <div>
                        Word-of-mouth referrals can come from anywhere. Connect
                        with other businesses to boost your reach.
                      </div>
                    </div>
                  </div>
                  <div className={styles.mainReinventingItem}>
                    <div>
                      <h3>Refer, Recommend, Respond, Repeat</h3>
                      <div>
                        Build relationships that lead to more customers by
                        helping other businesses grow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mainReinventingCard}>
                <img alt="reinventing card" src="./images/image-card.png" />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mainForum}>
          <div className={styles.mainForumWrapper}>
            <div className={styles.mainForumHeader}>
              <h2>Business Owner Forum</h2>
              <div />
            </div>
            <div className={styles.mainForumText}>
              <div className={styles.mainForumFlexRow}>
                <div className={styles.mainForumFlexItem}>
                  <img alt="qa" src="./images/qa.jpg" />
                  <h2>Q&A</h2>
                  <div>
                    Ask for advice and contribute to business owner discussions
                  </div>
                </div>
                <div className={styles.mainForumFlexItem}>
                  <img alt="industry" src="./images/industry.jpg" />
                  <h2>Industry</h2>
                  <div>
                    Get suggestions from industry peers to help you find the
                    best solutions
                  </div>
                </div>
                <div className={styles.mainForumFlexItem}>
                  <img alt="qa" src="./images/local.jpg" />
                  <h2>Local</h2>
                  <div>
                    Discuss what's happening in your local business community
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mainBrandRatings}>
          <div className={styles.mainBrandRatingsWrapper}>
            <div className={styles.mainBrandRatingsText}>
              <h2>Alignable's SMB Brand Ratings & Trust Index</h2>
              <div>
                With over 46,000 ratings from business owners, see which brands
                you can trust.
              </div>
            </div>
            <div className={styles.mainBrandRatingsButton}>
              <a href="/#">See brand ratings</a>
            </div>
          </div>
        </section>
        <section className={styles.mainCommunities}>
          <div className={styles.mainCommunitiesWrapper}>
            <h2>35,000+ communities are networking on Alignable!</h2>
            <div className={styles.mainCommunitiesFlexList}>
              <div className={styles.mainCommunitiesFlexColumn}>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Cedar Rapids, IA</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Calgary, AB</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Portland, ME</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Tampa, FL</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Boston, MA</a>
                </div>
                <div className={styles.mainCommunitiesFlexSpacer} />
              </div>
              <div className={styles.mainCommunitiesFlexColumn}>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">New York, NY</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Boulder, CO</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Las Vegas, NV</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Danville, KY</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Jacksonville, FL</a>
                </div>
                <div className={styles.mainCommunitiesFlexSpacer} />
              </div>
              <div className={styles.mainCommunitiesFlexColumn}>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Houston, TX</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">San Diego, CA</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Atlanta, GA</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Dallas, TX</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Scottsdale, AZ</a>
                </div>
                <div className={styles.mainCommunitiesFlexSpacer} />
              </div>
              <div className={styles.mainCommunitiesFlexColumn}>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Lafayette, LA</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Acton, MA</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Naples, FL</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Charlottesville, VA</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Toronto, ON</a>
                </div>
                <div className={styles.mainCommunitiesFlexSpacer} />
              </div>
              <div className={styles.mainCommunitiesFlexColumn}>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Chicago, IL</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Phoenix, AZ</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">San Antonio, TX</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Philadelphia, PA</a>
                </div>
                <div className={styles.mainCommunitiesFlexItem}>
                  <a href="/#">Charlotte, NC</a>
                </div>
                <div className={styles.mainCommunitiesFlexSpacer} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mainDiscussions}>
          <div className={styles.mainDiscussionsWrapper}>
            <h2>SMB Snapshot: Quick Q&As To Drive Your Day</h2>
            <div className={styles.mainDiscussionsFlexList}>
              <div className={styles.mainDiscussionsFlexItem}>
                <a href="/#">
                  What do you feel has been your biggest challenge(s) in both
                  hiring and retaining employees?
                </a>
              </div>
              <div className={styles.mainDiscussionsFlexItem}>
                <a href="/#">
                  What should I look for when hiring a web designer/developer?
                </a>
              </div>
              <div className={styles.mainDiscussionsFlexItem}>
                <a href="/#">
                  Does anyone leave voice messages when calling potential
                  clients?
                </a>
              </div>
              <div className={styles.mainDiscussionsFlexItem}>
                <a href="/#">Best Drug-Free Way to Reduce Workplace Anxiety</a>
              </div>
              <div className={styles.mainDiscussionsFlexItem}>
                <a href="/#">
                  Your Top 4 Hiring Concerns and How to Solve Them
                </a>
              </div>
              <div className={styles.mainDiscussionsFlexItem}>
                <a href="/#">
                  How 11 Small Businesses Are Bouncing Back Stronger
                </a>
              </div>
            </div>
            <div className={styles.mainDiscussionsButtonWrap}>
              <a className={styles.mainDiscussionsButton} href="/#">
                Top Questions and Answers From Small Businesses
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className={styles.footerWrap}>
          <nav className={styles.footerLinks}>
            <div className={styles.footerLinksLogo}>
              <img
                alt="Alignable"
                width="180"
                src="./images/logo-alignable.svg"
              />
            </div>
            <div className={styles.footerLinksSection}>
              <div className={styles.footerLinksSectionTitle}>About</div>
              <a href="/#" className={styles.footerLink}>
                Testimonials
              </a>
              <a href="/#" className={styles.footerLink}>
                About Us
              </a>
              <a href="/#" className={styles.footerLink}>
                Press
              </a>
              <a href="/#" className={styles.footerLink}>
                Careers
              </a>
              <a href="/#" className={styles.footerLink}>
                Blog
              </a>
            </div>
            <div className={styles.footerLinksSection}>
              <div className={styles.footerLinksSectionTitle}>Support</div>
              <a href="/#" className={styles.footerLink}>
                Terms of Service
              </a>
              <a href="/#" className={styles.footerLink}>
                Privacy Policy
              </a>
              <a href="/#" className={styles.footerLink}>
                Code of Conduct
              </a>
              <a href="/#" className={styles.footerLink}>
                Visitor Cookie Policy
              </a>
              <a href="/#" className={styles.footerLink}>
                Help Center
              </a>
            </div>
            <div className={styles.footerSocialIcons}>
              <ul>
                <li>
                  <a href="/#">
                    <img alt="Facebook" src="./images/icon-facebook.svg" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <img alt="Twitter" src="./images/icon-twitter.svg" />
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <img alt="LinkedIn" src="./images/icon-linkedin.svg" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className={styles.footerReserved}>
          <div className={styles.footerReservedWrap}>
            2023 Alignable, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
