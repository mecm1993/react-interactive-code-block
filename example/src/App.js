import React from 'react'

import {CodeBlock} from 'react-interactive-code-block'
import 'react-interactive-code-block/dist/index.css'

const App = () => {
  return <CodeBlock
    message={'Create React Library Example 😄'}
    typing
    />
}

export default App
