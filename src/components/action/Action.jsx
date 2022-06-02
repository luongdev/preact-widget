import { h } from 'preact';
import Button from "../button/Button.jsx";
import { FaPhoneAlt, FaBackspace } from 'react-icons/fa';

const Action = ({ onPressed }) => {

  return <div className="botrow">
    <div style={{ width: '30px', float: 'left', padding: '10px 30px' }}></div>
    <Button
      className="call"
      value={<FaPhoneAlt color="white" />}
      style={{ background: 'green', borderRadius: '1rem' }}
      onPressed={() => onPressed('call')}
    />
    <Button
      value={<FaBackspace color="black" />}
      style={{ float: 'right' }}
      onPressed={() => onPressed('del')} />
  </div>
}

export default Action;