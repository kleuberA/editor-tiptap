import React, { memo, useCallback } from 'react';

import { Toolbar } from '@/components/ui/toolbar';
import { useActive } from '@/hooks/useActive';
import { Icon } from '@/components/ui/icon';
import { Editor } from '@tiptap/core';

interface MenuButtonBoldProps {
    editor: Editor;
}

const MenuButtonBold = ({ editor }: MenuButtonBoldProps) => {
    const isBoldActive = useActive(editor, 'bold');
    const onBold = useCallback(
        () => editor.chain().focus().toggleBold().run(),
        [editor]
    );

    return (
        <Toolbar.Button
            tooltip='Bold'
            tooltipShortcut={['Mod', 'B']}
            active={isBoldActive}
            onClick={onBold}
        >
            <Icon name='Bold' />
        </Toolbar.Button>
    );
};

export default memo(MenuButtonBold, (prevProps, nextProps) => {
    return prevProps.editor === nextProps.editor;
});