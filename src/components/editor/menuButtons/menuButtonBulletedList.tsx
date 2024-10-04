import { Icon } from '@/components/ui/icon';
import { Toolbar } from '@/components/ui/toolbar';
import { useActive } from '@/hooks/useActive';
import { Editor } from '@tiptap/core';
import React, { memo, useCallback } from 'react';


interface MenuButtonBulletListProps {
    editor: Editor;
}

const MenuButtonBulletedList = ({ editor }: MenuButtonBulletListProps) => {
    const isBulletList = useActive(editor, 'bulletList');
    const onBulletList = useCallback(
        () => editor.chain().focus().toggleBulletList().run(),
        [editor]
    );

    return (
        <Toolbar.Button active={isBulletList} onClick={onBulletList}>
            <Icon name='List' />
        </Toolbar.Button>
    );
};

export default memo(MenuButtonBulletedList, (prevProps, nextProps) => {
    return prevProps.editor === nextProps.editor;
});