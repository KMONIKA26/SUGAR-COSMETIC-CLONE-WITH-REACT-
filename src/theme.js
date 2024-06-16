import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: "#575555", // main text
            navbar: "#6c757d" // navbar text
        },
        secondary: {
            main: "#fc2779" // pink
        },
        neutral: {
            dark: '#212529' // black background
        },
        background: {
            main: "#f5f5f5" // grey background
        }
    }
})

export default theme