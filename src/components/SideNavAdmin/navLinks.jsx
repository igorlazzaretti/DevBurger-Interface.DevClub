import { Receipt, List, ListPlus } from '@phosphor-icons/react'

export const navLinks = [
  {
    id: 1,
    label: 'Pedidos',
    path: 'admin/pedidos',
    icon: <Receipt />
  },
  {
    id: 2,
    label: 'Produtos',
    path: 'admin/pedidos',
    icon: <List />
  },
  {
    id: 3,
    label: 'Adicionar Produto',
    path: 'admin/pedidos',
    icon: <ListPlus />
  }
]