'use client'

import { codeTerminalString } from '@/configs/code'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import CodeBlock from '@/components/shared/CodeBlock'

const NavbarOfTerminal = () => {
  return (
    <div className='flex justify-between items-center bg-[#252a33] sticky'>
      <Dialog>
        <DialogTrigger asChild>
          <div className='grid grid-cols-3 w-full'>
            <div className='col-start-3 justify-self-end'>
              <Button data-tour='1'>Show code</Button>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className='max-w-[800px] h-[800px]'>
          <CodeBlock
            code={`${codeTerminalString}`}
            language='javascript'
            showLineNumbers
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default NavbarOfTerminal