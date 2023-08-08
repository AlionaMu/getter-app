import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ButtonPropsType } from '../types';

const ButtonComponent = (props: ButtonPropsType) => {
  return (
    <>
           <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => props.setOpen(!props.open)}
          >
            {props.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            { props.open ? 'CLOSE' : 'OPEN'}
          </IconButton>
    </>
  )
}

export default ButtonComponent;