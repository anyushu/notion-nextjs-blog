import { Box, Typography } from '@mui/material'
import { brown, orange, yellow, green, blue, purple, pink, red } from '@mui/material/colors'
import { NextPage } from 'next'
import theme from '../../../styles/theme'
import { RichTextItem } from 'models/notion'

const RichText: NextPage<{ texts: Array<RichTextItem> }> = ({ texts }) => {
  return (
    <Typography mb={1}>
      {texts.map((text, index) => {
        let textColor = theme.palette.common.white
        switch (text.annotations?.color) {
          case 'brown':
            textColor = brown[500]
            break
          case 'orange':
            textColor = orange[500]
            break
          case 'yellow':
            textColor = yellow[500]
            break
          case 'green':
            textColor = green[500]
            break
          case 'blue':
            textColor = blue[500]
            break
          case 'purple':
            textColor = purple[500]
            break
          case 'pink':
            textColor = pink[500]
            break
          case 'red':
            textColor = red[500]
            break
          case 'gray':
            textColor = theme.palette.grey[500]
            break
          default:
            textColor = theme.palette.common.white
            break
        }
        return (
          <Box
            component="span"
            key={index}
            sx={{
              fontWeight: text.annotations?.bold ? 'bold' : 'normal',
              fontStyle: text.annotations?.italic ? 'italic' : 'normal',
              color: textColor,
              textDecoration: text.annotations?.underline
                ? 'underline'
                : text.annotations?.strikethrough
                ? 'line-through'
                : 'none',
            }}
          >
            {text.annotations?.code ? (
              <Box
                component="code"
                sx={{
                  fontSize: '90%',
                  paddingLeft: theme.spacing(0.5),
                  paddingRight: theme.spacing(0.5),
                  borderRadius: theme.spacing(0.5),
                  backgroundColor: theme.palette.action.disabledBackground,
                  letterSpacing: 'normal',
                }}
              >
                {text.plain_text}
              </Box>
            ) : text.href ? (
              <Box
                component="span"
                sx={{
                  '& a': {
                    color: 'text.secondary',
                  },
                }}
              >
                <a href={text.href} target="_blank" rel="noreferrer">
                  {text.plain_text}
                </a>
              </Box>
            ) : (
              text.plain_text
            )}
          </Box>
        )
      })}
    </Typography>
  )
}

export default RichText
