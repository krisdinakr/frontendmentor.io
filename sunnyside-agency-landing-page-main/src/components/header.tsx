import arrow from 'assets/images/icon-arrow-down.svg';

export const Header = () => (
  <div className="header">
    <div className="header__wrapper">
      <h1 className="header__title">WE ARE CREATIVES</h1>
      <div className="header__arrow">
        <img src={arrow} alt="" />
      </div>
    </div>
  </div>
)
