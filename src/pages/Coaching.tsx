import React from 'react';
import { Link } from "react-router-dom";


type TrainingPlanCardProps = {
  title: string;
  image: string;
  href: string;
};

function TrainingPlanCard({ title, image, href }: TrainingPlanCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="training-plan-card"
    >
      <img src={image} alt={title} />
    </a>
  );
}

export default function Coaching() {
  return (
    <>
      {/* Wide Coaching Image Section */}
      <div className="coaching-wide-section">
        <div className="coaching-wide-text">
          <img
            src="/images/needacoach.png"
            alt="Do you need a coach? Mountain athlete coaching philosophy"
          />
        </div>

        <div className="coaching-wide-image">
          <img
            src="/images/side.png"
            alt="Sarah coaching mountain athletes"
          />
        </div>
      </div>

      {/* Coaching Path Cards Section */}
      <div className="coaching-cards-section">
        <a href="/coaching" className="coaching-image-card">
          <img
            src="/images/handson.png"
            alt="1:1 Premium Coaching"
          />
        </a>

        <a href="#training-plans" className="coaching-image-card">
          <img
            src="/images/selfguided.png"
            alt="Custom and premade training plans"
          />
        </a>
      </div>

      {/* Banner Image Section */}
      <div className="coaching-banner-section">
        <img
          src="/images/howitworks(3).png"
          alt="How coaching works"
          className="coaching-banner-image"
        />

        <a
          href="https://www.paypal.com/ncp/payment/MLD7WZFM6XRLC"
          target="_blank"
          rel="noopener noreferrer"
          className="banner-cta-button"
        >
          <img
            src="/images/signupnow.svg"
            alt="Sign up"
          />
        </a>
      </div>

      <div className="coaching-primary-cta">
  <a
    href="https://www.paypal.com/ncp/payment/MLD7WZFM6XRLC"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/images/signupnow.svg"
      alt="Sign up for coaching"
    />
  </a>
</div>


      {/* ============================= */}
      {/* Training Plans Section */}
      {/* ============================= */}
      <section id="training-plans" className="training-plans-section">
  <div className="training-plans-header">
    <img
      src="/images/trainingplan.svg"
      alt="Self-guided training plans hosted on TrainingPeaks"
      className="training-plans-header-image"
    />
  </div>


        <div className="training-plan-grid">
          <TrainingPlanCard
            title="R2R2R Endurance Plan"
            image="/images/r2r2r.png"
            href="https://www.trainingpeaks.com/training-plans/running/ultra/tp-261142/grand-canyon-r2r2r-run-super-plan-for-spring-2022"
          />
          <TrainingPlanCard
            title="Pre-Season Fitness for Ice Climbers"
            image="/images/ice.png"
            href="https://www.trainingpeaks.com/training-plans/other/winter-sports/tp-315314/your-best-ice-climbing-season-total-strength-fitness-to-improve-efficiency-endur"
          />
          <TrainingPlanCard
            title="Dryland Training for Nordic Skiers"
            image="/images/nordic.png"
            href="https://www.trainingpeaks.com/training-plans/other/winter-sports/tp-307620/fall-dryland-preseason-for-nordic-ski-mild-jumpstart-your-training"
          />
          <TrainingPlanCard
            title="Start Training Now for Summer 14ers"
            image="/images/couch.png"
            href="https://www.trainingpeaks.com/training-plans/running/trail/tp-266115/couch-to-14ers-get-in-shape-now-to-climb-mountains-this-summer-email-coach-suppo"
          />
        </div>

        {/* Move the "Email me with questions" CTA below the training plans */}
        <div className="training-plan-email-cta">
          <a
            href="mailto:glissadequeen@sarahataltitude.com"
            className="banner-action email-action"
          >
            <img
              src="/images/emailcta.svg"
              alt="Email me with questions"
            />
          </a>
        </div>
      </section>

    </>
  );
}
