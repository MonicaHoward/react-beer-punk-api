import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: #FFF;
    height: 100vh;
    width: 100vw;
`

const HomeView = styled.div`
    background: #F7F3EF;
    border-radius: 40px;
    margin: 0 auto;
    height: 98vh;
    width: 98vw;   
`
const Menu = styled.div`
    background: #004E89;
    border-radius: 50px;
    margin: 2%;
    position: fixed;
    text-align: center;
    height: 60px;
    width: 60px;
`
const Icon = styled.img`
    margin: 20%; 
`

class Home extends Component {
    render () {
        return(
            <Container>
                <HomeView>
                    <Menu>
                        <Icon src="/list.png"/>
                    </Menu>
                </HomeView>
            </Container>
        )
    }
}

export default Home;