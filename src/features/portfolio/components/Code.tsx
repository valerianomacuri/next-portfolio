import { CodeBlock, dracula } from "react-code-blocks"
import styles from "../styles/Code.module.css"

type CodeProps = {
  children?: React.ReactNode
}

export const Code = ({ children }: CodeProps) => {
  return (
    <div className={styles.code}>
      <CodeBlock
        text={children}
        language={"typescript"}
        showLineNumbers
        startingLineNumber={1}
        wrapLines
        wrapLongLines
        theme={dracula}
      />
    </div>
  )
}
