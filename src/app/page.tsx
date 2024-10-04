'use client';

import React, { useCallback, useRef, useState } from 'react';
import { Editor, EditorRef } from '@/components/editor';
import { useRouter } from 'next/navigation';
import { debounce } from 'lodash';


export default function Home() {
  // const router = useRouter();
  const editorRef = useRef<EditorRef | null>(null);

  // const [isSaved, setIsSaved] = useState(true);

  // const persistDebounce = useCallback(
  //   debounce((values: any) => {
  //     setIsSaved(true);
  //     window.localStorage.setItem('post', JSON.stringify(values));
  //   }, 1000),
  //   []
  // );

  return (
    <React.Fragment>
      <div className='h-screen flex p-4'>
        <div className='max-w-screen-lg w-full mx-auto relative'>
          <div className='h-full space-y-4'>

            <div className='border bg-background shadow-md rounded-lg'>
              <Editor
                ref={editorRef}
                toolBarClassName='z-50 inset-x-0 w-full bg-toolbar sticky top-0'
                footerClassName='bg-toolbar'
                content={''}
                editorProps={{
                  attributes: {
                    class:
                      'py-6 px-8 prose prose-base prose-blue min-h-[30dvh] prose-headings:scroll-mt-[80px] dark:prose-invert'
                  }
                }}
                onUpdate={({ editor }) => {
                  const html = !editor.isEmpty ? editor.getHTML() : '';
                  console.log('content', html);
                }}
              />
            </div>
          </div>
          {/* 
          <button
            className='bg-indigo-700 text-white h-10 text-sm rounded-md w-full'
            disabled={!isSaved}
          >
            Preview
          </button> */}
        </div>
      </div>
    </React.Fragment >
  );
}