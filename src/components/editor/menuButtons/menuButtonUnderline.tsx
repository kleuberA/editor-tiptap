import React, { memo, useCallback } from 'react';

import { Editor } from '@tiptap/core';
import { useActive } from '@/hooks/useActive';
import { Toolbar } from '@/components/ui/toolbar';
import { Icon } from '@/components/ui/icon';


interface MenuButtonUnderlineProps {
    editor: Editor;
}

const MenuButtonUnderline = ({ editor }: MenuButtonUnderlineProps) => {
    const isUnderlineActive = useActive(editor, 'underline');
    const onUnderline = useCallback(
        () => editor.chain().focus().toggleMark('underline').run(),
        [editor]
    );

    return (
        <Toolbar.Button
            tooltip='Underline'
            tooltipShortcut={['Mod', 'U']}
            active={isUnderlineActive}
            onClick={onUnderline}
        >
            <Icon name='Underline' />
        </Toolbar.Button>
    );
};

export default memo(MenuButtonUnderline, (prevProps, nextProps) => {
    return prevProps.editor === nextProps.editor;
});