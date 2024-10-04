import "./home.scss";

import { Check, Planet } from "@phosphor-icons/react";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="content">
          <div className="content--topbar">
            <div className="logo">
              <Planet size={24} weight="bold" />
              <p>Saturn</p>
            </div>

            <div className="content--topbar__block">
              <div className="acct-block">
                <div className="acct-btn">
                  <img src="/images/avatars/abstract-4.svg" alt="" />
                </div>

                <div className="acct-date">
                  <p className="main">Jaybee Knight</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content--body">
            <div className="main-text">
              <p className="main">Dominate the universe</p>
              <p className="sub">
                Planetary images and data at your fingertips
              </p>
            </div>

            <div className="subscription-plans">
              {[
                {
                  id: 283892903,
                  name: "Advanced",
                  price: "$49",
                },
                {
                  id: 8909239032,
                  name: "Professional",
                  price: "$79",
                },
              ].map((plan, index) => {
                const isPopular = index === 0;

                return (
                  <div key={plan.id} className="plan-container">
                    {isPopular && (
                      <div className="plan-header">Most Popular</div>
                    )}
                    <div className="plan" data-popular={isPopular}>
                      <div className="details">
                        <div className="name">{plan.name}</div>
                        <div className="price">{plan.price}</div>
                        <div className="billed">
                          Per user, per month <br /> Billed monthly
                        </div>
                      </div>

                      <div className="description">
                        The <span>{plan.name}</span> plan
                        {index == 0
                          ? " supercharges your experience with additional features and functionalities"
                          : " provides you with extra flexibility and control over your data"}
                      </div>

                      <ul className="benefits">
                        {[
                          "Unlimited access to planetary images",
                          "Access to premium data",
                          "High resolution downloads",
                          "Advanced search filters",
                          "Priority support",
                        ].map((benefit, index) => {
                          return (
                            <li key={index}>
                              <Check size={16} weight="bold" />
                              <p>{benefit}</p>
                            </li>
                          );
                        })}
                      </ul>

                      <button
                        onClick={() => {
                          //
                        }}
                        className="c-btn c-btn--inverted full-btn"
                      >
                        Get {plan.name}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer-img">
          <img src="images/footer.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
