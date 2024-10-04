'use client';

import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { EditorContent, EditorOptions, useEditor } from '@tiptap/react';

import { EditorInstance } from './index';

import { extensions as builtInExtensions } from './extension';
import './styles/index.scss';
import FixedMenu from './components/FixedMenu';
import LinkBubbleMenu from './components/LinkBubbleMenu';
import { getToCItems, TocItem } from './lib/TableOfContents';
export interface EditorProps extends Partial<EditorOptions> {
    toolBarClassName?: string;
    wrapperClassName?: string;
    contentClassName?: string;
    footerClassName?: string;
    displayWordsCount?: boolean;
    onUpdateToC?: (items: TocItem[]) => void;
}

export type EditorRef = {
    getEditor: () => EditorInstance;
};

export const Editor = forwardRef<EditorRef, EditorProps>(
    (
        {
            wrapperClassName,
            toolBarClassName,
            contentClassName,
            footerClassName,
            extensions = [],
            editable = true,
            editorProps,
            content,
            displayWordsCount = true,
            onUpdateToC,
            ...rest
        },
        ref
    ) => {
        const editor = useEditor(
            {
                extensions: [...builtInExtensions, ...extensions],
                immediatelyRender: false,
                content,
                editorProps: {
                    attributes: {
                        class:
                            'py-6 px-8 prose prose-base prose-blue prose-headings:scroll-mt-[80px]'
                    },
                    ...editorProps
                },
                ...rest
            },
            []
        );

        useImperativeHandle(ref, () => ({
            getEditor: () => {
                if (!editor) {
                    throw new Error('Editor is not initialized');
                }
                return editor;
            }
        }));

        // Update editable state if/when it changes
        useEffect(() => {
            if (!editor || editor.isDestroyed || editor.isEditable === editable) {
                return;
            }
            // We use queueMicrotask to avoid any flushSync console errors as
            // mentioned here (though setEditable shouldn't trigger them in practice)
            // https://github.com/ueberdosis/tiptap/issues/3764#issuecomment-1546854730
            queueMicrotask(() => editor.setEditable(editable));
        }, [editable, editor]);

        useEffect(() => {
            if (!editor || editor.isDestroyed) return;
            const items = getToCItems(editor);
            onUpdateToC?.(items);
        }, [editor]);

        useEffect(() => {
            return () => {
                editor?.destroy();
            };
        }, []);

        if (!editor) return null;

        return (
            <div className={wrapperClassName}>
                {editable && (
                    <>
                        <FixedMenu editor={editor} className={toolBarClassName} />
                        <LinkBubbleMenu editor={editor} />
                    </>
                )}

                <EditorContent editor={editor} className={contentClassName} />

                {editable && displayWordsCount && (
                    <div
                        className={`sticky bottom-0 text-sm font-bold flex flex-row justify-end gap-3 border-t border-t-border px-4 py-3 text-right ${footerClassName}`}
                    >
                        <div>
                            {editor.storage.characterCount.characters()} letra(s)
                        </div>
                        <div>
                            {editor.storage.characterCount.words()} palavra(s)
                        </div>
                    </div>
                )}
            </div>
        );
    }
);

Editor.displayName = 'Editor';

export default Editor;