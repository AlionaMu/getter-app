import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ButtonPropsType } from '../types'
import FetchService from '../API/FetchService'

const ButtonComponent = (props: ButtonPropsType) => {
  const onClickHandler = () => {
    FetchService.getPosts().then((res) => {
      props.setData(res)
      props.setOpen(!props.open)
    })
  }
  return (
    <>
      <IconButton aria-label='expand row' size='small' onClick={() => onClickHandler()}>
        {props.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        {props.open ? 'CLOSE' : 'OPEN'}
      </IconButton>
    </>
  )
}

export default ButtonComponent
