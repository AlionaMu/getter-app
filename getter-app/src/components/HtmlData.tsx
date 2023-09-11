import { useEffect, useState } from "react"
import FetchService from "../API/FetchService";
import parse from 'html-react-parser'

const HtmlDataComponent = () => {
  const [htmlData, setHtmlData] = useState<string>('')

  useEffect(() => {
    FetchService.getHtmlData().then((response: string) => {
      setHtmlData(response)
    })
  }, []);

  return (
    <section className='html-data'>
     {parse(htmlData)}
    </section>
  )
}

export default HtmlDataComponent
