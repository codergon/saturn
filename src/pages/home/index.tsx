import useUrlParams from "pages/hooks/useUrlParams";
import "./home.scss";

import { Check, Planet } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import showToast from "utils/showToast";

const AEON_APP_URL = "https://app.aeonprotocol.io/subscribe";

const Home = () => {
  const params = useUrlParams();

  const planId = params["plan-id"];

  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    if (planId) {
      setIsPaid(true);

      showToast({
        type: "success",
        message: "Payment successful",
        desc: "You have successfully subscribed to the selected plan",
      });
    }
  }, [params]);

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
                  id: "plan_isga5x0lc1xk8gxesz03attv",
                  name: "Advanced",
                  price: "$99",
                },
                {
                  id: "plan_uy92fa8oddllzjic4ys22sk3",
                  name: "Professional",
                  price: "$179",
                },
              ]
                .filter((plan) => planId?.toString() !== plan.id.toString())
                .map((plan, index) => {
                  const isPopular = index === 0 && !isPaid;

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
                          disabled={isPaid}
                          onClick={() => {
                            const url = new URL(AEON_APP_URL);
                            url.searchParams.append(
                              "product-id",
                              "product_z5f5mltj6dkuwm7tgdv3qey8"
                            );
                            url.searchParams.append(
                              "plan-id",
                              plan.id.toString()
                            );
                            window.open(url.toString(), "_self");
                          }}
                          className="c-btn c-btn--inverted full-btn"
                        >
                          {isPaid ? "Purchased 🎉" : `Get ${plan.name}`}
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
