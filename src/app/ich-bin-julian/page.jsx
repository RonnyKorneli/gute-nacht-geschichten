'use client'
import Image from 'next/image'
import Link from 'next/link'


export default function IchBinJulian(){

    return(
        <div className="mb-[100px] mt-[150px] w-full">
            <div className='w-full flex flex-col h-[800px] md:flex md:flex-row md:h-[400px] md:px-12 '>
                <div className='w-full h-full relative'>
                <Image
                    src='/JulianWithGlasses.jpg'
                    className=' md:rounded-3xl object-cover'
                    fill
                    placeholder='blur'
                    blurDataURL='/images/ich-bin-julian.jpg'
                    alt="Picture of the author"

                    />
                    
                </div>
                <div className='w-full flex px-8 flex-col justify-center items-center md:items-start md:ml-4 text-xl md:justify-start'>
                    <h1 className="text-4xl mt-8  mb-12 text-center font-[700] md:mb-8 md:mt-0">Hey, Ich bin Julian 😊</h1>
                    <p>Hallo, ich bin Julian und lebe in Berlin.</p>
                    <p>Ich liebe es, Geschichten zu lesen und mir eigene auszudenken.</p>
                    <p>Bisher habe ich alle Harry Potter-Bücher, und der Hobbit gelesen.</p>
                    <p>Diese Website entsteht in Zusammenarbeit mit meinem Vater,</p>
                    <p>denn ich möchte meine Freude am Lesen mit euch teilen.</p>
                    <p>Gemeinsam mit ihm schreibe ich die Geschichten für diese Seite.</p>
                    
                </div>
            </div>
            <section className='w-[92%] my-12 rounded-[80px] relative py-4 px-12 mx-12 bg-peach'>
                <h3 className='text-3xl text-slate-800 mt-8 font-[700]'>Hier ist meine Liste <br/> über Bücher die ich gelesen habe:</h3>
                <ol className='text-xl list-decimal font-[500] py-12 px-4'>
                    <li>Harry Potter - Der Stein der Weisen</li>
                    <li>Harry Potter - Und die Kammers des Schreckens</li>
                    <li>Harry Potter - Und der Gefangener von Askabah</li>
                    <li>Harry Potter - Und er Feuerkelch</li>
                    <li>Harry Potter - Und der Orden ders Phönix 5</li>
                    <li>Harry Potter - Und der halb blut Prinz</li>
                    <li>Harry Potter - Und die Heiligtümer des Todes</li>
                    <li>Das Weihnachtsschwein</li>
                    <li>Der Ickabo</li>
                    <li>Der Hobbit</li>
                </ol>

                <div className='w-full flex justify-start '>
                        <Link 
                            href='/geschichten'
                            className='text-white text-2xl absolute bottom-12 right-12 font-[700] flex items-center text-center px-8 py-4 rounded-full bg-blue hover:bg-purple hover:text-black transition duration-200 ease-in-out'
                        >   
                        <p className='w-full flex justify-center'>
                            Zum Geschichten
                        </p>
                        </Link>
                    </div>

               
            </section>
            
        </div>
    )
}