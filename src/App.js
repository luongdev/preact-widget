import { h } from 'preact';
import { useState } from "preact/hooks";

import Action from "./components/action/Action.jsx";
import Dialpad from "./components/dialpad/Dialpad.jsx";
import Display from "./components/display/Display.jsx";
import Launcher from "./components/launcher/Launcher.jsx";

const maxLength = 11;

const App = () => {

  const [value, setValue] = useState('');
  const [showDialpad, setShowDialpad] = useState(false);

  const onPressed = e => {
    if (typeof (e) === 'string') {
      onAction(e);
      return;
    }

    e.preventDefault();
    const digit = e.target.dataset.value;

    setValue(value => {
      if (!value) return digit;

      if (value.length === maxLength) return value;

      return `${value}${digit}`
    });
  }

  const onAction = (action) => {
    if (action === 'call') {
      alert(`Calling ${value} ...`)
    } else if (action === 'del') {
      setValue(value => value.slice(0, -1))
    }
  }

  const toggleDialpad = () => {
    setShowDialpad(!showDialpad);
    setValue('');
  }

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>

      {showDialpad && <div className="container">
        <Display value={value} />

        <Dialpad onPressed={onPressed} />

        <Action onPressed={onPressed} />
      </div>}

      <Launcher toggleDialpad={toggleDialpad} />
    </div>
  )
}

export default App;