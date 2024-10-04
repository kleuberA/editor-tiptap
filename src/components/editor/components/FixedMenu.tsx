import React from 'react';

import { Editor } from '@tiptap/core';

import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Toolbar } from '@/components/ui/toolbar';
import MenuButtonUndo from '../menuButtons/menuButtonUndo';
import MenuButtonRedo from '../menuButtons/menuButtonRedo';
import MenuSelectHeading from '../menuButtons/menuSelectHeading';
import MenuButtonBold from '../menuButtons/menuButtonBold';
import MenuButtonItalic from '../menuButtons/menuButtonItalic';
import MenuButtonUnderline from '../menuButtons/menuButtonUnderline';
import MenuButtonColor from '../menuButtons/menuButtonColor';
import MenuButtonHighlight from '../menuButtons/menuButtonHighLight';
import MenuButtonOrderedList from '../menuButtons/menuButtonOrderedList';
import MenuButtonBulletedList from '../menuButtons/menuButtonBulletedList';
import MenuButtonBlockQuote from '../menuButtons/menuButtonBlockQuote';
import MenuButtonLink from '../menuButtons/menuButtonLink';
import MenuSelectTextAlign from '../menuButtons/menuButtonSelectTextAlign';


export type FixedMenuProps = {
    editor: Editor;
    className?: string;
};

const FixedMenu = ({ editor, className }: FixedMenuProps) => {
    return (
        <TooltipProvider
            disableHoverableContent
            delayDuration={500}
            skipDelayDuration={0}
        >
            <Toolbar.Wrapper className={className}>
                <Toolbar.Group>
                    <MenuButtonUndo editor={editor} />
                    <MenuButtonRedo editor={editor} />
                </Toolbar.Group>

                <Toolbar.Divider />

                <Toolbar.Group>
                    <MenuSelectHeading editor={editor} />
                </Toolbar.Group>

                <Toolbar.Divider />

                <Toolbar.Group>
                    <MenuButtonBold editor={editor} />
                    <MenuButtonItalic editor={editor} />
                    <MenuButtonUnderline editor={editor} />
                </Toolbar.Group>

                <Toolbar.Divider />

                <Toolbar.Group>
                    <MenuButtonColor editor={editor} />
                    <MenuButtonHighlight editor={editor} />
                </Toolbar.Group>

                <Toolbar.Divider />

                <Toolbar.Group>
                    <MenuSelectTextAlign editor={editor} />
                </Toolbar.Group>

                <Toolbar.Divider />

                <Toolbar.Group>
                    <MenuButtonOrderedList editor={editor} />
                    <MenuButtonBulletedList editor={editor} />
                </Toolbar.Group>

                <Toolbar.Divider />

                <Toolbar.Group>
                    <MenuButtonLink editor={editor} />
                    <MenuButtonBlockQuote editor={editor} />
                </Toolbar.Group>
            </Toolbar.Wrapper>
        </TooltipProvider>
    );
};

export default FixedMenu;