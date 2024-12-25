// CustomComponent.tsx
import { PortableTextComponents } from "next-sanity";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export const components: PortableTextComponents = {
    block: {
        h4: ({children}) => <h4 className='text-3xl font-bold text-accentDarkPrimary'>{children}</h4>
    },

    listItem: {
        bullet: ({children}) => <li className='list-disc marker:text-accentDarkSecondary list-inside ml-4'>{children}</li>
    },

    marks: {
        strong: ({children}) => <strong className='font-bold text-dark dark:text-white'>{children}</strong>
    },

    // Add this new type for code blocks
    types: {
        code: ({value}) => {
            return (
                <div className="my-8">
                    <SyntaxHighlighter
                        language={value?.language || 'javascript'}
                        style={atomOneDark}
                        className="rounded-lg !bg-gray-900 !p-4"
                    >
                        {value?.code}
                    </SyntaxHighlighter>
                    {value?.filename && (
                        <p className="text-sm text-gray-500 mt-2">{value.filename}</p>
                    )}
                </div>
            );
        }
    }
};