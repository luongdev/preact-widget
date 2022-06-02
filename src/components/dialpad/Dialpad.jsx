import { h } from 'preact';
import Button from '../button/Button.jsx';

const Dialpad = ({ onPressed }) => {
  return <div>
    <div className="row">
      <Button value={'1'} onPressed={onPressed} />
      <Button value={'2'} subValue={'ABC'} onPressed={onPressed} />
      <Button value={'3'} subValue={'DEF'} onPressed={onPressed} />
    </div>
    <div className="row">
      <Button value={'4'} subValue={'GHI'} onPressed={onPressed} />
      <Button value={'5'} subValue={'JKL'} onPressed={onPressed} />
      <Button value={'6'} subValue={'MNO'} onPressed={onPressed} />
    </div>
    <div className="row">
      <Button value={'7'} subValue={'PQRS'} onPressed={onPressed} />
      <Button value={'8'} subValue={'TUV'} onPressed={onPressed} />
      <Button value={'9'} subValue={'WXYZ'} onPressed={onPressed} />
    </div>
    <div className="row">
      <Button value={'*'} onPressed={onPressed} />
      <Button value={'0'} onPressed={onPressed} />
      <Button value={'#'} onPressed={onPressed} />
    </div>
  </div>
}

export default Dialpad;