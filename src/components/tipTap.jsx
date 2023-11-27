'use client'
import React from 'react'
import { Underline } from '@tiptap/extension-underline'
import { BulletList } from '@tiptap/extension-bullet-list'
import { Heading } from '@tiptap/extension-heading'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'






const Tiptap = () => {
  const editor = useEditor({
    editorProps: {
        attributes: {
            class: 'border border-slate-300 p-4 min-h-[12rem] max-h-[12rem] min-w-[600px] overflow-y-auto prose outline-none',
        },
        },
    content: 'TEXT',
    extensions: [
        StarterKit.configure({
            Bold:{
                HTMLAttributes: {
                    class: 'boldStyles',
                },
            },
            Italic:{
                HTMLAttributes: {
                    class: 'italicStyles',
                },
            },
            Blockquote:{
                HTMLAttributes: {
                  class: 'BlockStyles',
                },
              }
        }),
        Underline.configure({
            HTMLAttributes: {
              class: 'my-custom-class',
            },
          }),
        Heading.configure({
          HTMLAttributes: {
            class: 'text-red-500 m-0',
            levels: [1, 2, 3],
            },
        }),
        BulletList.configure({
            HTMLAttributes: {
              class: 'text-red-500',
              keepAttributes: true,
              keepMarks: true,
              itemTypeName: 'listItem',  
            },
          })
    ],
  })

  if (!editor) {
    return null
  }
  return (

    <div className='max-w-4xl my-8 mx-auto md:max-w-[640px] lg:max-w-[768px]'>
        <section className='w-full bg-white flex items-center flex-wrap gap-x-4 border border-b-0 py-4 px-4 border-slate-300'>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >Bold</button>

            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >Italic</button>

            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={editor.isActive('underline') ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >underline</button>

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >H1</button>

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >H2</button>

        <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
        >
        List</button>

            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive('blockquote') ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >Block Quote</button>
        </section>

        <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap