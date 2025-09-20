import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMessage } from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

const schema = yup
  .object({
    name: yup.string().required(),
    price: yup.number().positive().required(),
    category: yup.object().required(),
    file: yup.mixed(),
    offer: yup.boolean(),
  })

export function NewProduct() {
  // Nome do Arquivo
  const [fileName, setFileName] = useState(null)
  // Categorias
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategories(){
      const { data } = await api.get('/categories')
      console.log('Log: Categorias',data)
      setCategories(data)
    }
    loadCategories()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    console.log(data)
  }
  const offerOptions = [
    { value: true, label: 'Sim' },
    { value: false, label: 'Não' },
  ]

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>
        <InputGroup>
          <Label>Preço</Label>
          <Input type="number" inputMode="decimal"
            {...register('price')} />
          <ErrorMessage>{errors?.price?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <Label>Em oferta?</Label>
          <Controller
            name="offer"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={offerOptions}
                placeholder="Selecione se está em oferta"
                value={offerOptions.find((opt) => opt.value === field.value)}
                onChange={(opt) => field.onChange(opt.value)}
              />
            )}
          />
        </InputGroup>

        <InputGroup>
          <Label>Imagem</Label>
          <LabelUpload>
            <Image size={24} />
            <input type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={(value) => {
                setFileName(value.target.files[0]?.name)
                // Validação do React Hook Form
                register('file').onChange(value)
              }} />
              { fileName ? fileName : 'Selecione uma imagem para produto' }
          </LabelUpload>
        </InputGroup>

        <InputGroup>
          <Label>Categoria</Label>
          {/* Controller para elementos não controlados, como o React Select */}
          <Controller name="category" control={control}
            render={ (field) => (
          <Select
            {...field}
            {...register('category')}
            options={categories}
            getOptionLabel={(categories) => categories.name}
            getOptionValue={(categories) => categories.id}
            isLoading={categories.length === 0}
            noOptionsMessage={() => 'Nenhuma categoria encontrada'}
            placeholder="Selecione uma categoria"
            menuPortalTarget={document.body}
          /> )} />
        </InputGroup>

        <SubmitButton type="submit">Adicionar Novo Produto</SubmitButton>
      </Form>
    </Container>
  );
}
