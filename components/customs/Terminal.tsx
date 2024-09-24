'use client'

import React, { useEffect } from 'react'
import commands from '@/configs/command'
import { useTour } from '@reactour/tour'
import Terminal, {
  ColorMode,
  TerminalInput,
  TerminalOutput,
} from 'react-terminal-ui'

import NavbarOfTerminal from './NavbarOfTerminal'

export default function TerminalCore() {
  const [terminalLineData, setTerminalLineData] = React.useState([
    <TerminalOutput>Welcome to my terminal</TerminalOutput>,
    <TerminalOutput>Type 'help' to list all available commands</TerminalOutput>,
  ])
  const { setIsOpen: setOpen, currentStep } = useTour()

  useEffect(() => {
    setOpen(true)
  }, [currentStep])

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
        commands.forEach((command, i) => {
          newTerminalLineData.push(
            <TerminalOutput key={`terminal-${i}`}>
              {`${command.command} - ${command.description}`}
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
      <div className='h-screen' data-tour='2'>
        <Terminal
          name='Terminal'
          colorMode={ColorMode.Dark}
          onInput={onInputTerminal}
          height='calc(100vh - 110px)'
          prompt='Wildan@Wildan:~$'
        >
          <div>
            <NavbarOfTerminal />
            {terminalLineData}
          </div>
        </Terminal>
      </div>
    </main>
  )
}
