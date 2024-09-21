import { CodeBlock as CB, dracula } from 'react-code-blocks'

interface IProps {
  code: string
  language: string
  showLineNumbers: boolean
}
const CodeBlock = ({ code, language, showLineNumbers }: IProps) => {
  return (
    <CB
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  )
}

export default CodeBlock
