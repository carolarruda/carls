import "./styles/main.css";

const Settings = ({ className, handleTheme }) => {


  return (
    <>
      <div className={className} id="main-container-settings">
        <div className="settings-title">SETTINGS</div>
        <div className="theme-grid">
          <div>
            <div className="colors">THEME</div>
            <div className="colors">
              <button onClick={handleTheme} value={'rgb(247, 154, 192)'} className="color1 btn-no-style"></button>
              <button onClick={handleTheme} value={'rgb(252, 174, 30)'}className="color2 btn-no-style"></button>
              <button onClick={handleTheme} value={'rgb(158, 175, 245)'} className="color3 btn-no-style"></button>
              <button onClick={handleTheme} value={'rgb(197, 226, 231)'} className="color4 btn-no-style"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
