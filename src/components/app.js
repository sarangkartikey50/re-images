import React from 'react'
import CustomAppBar from './customAppBar'
import ImageCardContainer from './imageCardContainer'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { connect } from 'react-redux'

const lightTheme = createMuiTheme({
    palette: {
        main: grey[500],
        background: '#fff',
        cardBackground: '#fff',
        text: '#333',
        primaryColor: 'blueviolet',
        iconColor: 'blueviolet',
        appBackground: '#fafafa',
        loaderImageColor: '#efefef',
        loaderBodyColor: '#fff',
        borderColor: '1px solid #efefef'
    },
    boxShadow: '0 5px 40px -20px rgba(40,44,63,.15)'
})

const darkTheme = createMuiTheme({
    palette: {
        main: grey[500],
        background: '#04052a',
        cardBackground: '#15162c',
        text: '#fff',
        primaryColor: 'blueviolet',
        iconColor: 'blueviolet',
        appBackground: '#090025',
        loaderImageColor: '#1b003c',
        loaderBodyColor: '#2c1760',
        borderColor: '1px solid #1c0b3c'
    },
    boxShadow: 'none'
})

const mapStateToProps = (state) => {
    return {
        isDarkTheme: state.postsReducer.isDarkTheme
    }
}

function App(props){
    return (
        <MuiThemeProvider theme={props.isDarkTheme ? darkTheme : lightTheme}>
            <div>
                <CustomAppBar />
                <ImageCardContainer />
            </div>
        </MuiThemeProvider>
    )
}

export default connect(mapStateToProps)(App)