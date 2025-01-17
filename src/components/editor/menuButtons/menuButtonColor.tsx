import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ColorPicker } from '../components/ColorPicker';
import { useAttributes } from '@/hooks/useAttributes';
import { Toolbar } from '@/components/ui/toolbar';
import React, { memo, useCallback } from 'react';
import { Icon } from '@/components/ui/icon';
import { Editor } from '@tiptap/core';


type MenuButtonColorProps = {
    editor: Editor;
};

const MenuButtonColor = ({ editor }: MenuButtonColorProps) => {
    const textColor = useAttributes(
        editor,
        'textStyle',
        { color: undefined },
        (attr) => attr.color
    );

    const onColorChange = useCallback(
        (color: string) => editor.chain().setColor(color).run(),
        [editor]
    );

    const onResetColor = useCallback(
        () => editor.chain().focus().unsetColor().run(),
        [editor]
    );

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Toolbar.Button tooltip={'Text Color'}>
                    <Icon
                        name='Baseline'
                        style={{ color: textColor }}
                        className={
                            ' [&>path:not(:first-child)]:text-black [&>path:not(:first-child)]:dark:text-slate-400'
                        }
                    />
                </Toolbar.Button>
            </PopoverTrigger>

            <PopoverContent align='start' side='top' className='w-auto'>
                <ColorPicker
                    color={textColor}
                    onChange={onColorChange}
                    onClear={onResetColor}
                />
            </PopoverContent>
        </Popover>
    );
};

export default memo(MenuButtonColor, (prevProps, nextProps) => {
    return prevProps.editor === nextProps.editor;
});