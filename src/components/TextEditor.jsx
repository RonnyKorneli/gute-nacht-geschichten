'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Underline } from '@tiptap/extension-underline'
import { Link } from '@tiptap/extension-link'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'






const TextEditor = ({textEditorHandler, initialMarkdown}) => {

  const [editorContent, setEditorContent] = useState(null)
  
  const breakHandler = (e) => {
    e.preventDefault();
    editor.chain().focus().setHardBreak().run()
  }

  const boldHandler = (e) => {
    e.preventDefault();
    editor.chain().focus().toggleBold().run()
  }

  const italicHandler = (e) => {
    e.preventDefault();
    editor.chain().focus().toggleItalic().run()
  }

  const underLineHandler = (e) => {
    e.preventDefault();
    editor.chain().focus().toggleUnderline().run()
  }

  const h1Handler = (e) => {
    e.preventDefault();
    editor.chain().focus().toggleHeading({ level: 1 }).run()
  }

  const h2Handler = (e) => {
    e.preventDefault();
    editor.chain().focus().toggleHeading({ level: 2 }).run()
  }

  const listHandler = (e) => {
    e.preventDefault();
    editor.chain().focus().toggleBulletList().run()
  }

  const setLinkHandler = (e) => {
    e.preventDefault();
    setLink()
  }

  const unsetLinkHandler = (e) => {
    e.preventDefault();
    editor.chain().focus().extendMarkRange('link').unsetLink().run()
  }

  const blockQuoteHandler = (e) => {
    e.preventDefault();
    editor.chain().focus().toggleBlockquote().run()
  }


  const editor = useEditor({
    editorProps: {
        attributes: {
            class: 'border border-slate-300 p-4 min-h-[12rem] max-h-[12rem] overflow-y-auto prose max-w-none outline-none',
        },
      },
    content: initialMarkdown,
    onUpdate({ editor }) {
      const htmlContent = editor.getHTML();
      console.log(htmlContent);
      textEditorHandler(htmlContent)
    },
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
              },
            BulletList:{
              HTMLAttributes: {
                class: 'custom-class',
                keepAttributes: true,
                keepMarks: true,
                itemTypeName: 'listItem',  
              },
            },
            Heading:{
              HTMLAttributes: {
                class: 'custom-class',
                levels: [1, 2, 3],
                },
            },
            HardBreak:{
              HTMLAttributes: {
                class: 'custom-class',
              },
            },
            
        }),
        Underline.configure({
            HTMLAttributes: {
              class: 'my-custom-class',
            },
          }),
        Link.configure({
          HTMLAttributes: {
            class: 'my-custom-class',
          },
        })
    ],
  })

  useEffect(() => {
    if (editor && initialMarkdown) {
      editor.commands.setContent(initialMarkdown);
    }
  }, [initialMarkdown, editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()
  }, [editor])

  if (!editor) {
    return null
  }
  
  return (

    <div className='max-w-4xl my-8 mx-auto md:w-[90%] lg:max-w-[768px]'>
        <section className='w-full bg-white flex items-center flex-wrap gap-x-4 border border-b-0 py-4 px-4 border-slate-300'>
            <button
                onClick={boldHandler}
                className={editor.isActive('bold') ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >Bold</button>

            <button
                onClick={italicHandler}
                className={editor.isActive('italic') ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >Italic</button>

            <button
                onClick={underLineHandler}
                className={editor.isActive('underline') ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >underline</button>

            <button
                onClick={h1Handler}
                className={editor.isActive('heading', { level: 1 }) ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >H1</button>

            <button
                onClick={h2Handler}
                className={editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >H2</button>

            <button
                onClick={listHandler}
                className={editor.isActive('bulletList') ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >
            List</button>

            <button 
                onClick={setLinkHandler} 
                className={editor.isActive('link') ? 'is-active' : ''}
            >setLink</button>

            <button
              onClick={unsetLinkHandler}
              disabled={!editor.isActive('link')}
            >unsetLink</button>

            <button
                onClick={blockQuoteHandler}
                className={editor.isActive('blockquote') ? 'bg-gray-200 p-[2px] rounded' : 'p-[2px]'}
            >Block Quote</button>

            <button 
                onClick={breakHandler}
            >Break</button>

        </section>
        <div className="text-editor" ref={editor.dom} /> {/* Add this div */}
        <EditorContent editor={editor} />

    </div>
  )
}


export default TextEditor