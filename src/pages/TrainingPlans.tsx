import React from "react";

type TrainingPlan = {
  title: string;
  image: string;
  description: string;
  price: string;
  link?: string;
};

const plans: TrainingPlan[] = [
  {
    title: "R2R2R Super Plan for Trail Runners",
    image: "/images/r2r2r.png",
    description:
      "Run the R2R2R! This 24-week plan includes running, cross-training, bodyweight strength, HIIT, plyometrics, and mobility to prepare you for a continuous R2R2R.",
    price: "$40",
    link: "https://www.trainingpeaks.com/training-plans/running/ultra/tp-261142/grand-canyon-r2r2r-run-super-plan-for-spring-2022",
  },
  {
    title: "0 to 30: Base Building Plan",
    image: "/images/30.png",
    description:
      "Go from the couch to 30-mile weeks while prioritizing injury prevention, balanced strength, and sustainable mileage building.",
    price: "$30",
    link: "https://www.trainingpeaks.com/training-plans/running/tp-XXXXX",
  },
  {
    title: "R2R2R Plan for Flatlanders",
    image: "/images/gc-flatlanders.png",
    description:
      "Designed for athletes without access to mountains. Build resilience through speedwork, stairs, treadmills, and plyometrics.",
    price: "$40",
    link: "https://www.trainingpeaks.com/training-plans/running/tp-XXXXX",
  },
];

export default function TrainingPlans() {
  return (
    <section className="training-plans-section">
      <h1 className="training-plans-title">Training Plans</h1>

      <div className="training-plans-grid">
        {plans.map((plan) => (
          <a
            key={plan.title}
            href={plan.link}
            target="_blank"
            rel="noopener noreferrer"
            className="training-plan-card"
          >
            <img
              src={plan.image}
              alt={plan.title}
              className="training-plan-image"
            />

            <div className="training-plan-content">
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
              <span className="training-plan-price">{plan.price}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
