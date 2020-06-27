# React Interactive Code Block Component

[![NPM](https://img.shields.io/npm/v/react-interactive-code-block.svg)](https://www.npmjs.com/package/react-interactive-code-block) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/mecm1993/react-interactive-code-block/master/LICENSE)
[![Known Vulnerabilities](https://snyk.io/test/github/mecm1993/react-interactive-code-block/badge.svg)](https://snyk.io/test/github/mecm1993/react-interactive-code-block)

## Install

```
npm install --save react-interactive-code-block
```

## Usage

```tsx
import CodeBlock from 'react-interactive-code-block'

class Example extends Component {
  render() {
    return <CodeBlock
      message={'Interactive code block 😄'}
      typing
      speed={30}
      />
  }
}
```

## License

MIT © [mecm1993](https://github.com/mecm1993)

Copyright (c) 2020

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.