import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton } from './styles';

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export function NewProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input />
        </InputGroup>
        <InputGroup>
          <Label>Preço</Label>
          <Input />
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <Image size={24} />
            <input type="file" {...register('firstName')} />
          </LabelUpload>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          <Select />
        </InputGroup>

        <SubmitButton type="submit">Adicionar Novo Produto</SubmitButton>
      </Form>
    </Container>
  );
}
