
export default function Store() {
  return (
    <div className="store-page">
      {/* Heading SVG linking to Etsy */}
      <div className="store-heading">
        <a
          href="https://www.etsy.com/shop/ScreeFactory"  // <-- Replace with your shop link if different
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/store(1).svg"
            alt="Store Coming Soon"
            className="store-heading-svg"
          />
        </a>
      </div>

      <div className="store-grid">
        <div className="store-item">
          <a
            href="https://www.etsy.com/shop/ScreeFactory" // <-- Etsy link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/coloringbook.png"
              alt="Francisco Fox Gets Rad In Ouray Coloring Book"
            />
          </a>
          <p>Francisco Fox Gets Rad in Ouray: A Coloring Book</p>
        </div>
        <div className="store-item">
          <a
            href="https://www.etsy.com/shop/ScreeFactory" // <-- Etsy link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/pipparainier.png"
              alt="Pippa Climbs Mt. Rainier"
            />
          </a>
          <p>Pippa Climbs Mt. Rainier: in paperback and hardcover</p>
        </div>
        <div className="store-item">
          <a
            href="https://www.etsy.com/shop/ScreeFactory" // <-- Etsy link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/coloringgc.png"
              alt="Pippa Runs the Grand Canyon Twice"
            />
          </a>
          <p>Coming Soon: Pippa Runs a Grand Canyon Double Crossing</p>
        </div>
      </div>
    </div>
  );
}
