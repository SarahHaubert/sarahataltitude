import './Rooted.css';

export default function Rooted() {
  return (
    <div className="rooted-page">
      <h1 className="rooted-heading">
        Coming Soon: <br />
        <span>Microgreen & Unhinged Sourdough Subscriptions in Ouray</span>
      </h1>

      <div className="rooted-image-grid">
        <img src="/images/micro1.png" alt="microgreens" />
        <img src="/images/bagels.png" alt="sourdough bagels" />
        <img src="/images/micro2.png" alt="microgreens" />
        <img src="/images/sd1.png" alt="sourdough" />
        <img src="/images/micro3.png" alt="microgreens" />
        <img src="/images/sd2.png" alt="sourdough" />
      </div>
    </div>
  );
}
