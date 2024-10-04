import { Toolbar } from '@/components/ui/toolbar';
import React, { memo, useCallback } from 'react';
import { useActive } from '@/hooks/useActive';
import { Icon } from '@/components/ui/icon';
import { Editor } from '@tiptap/core';

interface MenuButtonQuoteProps {
    editor: Editor;
}

const MenuButtonBlockQuote = ({ editor }: MenuButtonQuoteProps) => {

    const isBlockquoteActive = useActive(editor, 'blockquote');
    const onBlockquote = useCallback(
        () => editor.chain().focus().toggleBlockquote().run(),
        [editor]
    );

    return (
        <Toolbar.Button
            tooltip='Blockquote'
            tooltipShortcut={['Mod', 'Shift', 'B']}
            active={isBlockquoteActive}
            onClick={onBlockquote}
        >
            <Icon name='Quote' />
        </Toolbar.Button>
    );
};

export default memo(MenuButtonBlockQuote, (prevProps, nextProps) => {
    return prevProps.editor === nextProps.editor;
});