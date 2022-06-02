import { h } from 'preact';
import { useState } from 'preact/hooks';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';

const Launcher = ({ toggleDialpad }) => {

  const [showDialpad, setShowDialpad] = useState(false);

  const toggle = () => {
    setShowDialpad(!showDialpad);

    if (typeof (toggleDialpad) === 'function') {
      toggleDialpad();
    }
  }

  return (
    <button
      type="button"
      className={`launcher ${showDialpad ? 'launcher_open' : 'launcher_close'}`}
      onClick={toggle}
    >
      {showDialpad ?
        <FaTimes color="white" /> :
        <FaPhoneAlt color="white" />
      }
    </button>
  )
}

export default Launcher;