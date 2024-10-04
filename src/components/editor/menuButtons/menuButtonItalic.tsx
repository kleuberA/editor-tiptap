import React, { memo, useCallback } from 'react';

import { Editor } from '@tiptap/core';
import { useActive } from '@/hooks/useActive';
import { Toolbar } from '@/components/ui/toolbar';
import { Icon } from '@/components/ui/icon';


interface MenuButtonItalicProps {
    editor: Editor;
}

const MenuButtonItalic = ({ editor }: MenuButtonItalicProps) => {
    const isItalicActive = useActive(editor, 'italic');
    const onItalic = useCallback(
        () => editor.chain().focus().toggleMark('italic').run(),
        [editor]
    );

    return (
        <Toolbar.Button
            tooltip='Italic'
            tooltipShortcut={['Mod', 'Shift', 'I']}
            active={isItalicActive}
            onClick={onItalic}
        >
            <Icon name='Italic' />
        </Toolbar.Button>
    );
};

export default memo(MenuButtonItalic, (prevProps, nextProps) => {
    return prevProps.editor === nextProps.editor;
});