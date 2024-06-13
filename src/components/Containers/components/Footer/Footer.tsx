import classes from "./Footer.module.scss";
import { ComponentPropsWithoutRef } from "react";
import { FacebookIcon } from "../../../../Icons/SocialMedia/Facebook";
import { InstagramIcon } from "../../../../Icons/SocialMedia/Instagram";
import { TwitterIcon } from "../../../../Icons/SocialMedia/Twitter";
import { YouTubeIcon } from "../../../../Icons/SocialMedia/YouTube";
import { ServiceCodeButton } from "./components/ServiceCode/ServiceCode";

export const Footer = (props: ComponentPropsWithoutRef<"div">) => {
  console.log(props);

  return (
    <footer className={classes.container}>
      <div className={classes.social_media_container}>
        <div className={classes.icon_container}>
          <FacebookIcon size="l" />
        </div>
        <div className={classes.icon_container}>
          <InstagramIcon size="l" />
        </div>
        <div className={classes.icon_container}>
          <TwitterIcon size="l" />
        </div>
        <div className={classes.icon_container}>
          <YouTubeIcon size="l" />
        </div>
      </div>

      <div className={classes.link_container}>
        <div className={classes.link_column}>
          <span className={classes.link}>Audio Description</span>
          <span className={classes.link}>Investor Relations</span>
          <span className={classes.link}>Privacy</span>
          <span className={classes.link}>Contact Us</span>
        </div>

        <div className={classes.link_column}>
          <span className={classes.link}>Help Center</span>
          <span className={classes.link}>Jobs</span>
          <span className={classes.link}>Legal Notices</span>
          <span className={classes.link}>
            Do Not Sell or Share My Personal Information
          </span>
        </div>

        <div className={classes.link_column}>
          <span className={classes.link}>Gift Cards</span>
          <span className={classes.link}>Shop</span>
          <span className={classes.link}>Cookie Preferences</span>
          <span className={classes.link}>Ad Choices</span>
        </div>

        <div className={classes.link_column}>
          <span className={classes.link}>Media Center</span>
          <span className={classes.link}>Terms of Use</span>
          <span className={classes.link}>Corporate Information</span>
        </div>
      </div>

      <ServiceCodeButton />
      <span className={classes.copywright}>© 1997 - 2024 Netflix, Inc.</span>
    </footer>
  );
};
