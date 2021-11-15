import SearchIcon from '@mui/icons-material/Search'
import { Box, InputBase } from '@mui/material'
import { alpha } from '@mui/material/styles'
import React, { useCallback, useContext } from 'react'
import { SearchContext } from '../../context/searchContext'
import theme from 'styles/theme'

const SearchInput = (): JSX.Element => {
  const { search, setSearch } = useContext(SearchContext)
  const handleChangeKeyword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = e.currentTarget
      setSearch(value)
    },
    [setSearch],
  )

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        borderRadius: '4px',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        [theme.breakpoints.up('sm')]: {
          width: 'auto',
        },
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          padding: theme.spacing(0, 1.5),
          height: '100%',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SearchIcon />
      </Box>
      <InputBase
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChangeKeyword}
        value={search}
        sx={{
          width: '100%',
          color: 'inherit',
          [theme.breakpoints.up('sm')]: {
            width: 'auto',
          },
          '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              width: '12ch',
              '&:focus': {
                width: '20ch',
              },
            },
          },
        }}
      />
    </Box>
  )
}

export default SearchInput
