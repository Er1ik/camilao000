import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color: rgb(192, 192, 192);
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px;
`;
export const Title = styled.Text`
    font-size: 18px;
    color: gray;
    margin-bottom: 20px;
    fontWeight: bold
`;

export const Logo = styled.Image`
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
`;

export const Icon = styled(Feather)`
    font-size:20px;
    color: white;
`;