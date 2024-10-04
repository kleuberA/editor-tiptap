import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import TextStyle from '@tiptap/extension-text-style';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import ListItem from '@tiptap/extension-list-item';
import Document from '@tiptap/extension-document';

import Link from './link';
import Heading from './heading';

export const extensions = [
    StarterKit.configure({
        heading: false,
        horizontalRule: false,
        codeBlock: false,
        hardBreak: false,
        dropcursor: {}
    }),
    Document,
    Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
    }),
    Underline,
    TextAlign.configure({
        types: ['heading', 'paragraph']
    }),
    TextStyle,
    Color,
    Highlight.configure({
        multicolor: true
    }),
    ListItem,
    Link.configure({
        openOnClick: false
    }),
    Placeholder.configure({
        placeholder: 'Coloque aqui suas anotações desse artigo.'
    }),
    CharacterCount
];