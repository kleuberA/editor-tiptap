import { Toolbar } from '@/components/ui/toolbar';
import React, { memo, useCallback } from 'react';
import { useActive } from '@/hooks/useActive';
import { Icon } from '@/components/ui/icon';
import { Editor } from '@tiptap/core';

interface MenuButtonOrderedListProps {
    editor: Editor;
}

const MenuButtonOrderedList = ({ editor }: MenuButtonOrderedListProps) => {
    const isOrderedList = useActive(editor, 'orderedList');
    const onOrderedList = useCallback(
        () => editor.chain().focus().toggleOrderedList().run(),
        [editor]
    );

    return (
        <Toolbar.Button active={isOrderedList} onClick={onOrderedList}>
            <Icon name='ListOrdered' />
        </Toolbar.Button>
    );
};

export default memo(MenuButtonOrderedList, (prevProps, nextProps) => {
    return prevProps.editor === nextProps.editor;
});