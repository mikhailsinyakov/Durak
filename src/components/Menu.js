import React from 'react';
import AppContext from '../context/AppContext';
import '../stylesheets/Menu.css';

const MenuItemOption = props => {
  const { changeItem, currOption, option, optionText } = props;
  return (
    <span 
      className={`menu-item-option ${currOption === option ? 'current' : ''}`}
      onClick={currOption !== option ? () => changeItem(option) : null}
      style={{ cursor: currOption !== option ? 'pointer' : 'default' }}
    >
      {optionText}
    </span>
  );
};

const Menu = props => {
  const { username, mode, playersNumber, changeName, changeMode, isPlaying,
          changePlayersNumber, startGame, waitUsers, saveUserSettings } = props;
          
  const input = React.createRef();

  const handleInputChange = e => {
    let { value } = e.target;
    if (input.current.placeholder) input.current.placeholder = '';
    if (value) value = value[0].toUpperCase() + value.slice(1);
    changeName(value);
  };


  const handleSubmit = lang => {
    if (!username) {
      input.current.placeholder = lang === 'ru' ? 'Введите имя': 'You should enter name';
      return;
    }
    if (mode === 'single-player') {
      saveUserSettings();
      startGame();
    } else {
      saveUserSettings();
      waitUsers();
    }
  };

  return (
    <AppContext.Consumer>
      { ({lang}) => (
        <div className={`menu ${isPlaying ? 'hide' : ''}`}>
          <h1>{lang === 'ru' ? 'Меню' : 'Menu'}</h1>
          <div className="menu-items">
            <label className="menu-item">
              <span className="menu-item-name">
                {lang === 'ru' ? 'Имя:' : 'Name:'}
              </span>
              <input ref={input} type="text" value={username} onChange={handleInputChange} />
            </label>
            <div className="menu-item">
              <span className="menu-item-name">
                {lang === 'ru' ? 'Режим:' : 'Mode:'}
              </span>
              <MenuItemOption 
                changeItem={changeMode} currOption={mode} 
                option="single-player" 
                optionText={lang === 'ru' ? 'С Компьютером' : 'Single Player'}
              />
              <MenuItemOption 
                changeItem={changeMode} currOption={mode}
                option="multiplayer" 
                optionText={lang === 'ru' ? 'С Другими Игроками' : 'Multiplayer'}
              />
            </div>
            <div className="menu-item">
              <span className="menu-item-name">
                {lang === 'ru' ? 'Число Игроков:' : 'Players Number:'}
              </span>
              <MenuItemOption 
                changeItem={changePlayersNumber} currOption={playersNumber} 
                option={2} optionText="2"
              />
              <MenuItemOption 
                changeItem={changePlayersNumber} currOption={playersNumber} 
                option={3} optionText="3"
              />
              <MenuItemOption 
                changeItem={changePlayersNumber} currOption={playersNumber} 
                option={4} optionText="4"
              />
              <MenuItemOption 
                changeItem={changePlayersNumber} currOption={playersNumber} 
                option={5} optionText="5"
              />
              <MenuItemOption 
                changeItem={changePlayersNumber} currOption={playersNumber} 
                option={6} optionText="6"
              />
            </div>
          </div>
          <button onClick={handleSubmit} >
            {mode === 'single-player' ? 
              lang === 'ru' ? 'Играть' : 'Play' : 
              lang === 'ru' ? 'Ждать Других Игроков' : 'Wait for Users'}
          </button>
        </div>
      )}
    </AppContext.Consumer>

  );
};

export default Menu;