import React from 'react';
import { Box, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './Theme';
import '../assets/style.css';
import Image from '../assets/home2.svg';

const Home = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={Theme}>
                <Box className='home-body' style={{ display: 'flex' }}>
                    <Box className='box'
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        sx={{
                            width: '70vw',
                            height: '100vh',
                            backgroundColor: 'primary.dark',
                        }}
                    >
                        <div className='main-text'>
                            <span className='hi-text'>Hi there👋,</span> <br />
                            <span className='name-text'>I am Anubhav Singh</span> <br />
                            <span className='dev-text'>Full Stack Developer from INDIA</span>
                            <br />

                            <a href='https://drive.google.com/file/d/1MPKoJuZSt2CKT4PxP96NcCsaWQXbKL2X/view?usp=sharing' style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    style={{
                                        color: 'secondary',
                                        marginRight: '1.2em'
                                    }}
                                >
                                    Download Resume
                                </Button>
                            </a>

                            <a href='/#/about' style={{ textDecoration: 'none' }}>
                                <Button
                                    style={{
                                        color: 'white',
                                        border: '1.5px solid white'
                                    }}
                                    variant="outlined"
                                >
                                    About Me
                                </Button>
                            </a>

                        </div>
                    </Box>
                    <Box className='box'
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        sx={{
                            width: '50vw',
                            height: '100vh',
                            backgroundColor: 'primary.dark',
                        }}
                    >
                        <img src={Image} style={{ width: '75%' }} alt='home' />
                    </Box>


                </Box>
            </ThemeProvider>
        </React.Fragment>
    );
}
export default Home;