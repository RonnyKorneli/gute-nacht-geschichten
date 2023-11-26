'use client'
import React from 'react'
import { Bold } from '@tiptap/extension-bold'
import { Italic } from '@tiptap/extension-italic'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'






const Tiptap = () => {
  const editor = useEditor({
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
            }
        }),
    ],
  })

  if (!editor) {
    return null
  }
  return (

    <div>
        <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`buttonItalic ${editor.isActive('italic') ? 'is-active' : ''}`}
        >
          Italic
        </button>
        <EditorContent editor={editor} />
    </div>
  )
}

export default Tiptap