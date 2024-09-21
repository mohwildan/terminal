export const codeTerminalString = `
'use client'

import React from 'react'
import { Input } from 'postcss'
import Terminal, {
  ColorMode,
  TerminalInput,
  TerminalOutput,
} from 'react-terminal-ui'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import CodeBlock from '@/components/shared/CodeBlock'

export default function Home() {
  const [terminalLineData, setTerminalLineData] = React.useState([
    <TerminalOutput>Welcome to my terminal</TerminalOutput>,
    //set help command as default
    <TerminalOutput>Type 'help' to list all available commands</TerminalOutput>,
  ])
  const [showCode, setShowCode] = React.useState(false)

  const onTrigerDialog = () => {
    setShowCode(!showCode)
  }
  const NavbarMenu = () => {
    return (
      <div className='flex justify-between items-center bg-[#252a33] sticky'>
        <Dialog>
          <DialogTrigger asChild>
            <Button className='self-end'>Show code</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'></DialogContent>
        </Dialog>
        <CodeBlock code='const a = 1' language='javascript' showLineNumbers />
      </div>
    )
  }
  const commandOptions = [
    {
      command: 'clear',
      description: 'Clear the terminal screen',
    },
    {
      command: 'help',
      description: 'List all available commands',
    },
    {
      command: 'about',
      description: 'About me',
    },
    {
      command: 'contact',
      description: 'Contact me at my email address or phone number',
    },
  ]

  const onInputTerminal = (terminalInput: string) => {
    const newTerminalLineData = [
      ...terminalLineData,
      <TerminalInput>{terminalInput}</TerminalInput>,
    ]

    switch (terminalInput) {
      //set options for shift command
      case '':
        break
      case 'clear':
        //remove all terminal lines except the first two lines
        newTerminalLineData.splice(2, newTerminalLineData.length - 2)
        setTerminalLineData([])
        break
      case 'help':
        commandOptions.forEach((commandOption, i) => {
          newTerminalLineData.push(
          <TerminalOutput key={\`terminal-\${i}\`}>
  {\`\${commandOption.command} - \${commandOption.description}\`}
</TerminalOutput>
          )
        })
        break
      case 'about':
        newTerminalLineData.push(
          <TerminalOutput>
            {
              "I'm a software engineer with a passion for programming and technology. I have experience in web development, mobile development, and cloud computing."
            }
          </TerminalOutput>
        )
        break
      case 'contact':
        newTerminalLineData.push(
          <TerminalOutput>Email: mohwildanwildan5@gmail.com</TerminalOutput>
        )
        newTerminalLineData.push(
          <TerminalOutput>
            Phone: +6281256994312 (WhatsApp) or +6281256994312 (Telegram)
          </TerminalOutput>
        )
        break
      default:
        newTerminalLineData.push(
          <TerminalOutput>
            Command not found. Type 'help' to list all available commands.
          </TerminalOutput>
        )
        break
    }
    setTerminalLineData(newTerminalLineData)
  }

  return (
    <main>
      <Terminal
        name='Wildan'
        colorMode={ColorMode.Dark}
        onInput={onInputTerminal}
      >
        <NavbarMenu />
        {terminalLineData}
      </Terminal>
      <Dialog open={showCode}>
        <CodeBlock code='const a = 1' language='javascript' showLineNumbers />
      </Dialog>
    </main>
  )
}
`
