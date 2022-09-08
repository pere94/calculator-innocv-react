import './BasicButton.css';


function BasicButton(props) {
  const {
    withButton = '55px',
    heightButton = '55px',
    textButton, 
    backgroundColor='white',
    colorText='black',
    expButton = false,
    squareRoot = false,
    actionClick,
  } = props;


  return (
    <button 
      onClick={actionClick}
      style={{
        backgroundColor: backgroundColor,
        color: colorText,
        width: withButton,
        height: heightButton,
      }} 
      className="BasicButton"
    > 
      {squareRoot && '√'}
      {textButton} 
      {expButton && <sup>2</sup>} 
    </button>
  );
}

export {BasicButton};