import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box } from '@mui/material'
import * as React from 'react'

type Props = {
  id: string
  title: string
  content?: string
}

const CustomAccordion = ({ props }: { props: Props }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box my={3}>
      <Accordion expanded={expanded === props.id} onChange={handleChange(props.id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${props.id}-content`}
          id={`${props.id}-header`}
        >
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.content}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default CustomAccordion
