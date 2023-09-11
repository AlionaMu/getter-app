import { Info, InfoBoxPropsType } from '../types'
import FetchService from '../API/FetchService'
import { useState } from 'react'
import { Button } from '@mui/material'
import { buttonInfo, noIdError } from '../constants/constants'


const InfoBoxComponent = (props: InfoBoxPropsType) => {
  const [info, setInfo] = useState<Info>()
  const [noId, setNoId] = useState<string>('')
  const onClickHandler = () => {
    if (props.itemId) {
      FetchService.getById(props.itemId).then((res) => {
        setInfo(res)
        setNoId('')
      })} else {
        setNoId(noIdError)
      }
  } 

  return (
    <section className='info-box'>
      <Button sx={{ width: 150, padding: '10px'}} variant="contained" size="large" onClick={() => onClickHandler()}>
        {buttonInfo}
      </Button>
      <div className='info-box__info'>
        { props.itemId ?
        (<><p className='info-box__text'>{info?.status}</p>
        <a href={info?.statusurl} className="info-box__link">{info?.statusurl}</a></>) :
        noId }
      </div>
    </section>
  )
}

export default InfoBoxComponent
