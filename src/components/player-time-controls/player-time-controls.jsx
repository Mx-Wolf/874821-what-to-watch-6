import React from 'react';
import playerTimeControlsProps from './player-time-controls.prop';

const PlayerTimeControls = (props) => {
  const {progress, onProgressClickHandler, onTogglerMoveHandler, time} = props;

  return <>

    <div className="player__time">
      <progress className="player__progress" value={`${progress}`} max="100" onClick={onProgressClickHandler} ></progress>
      <div className="player__toggler" style={{left: `${progress}` + `%`}} onMouseDown={onTogglerMoveHandler} >Toggler</div>
    </div>
    <div className="player__time-value">{time}</div>

  </>;
};

PlayerTimeControls.propTypes = playerTimeControlsProps;

export default PlayerTimeControls;
