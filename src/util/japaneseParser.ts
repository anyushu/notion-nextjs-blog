import { loadDefaultJapaneseParser } from 'budoux'
import parse from 'html-react-parser'

const jPparser = loadDefaultJapaneseParser()

export const jpParse = (str: string) => {
  return parse(jPparser.translateHTMLString(str))
}
