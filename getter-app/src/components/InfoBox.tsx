import { InfoBoxPropsType } from '../types'
import FetchService from '../API/FetchService'
import { useState } from 'react'
import { Button } from '@mui/material'
import { buttonInfo } from '../constants/constants'

const InfoBoxComponent = (props: InfoBoxPropsType) => {
  const [info, setInfo] = useState<string>('')
  const onClickHandler = () => {
    FetchService.getById(props.itemId).then((res) => {
      setInfo(res.status)
    })
  }
  return (
    <section className='info-box'>
      <Button sx={{ width: 150, padding: '10px'}} variant="contained" size="large" onClick={() => onClickHandler()}>
        {buttonInfo}
      </Button>
      <div className='info-box__info'>{info}</div>
    </section>
  )
}

export default InfoBoxComponent
