import React, { memo, useCallback } from 'react';
import { Editor } from '@tiptap/core';
import { Toolbar } from '@/components/ui/toolbar';
import { Icon } from '@/components/ui/icon';


interface MenuButtonRedoProps {
    editor: Editor;
}

const MenuButtonRedo = ({ editor }: MenuButtonRedoProps) => {
    const onRedo = useCallback(
        () => editor.chain().focus().redo().run(),
        [editor]
    );

    return (
        <Toolbar.Button
            tooltip='Redo'
            tooltipShortcut={['Mod', 'Y']}
            disabled={!editor.can().redo()}
            onClick={onRedo}
        >
            <Icon name='Redo' />
        </Toolbar.Button>
    );
};

export default MenuButtonRedo;