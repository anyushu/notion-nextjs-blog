import { NextPage } from 'next'
import { RichTextItem } from 'models/notion'

type Porps = {
  className?: string
  texts: Array<RichTextItem>
}

const RichText: NextPage<Porps> = ({ className, texts }) => {
  return (
    <p className={`mb-3 whitespace-pre-wrap ${className}`}>
      {texts.map((text, index) => {
        let textColor = 'text-current'
        switch (text.annotations?.color) {
          case 'brown':
            textColor = 'text-yellow-900'
            break
          case 'orange':
            textColor = 'text-orange-500'
            break
          case 'yellow':
            textColor = 'text-yellow-500'
            break
          case 'green':
            textColor = 'text-green-500'
            break
          case 'blue':
            textColor = 'text-blue-500'
            break
          case 'purple':
            textColor = 'text-purple-500'
            break
          case 'pink':
            textColor = 'text-pink-500'
            break
          case 'red':
            textColor = 'text-red-500'
            break
          case 'gray':
            textColor = 'text-gray-500'
            break
          default:
            textColor = 'text-current'
            break
        }
        return (
          <span
            key={index}
            className={`${textColor} ${text.annotations?.bold ? 'font-bold' : 'font-normal'} ${
              text.annotations?.italic ? 'italic' : ''
            } ${text.annotations?.underline ? 'underline' : ''} ${
              text.annotations?.strikethrough ? 'line-through' : ''
            }`}
          >
            {text.annotations?.code ? (
              <code className="py-1 px-2 font-mono text-sm tracking-normal bg-gray-100 rounded">
                {text.plain_text}
              </code>
            ) : text.href ? (
              <span>
                <a
                  className="tracking-normal leading-normal text-blue-500 hover:text-blue-200 underline"
                  href={text.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text.plain_text}
                </a>
              </span>
            ) : (
              text.plain_text
            )}
          </span>
        )
      })}
    </p>
  )
}

export default RichText
