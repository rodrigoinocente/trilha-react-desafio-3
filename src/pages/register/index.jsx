import { MdEmail, MdLock, MdPerson2 } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Link  } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleLogin, SubtitleLogin, Foot, CriarText, Wrapper } from './styles';

const Register = () => {

    const { control, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form onSubmit={() => null}>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson2 />} name="nome"  control={control} />
                    {errors.nome && <span>Nome completo é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Column>
                    <Foot>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Foot>
                    <CriarText>Já tenho conta. <Link to="/login"><span>Fazer login</span></Link></CriarText>
                </Column>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register }