'use client';

import { Eth, Btc, Bnb } from '@styled-icons/crypto'
import { Alert, Button, Avatar } from '@climatempo/forest'

function postIcon() {
  return (
    <div className="flex gap-3 justify-around my-4">
      <Btc color="rgb(255 0 128 / 1)" size={50} />
      <Eth color="rgb(255 0 128 / 1)" size={50} />
      <Bnb color="rgb(255 0 128 / 1)" size={50} />
      <Alert>Torrada Alertada</Alert>
      <Button variant="outlined" href="#text-buttons">My Button</Button>
      <Avatar alt="Adolpho Cavalcanti" src="https://avatars.githubusercontent.com/u/21251877?v=4" sx={{ width: 56, height: 56 }} />
    </div>
  )
}

export default postIcon;