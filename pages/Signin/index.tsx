import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import favicon from "../../assets/favicon.png";
import { Button } from '../../src/components/screen/button';
import { Input } from '../../src/components/screen/input';
import { CreateAccount, CreateAccountTitle } from '../Signup/style';
import { Container, Content, Icon, Logo, Title } from './style';

interface ScreenNavigationProp {
        navigate: (screen: string) => void;
    }
    

export const SignIn: React.FunctionComponent = () => {
    const navigation = useNavigation<ScreenNavigationProp>();
    return (
        <>
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flex: 1 }}
        >
            <Container>
                <Content>
                    <Logo source={favicon}/>
                    <Title>Login</Title>
                    <Input placeholder="Email"/>
                    <Input placeholder="Senha"/>
                    <Button title='Entrar'/>
                </Content>
            </Container>
        </ScrollView>
        <CreateAccount onPress={() => {
                navigation.navigate('Signup');
            }}>
                <Icon name="log-in"/>
                <CreateAccountTitle>Criar nova conta</CreateAccountTitle>
            </CreateAccount>

        </>
    );
};

