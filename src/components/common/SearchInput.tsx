import SearchIcon from '@mui/icons-material/Search'
import { Box, InputBase } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { useRouter } from 'next/router'
import React, { useCallback, useContext } from 'react'
import { SearchContext } from '../../context/searchContext'
import theme from 'styles/theme'

const SearchInput = (): JSX.Element => {
  const { search, setSearch } = useContext(SearchContext)
  const router = useRouter()

  const handleChangeKeyword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = e.currentTarget
      setSearch(value)
    },
    [setSearch],
  )

  const handleKeyDownSearch = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
        void router.push(`/search?keyword=${search}`)
      }
    },
    [search, router],
  )

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 'auto',
        width: '45%',
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
        onKeyDown={handleKeyDownSearch}
        value={search}
        sx={{
          color: 'inherit',
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
