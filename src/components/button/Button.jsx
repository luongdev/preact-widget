import { h } from 'preact';
const Button = ({ value, style, className, onPressed }) => {

  return (
    <div
      className={className ? className : 'button'}
      style={style}
      onClick={onPressed}
      data-value={value}
    >
      {value}
    </div>
  )
}

export default Button;