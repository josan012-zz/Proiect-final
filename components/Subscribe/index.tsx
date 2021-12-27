import Style from "./styled";

const Subscribe = () => {
  return (
    <Style>
      <div className="center">
        <div className="gradient">
          <div className="email">
            <div className="email-stanga">
              <p id="acum">Start mining now</p>
              <p id="join">
                Join now with CRAPPO to get the latest news and start mining now
              </p>
            </div>
            <div className="email-dreapta">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <input type="button" value="Subscribe" id="subscribe" />
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Subscribe;
