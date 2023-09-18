"use client"
import getHTMLPages from '@/utils/getHTMLpages'
import { Heading, useColorMode } from '@chakra-ui/react'
import {  useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import styles from './htmlpages.module.css'


export default function HTMLPage() {
  
  
  const searchParams=useSearchParams()
 let decodeHtmlData=''
 let HtmlFormatData=''
  const treeurl=searchParams.get('name')
 
  useEffect(()=>{
    async function getHtmlPagesdata(){
      const htmldata=await getHTMLPages(treeurl)
      const actualHtmlData=htmldata.content
    
      decodeHtmlData=atob(actualHtmlData)
    
     HtmlFormatData=`<pre>${decodeHtmlData}</pre>`
   
     const html=document.getElementById('setdatahere')
     html.innerHTML=HtmlFormatData
    }
    getHtmlPagesdata()

 
    
   
  },[])
  return (
    <div className={styles.html_pageData}>
        <Heading className='text-center font-medium'size='md'>ReadAble Formats</Heading>
        <div id='setdatahere'className={styles.htmlData}> 

        </div>
    </div>
  )
}
